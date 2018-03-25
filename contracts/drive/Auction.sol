pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import 'zeppelin-solidity/contracts/math/SafeMath.sol';

import '../token/IZXToken.sol';
import './TokenDriver.sol';

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
    * @dev Throws if called by any account other than the token driver.
    */
    modifier onlyDriver() {
        require(msg.sender == address(driver));
        _;
    }

    function Auction( address _host, ERC721 _token, uint _host_share ) public {
        require(address(_token) != address(0));
        require(_host_share <= 100);

        driver = TokenDriver(msg.sender);
        izx = driver.token();
        erc721token = _token;
        host = _host;
        host_share = _host_share;
    }

    function sell( uint _tokenId, uint _start_price, uint _sale_price, uint _finish_at) public {
        require( msg.sender == erc721token.ownerOf(_tokenId) );
        require( _sale_price >= _start_price );
        require( _finish_at > now );
        require( items[_tokenId].finish_at < now );

        items[_tokenId] = Item(msg.sender, address(0), _finish_at, _start_price, _sale_price, 0);

        Sale( erc721token, msg.sender, _tokenId);
    }

    function bid( uint _tokenId, uint _amount ) public {
        Item storage item = items[_tokenId];
        require( item.finish_at > now );
        require( _amount > item.amount );
        require( _amount >= item.start_price );

        if( item.winner == address(0)){
            erc721token.takeOwnership(_tokenId);
        }else{
            require(transferFrom(this, item.winner, item.amount));
        }

        if( _amount >= item.sale_price ){
            require(transferFrom(msg.sender, this, item.sale_price));
            close(_tokenId, item.owner, msg.sender, item.sale_price);
        }else{
            require(transferFrom(msg.sender, this, _amount));
            item.winner = msg.sender;
            item.amount = _amount;
        }

        Bid( erc721token, msg.sender, _tokenId, _amount);
    }

    function withdraw(uint _tokenId) public {
        Item storage item = items[_tokenId];
        require( msg.sender == item.winner );
        require( now > item.finish_at );

        close(_tokenId, item.owner, msg.sender, item.amount);
    }

    // --- INTERNALS ----
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