pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import 'zeppelin-solidity/contracts/math/SafeMath.sol';

import '../token/IZXToken.sol';
import './TokenDriver.sol';

/**
 * @title Auction contract
 *
 * @dev Auction is a contract between ERC721 token seller, host (which typically is the game owner) and
 * token buyers. Intended to buys/sell ERC721 tokens (intangible, non-tradeable)
 * for IZX tokens (tangible, tradeable) .
 *
 *  Rules of the auction is:
 *
 *  Seller approves ERC721 token with tokenId to be sold on the auction. He or she specifies tokenId to be sold,
 *  and the auction paramteres:
 *    - the start_price in IZX, the minimum bid amount;
 *    - sale_price in IZX , immediate sale bid amount;
 *    - finish_at, when auction finishes
 *
 *  Buyer approves some amount of IZX tokens to auction, and then can make bids in limit of the approved amount.
 *  Buyer makes bids in auction:
 *    - bid amount must not be less than start_price, specified by the seller
 *    - bid amount must not be larger, than the amount of the previous bidder if any
 *    - bid can only be made before finish_at time
 *    - if bid amount is equal or larger than the sale_price, the bid is closed and tokens are transfered as specified below.
 *    - after the finish_at time the unclosed bids can be withdrawn using withdraw method. It can be caled by the winner,
 *    or anybody else after the finish_at time.
 *
 *   On the auction closing ( on finish_time or sale_price ):
 *    - ERC721 token is transfered to the winner of auction. ERC721 token is transfered to the auction contract at time of the
 *    first successfull bid. It is then transfered to the winner on auction close.
 *    - IZX token is trabsfered to the seller and the host of the auction in the proportions, defined by the host at time of
 *    the auction creation. host_share is the percentage (0 to 100) share of the payout for
 *    every completed conversion in the new contract. If equal to 0, all token price is payed
 *    to the winner of the prize. If set to 100, all bid amount is payed to host, nothing left to the winner.
 *
 *
 * The basic sequence of auction consists of steps:
 *  1) The game manager creates the auction in TokenDriver contract to allow players to sell
 *  game ERC721 token for IZX. The address of the new contract is promoted to players (potential sellers and buyers ).
 *  2) Seller, owing ERC721 token, approves it to this auction using ERC721 method approve
 *  3) Seller calls sell method of this contract, specifying desired auction parameters.
 *  4) Buyer allows an amount of IZX to be transfered of this contract
 *  5) Buyer calls bid method of the contract to make a bid on particular token ID
 *  6) Buyer can win immedeately, if the amount of bid is equal or larger, than the sale price,
 *  specified in the auction. If it happens, he gets ERC721 token, and an amount of IZX is withdrawn from
 *  his account.
 *  7) Otherwise, the winner is determined by the last bid before auction finish time. After that, calling
 *  withdraw method will transfer tokens.
 *
 * @notice Auction is created using TokenDriver to allow IZX token to be approved and transfered to this contract.
 * The campaign can work with any ERC721-compliant token.
 *
 * @author Aleksey Studnev <studnev@izx.io>
 */
