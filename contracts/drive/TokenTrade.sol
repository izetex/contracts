pragma solidity ^0.4.18;

contract TokenTrade  {

    // ----- functions called by dealer ----- //
    function createDeal(uint _tokenId, uint _expiration) public;
    function closeDeal(uint _tokenId) public;

    // ----- functions called by contributors ----- //
    function contribute(uint _tokenId, uint256 _amount) public;
    function claim(uint _tokenId) public;
    function withdraw(uint _tokenId) public;

}