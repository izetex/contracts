pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import 'zeppelin-solidity/contracts/math/SafeMath.sol';

import '../token/IZXToken.sol';
import './TokenDriver.sol';

/**
 * @title Campaign
 *
 * @dev Campaign is a contract between advertiser, host (which typically is the game owner) and game players.
 *
 * The basic sequence of campaign consists of steps:
 *  1) The game manager creates the campaign in TokenDriver contract to allow advertisers to use
 *  the game ERC721 token for advertisers. The address of the new contract is promoted to players and advertisers.
 *  2) Advertiser approves an amount of IZX tokens to use by this campaign using ERC20 interface
 *  3) Player, owing an ERC721 token in the game, calls claim() method to monetize his token.
 *  This call reserves ERC721 and IZX tokens on this contract, so that the agreement between them is ensured to be
 *  executed.
 *  4) Advertiser approves the payment by calling convert() method. This transaction distributes IZX
 *  payout to player and the host of this contract, and transfers ERC721 token to advertiser.
 *
 * The result of execution is that IZX token is sent to host and player, and ERC721 is sent to advertiser.
 * The side effect, and most important to advertiser, is that advertiser is approving actual transaction to happen.
 * Advertiser can use this to convert only visitors of offline shop, or require any other activities
 * for transaction to happen. If player fails to satisfy these requirements, he or she may call reclaim() method
 * to return ERC721 token back.
 *
 * @notice Campaign is created using TokenDriver to allow IZX token to be approved and transfered to this contract.
 * The campaign can work with any ERC721-compliant token in any game. if the game does not have one,
 * it can create a ERC721 token - look DriveToken contract as example.
 *
 * Tokens, transfered to advertiser, can be later burnt, or used in auction ( look Auction contract ) to gain some
 * IZX back.
 *
 * @author Aleksey Studnev <studnev@izx.io>
 */
contract Campaign {

    struct Prize {
        address advertiser;
        address winner;
        uint    expires_at;
    }

    TokenDriver public  driver;
    ERC721      public  erc721token;
    IZXToken    public  izx;
    address     public  host;
    uint        public  lifetime;
    uint        public  token_price;
    uint        public  winner_payout;
    uint        public  host_payout;
    
    mapping(uint256 => Prize) public prizes;

    event Claimed( address indexed token, address indexed winner, address indexed advertiser, uint256 tokenId);
    event Reclaimed( address indexed token, address indexed winner, address indexed advertiser, uint256 tokenId);
    event Converted( address indexed token, address indexed winner, address indexed advertiser, uint256 tokenId);

    using SafeMath for uint256;

    /**
    * @dev create a new advertising contract for ERC721 token
    *
    * @param _host The initiator of the capaign creation. Typically it is a game owner or promoter
    * @param _token The address of ERC721 token, traded in new campaign
    * @param _lifetime The time period in seconds, allowed to convert the prize
    * after it is claimed by ERC721 token owner. I this time expires, and prize is not converted to IZX tokens,
    * the token can be returned to the initial owner.
    * @param _token_price Price of every ERC721 token in IZX, payed by advertiser.
    * @param _host_share Percentage (0 to 100) share of the payout for
    * every completed conversion in the new contract. If equal to 0, all token price is payed
    * to the winner of the prize. If set to 100, all bid is payed to host, nothing left to the winner.
    */
    function Campaign(  address _host, 
                        ERC721 _token, 
                        uint _lifetime, 
                        uint _token_price,
                        uint _host_share) public {

        require(address(_token) != address(0));
        require(_lifetime > 0);
        require(_token_price > 0);
        require(_host_share <= 100);
        
        driver = TokenDriver(msg.sender);
        izx = driver.token();
        erc721token = _token;
        host = _host;
        lifetime = _lifetime;
        token_price = _token_price;

        host_payout = _host_share.mul(token_price) / 100;
        winner_payout = _token_price.sub(host_payout);
    }

    /**
    * @dev player claims owing the ERC721 token
    *
    * @param _tokenId ID of owned ERC721 token in the game
    * @param _advertiser The address of advertiser, who is assumed to convert this token
    *
    * @notice player must call ERC721 approve method to allow this contract to take ownershio of the token,
    * effectively reserving it for conversion. Also, the token price in IZX is reserved from advertiser account.
    */
    function claim(uint _tokenId, address _advertiser) public {
        require(msg.sender == erc721token.ownerOf(_tokenId));
        require(izx.transferFrom(_advertiser, this, token_price));

        erc721token.takeOwnership(_tokenId);
        prizes[_tokenId] = Prize(_advertiser, msg.sender, now.add(lifetime) );

        Claimed(erc721token, msg.sender, _advertiser, _tokenId);
    }

    /**
    * @dev action, opposite to claim. Player, who claimed the token can call this before convert,
    * or anybody can call this after prize is expired.
    *
    * @param _tokenId ID of claimed ERC721 token
    *
    * @notice player get his ERC721 back, and advertiser receives token price IZX amount.
    * This transaction reverts claim transaction.
    */
    function reclaim(uint _tokenId) public {
        Prize storage prize = prizes[_tokenId];
        require(prize.winner == msg.sender || now > prize.expires_at);
        address advertiser = prize.advertiser;

        erc721token.transfer(prize.winner, _tokenId);
        require(izx.transferFrom(this, advertiser, token_price));

        delete prizes[_tokenId];

        Reclaimed( erc721token, msg.sender, advertiser, _tokenId);
    }

    /**
    * @dev advertiser calls this method to approve IZX payout to player and host.
    *
    * @param _tokenId ID of claimed ERC721 token
    *
    * @notice payout distribution depends on host_share percentage.If equal to 0, all token price is payed
    * to the player, claiming the prize. If set to 100, all bid is payed to host, nothing left to the player.
    * On success, ERC721 token is transfered to advertiser, which he can burn or sell in auction, or put back to game
    * on his will.
    */
    function convert(uint _tokenId) public {
        Prize storage prize = prizes[_tokenId];
        require(prize.advertiser == msg.sender);

        address winner = prize.winner;
        erc721token.transfer(prize.advertiser, _tokenId);
        
        if(winner_payout>0){
            require(izx.transferFrom(this, winner, winner_payout));
        }

        if(host_payout>0){
            require(izx.transferFrom(this, winner, host_payout));
        }

        delete prizes[_tokenId];

        Converted( erc721token, winner, msg.sender, _tokenId);
    }


}