contract Auction  {

    struct Item {
        address owner;
        address winner;
        uint    finish_at;
        uint    start_price;
        uint    sale_price;
        uint    amount;
    }

    TokenDriver public  driver;
    ERC721      public  erc721token;
    IZXToken    public  izx;
    address     public  host;
    uint        public  host_share;

    mapping(uint256 => Item) public items;

    event Sale( address indexed token, address indexed owner, uint256 tokenId);
    event Bid( address indexed token, address indexed bidder, uint256 tokenId, uint256 amount);
    event Sold( address indexed token, address indexed winner, uint256 tokenId, uint256 amount);

    using SafeMath for uint256;

    /**
    * @dev creates a new auction contract for ERC721 token
    * @param _host The initiator of the auction creation. Typically it is a game owner or promoter
    * @param _token The address of ERC721 token, traded in new auction
    * @param _host_share Percentage (0 to 100) share of the payout for
    * every completed auction sale in the new contract. If equal to 0, all bid is payed
    * to the winner of the auction. If set to 100, all bid is payed to host, nothing left to bidder.
    */
    function Auction( address _host, ERC721 _token, uint _host_share ) public {
        require(address(_token) != address(0));
        require(_host_share <= 100);

        driver = TokenDriver(msg.sender);
        izx = driver.token();
        erc721token = _token;
        host = _host;
        host_share = _host_share;
    }

    /**
    * @dev start a new round fo auction to sell ERC721 token for IZX
    * @param _tokenId ERC721 token ID to be sold in auction.
    * @param _start_price Minimum bid amount in IZX. Note, that IZX has 18 decimals.
    * @param _sale_price Bid amount for immedeate sale close. Note, that IZX has 18 decimals.
    * @param _duration duration in seconds, after which auction round is finished. After this, call withdraw method
    * to get tokens.
    *
    * @notice Caller must be an owner of the ERC721 token ID and Caller must approve the token to this contract.
    */
    function sell( uint _tokenId, uint _start_price, uint _sale_price, uint _duration) public {
        require( msg.sender == erc721token.ownerOf(_tokenId) );
        require( _sale_price >= _start_price );
        require( _duration > 0 );
        require( items[_tokenId].owner == address(0) );

        items[_tokenId] = Item(msg.sender, address(0), now.add(_duration), _start_price, _sale_price, 0);

        Sale( erc721token, msg.sender, _tokenId);
    }

    /**
    * @dev make a bid to buy ERC721 token for IZX for specified amount of IZX
    * @param _tokenId ERC721 token ID to be bought
    * @param _amount IZX amount which in maximum caller wishes to pay.
    *
    * @notice Caller must own IZX tokens in this amount and must approve the spending to this contract.
    * If _amount is larger than sale_price, then only sale_price is withdrawn from caller.
    */
    function bid( uint _tokenId, uint _amount ) public {
        Item storage item = items[_tokenId];
        require( item.finish_at > now );
        require( _amount > item.amount );
        require( _amount >= item.start_price );

        if( item.winner == address(0)){
            erc721token.takeOwnership(_tokenId);
        }else{
            require(izx.transfer(item.winner, item.amount));
        }

        if( _amount >= item.sale_price ){
            require(izx.transferFrom(msg.sender, this, item.sale_price));
            close(_tokenId, item.owner, msg.sender, item.sale_price);
        }else{
            require(izx.transferFrom(msg.sender, this, _amount));
            item.winner = msg.sender;
            item.amount = _amount;
        }

        Bid( erc721token, msg.sender, _tokenId, _amount);
    }

    /**
    * @dev withdraw ERC721 and IZX tokens after finish_at time of the auction
    * @param _tokenId ERC721 token ID to be transfered
    */
    function withdraw(uint _tokenId) public {
        Item storage item = items[_tokenId];
        require( now > item.finish_at );
        require( item.amount > 0);

        close(_tokenId, item.owner, item.winner, item.amount);
    }

    // --- INTERNAL METHODS ----

    /**
    * @dev closes the auction, transfers IZX and ERC721 token.
    *
    * @param _tokenId ERC721 token ID to be transfered to auction winner
    * @param _owner is the seller address
    * @param _winner is the buyer address
    * @param _amount is the bid amount
    *
    * @notice this method called in 2 cases: after the finish_at by manual withdraw or by
    * bid method, when amount is larger or equal to tsbid price.
    */
    function close(uint _tokenId, address _owner, address _winner, uint _amount) internal {

        uint host_amount = _amount.mul(host_share) / 100;
        if(host_amount>0){
            izx.transfer(host, host_amount);
        }

        uint owner_amount = _amount.sub(host_amount);
        if(owner_amount>0){
            izx.transfer(_owner, owner_amount);
        }

        erc721token.transfer(_winner, _tokenId);

        delete items[_tokenId];
        Sold( erc721token, _winner, _tokenId, _amount);

    }

}