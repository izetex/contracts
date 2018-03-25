pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';

import './TokenDriver.sol';

contract Campaign {

    TokenDriver public driver;
    ERC721      public erc721token;
    address     public creator;
    uint        public lifetime;
    uint        public token_price;

    event AdvertiserApproved( address indexed token, address indexed advsertiser, uint256 amount);
    event Claimed( address indexed token, address indexed owner, address indexed advsertiser, uint256 tokenId);
    event Reclaimed( address indexed token, address indexed owner, address indexed advsertiser, uint256 tokenId);
    event Converted( address indexed token, address indexed owner, address indexed advsertiser, uint256 tokenId);

    /**
    * @dev Throws if called by any account other than the token driver.
    */
    modifier onlyDriver() {
        require(msg.sender == address(driver));
        _;
    }

    function Campaign( address _creator, ERC721 _token, uint _lifetime, uint _token_price) public {

        require(address(_token) != address(0));
        require(_lifetime > 0);
        require(_token_price > 0);

        driver = TokenDriver(msg.sender);
        erc721token = _token;
        creator = _creator;
        lifetime = _lifetime;
        token_price = _token_price;
    }


    function claim(uint _tokenId, address _advertiser) public {
    }

    function reclaim(uint _tokenId) public {
    }

    function convert(uint _tokenId) public {
    }

    // Methods called by token driver

    function approved(address _approver, uint256 _amount) public onlyDriver returns(bool){
        return false;
    }

}