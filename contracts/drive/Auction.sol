pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';

import '../token/IZXToken.sol';
import './TokenDriver.sol';

contract Auction  {

    TokenDriver public driver;
    ERC721      public erc721token;
    IZXToken    public  izx;
    address     public owner;

    uint        public owner_share;

    event Opened( address indexed token, address indexed owner, uint256 tokenId);
    event Bid( address indexed token, address indexed bidder, uint256 tokenId, uint256 amount);
    event Sold( address indexed token, address indexed winner, uint256 tokenId, uint256 amount);

    /**
    * @dev Throws if called by any account other than the token driver.
    */
    modifier onlyDriver() {
        require(msg.sender == address(driver));
        _;
    }

    function Auction( address _owner, ERC721 _token, uint _owner_share ) public {
        require(address(_token) != address(0));
        require(_owner_share <= 100);

        driver = TokenDriver(msg.sender);
        izx = driver.token();
        erc721token = _token;
        owner = _owner;
        owner_share = _owner_share;
    }

    function sell( uint _tokenId, uint _start_price, uint _sale_price, uint _finish_at) public {

    }

    function bid( uint _tokenId, uint _amount ) public {

    }

}