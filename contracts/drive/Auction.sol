pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';

import './TokenDriver.sol';

contract Auction  {

    TokenDriver public driver;
    ERC721      public erc721token;

    /**
    * @dev Throws if called by any account other than the token driver.
    */
    modifier onlyDriver() {
        require(msg.sender == address(driver));
        _;
    }

    function Auction( ERC721 _token) public {
        require(address(_token) != address(0));
        driver = TokenDriver(msg.sender);
        erc721token = _token;
    }

    function sell( uint _tokenId, uint _start_price, uint _sale_price, uint _finish_at) public {

    }

    function bid( uint _tokenId, uint _amount ) public {

    }

}