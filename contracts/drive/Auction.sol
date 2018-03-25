pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';

import './TokenDriver.sol';

contract Auction  {

    TokenDriver public driver;
    ERC721      public erc721token;
    address     public creator;

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

    function Auction( address _creator, ERC721 _token) public {
        require(address(_token) != address(0));
        driver = TokenDriver(msg.sender);
        erc721token = _token;
        creator = _creator;
    }

    function sell( uint _tokenId, uint _start_price, uint _sale_price, uint _finish_at) public {

    }

    function bid( uint _tokenId, uint _amount ) public {

    }

}