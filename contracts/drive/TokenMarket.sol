pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import '../token/ERC20.sol';


contract TokenMarket is Ownable {

    struct Deal {
        address initialTokenOwner;

        mapping(address => uint256) contributions;
    }


    ERC721                          public  asset_token;
    ERC20                           public  unit_token;

    mapping(uint256 => Deal)        public  deals;
    mapping(address => uint256)     public  balances;

    event Contributed( address indexed contributor, address indexed token, uint256 indexed tokenId, uint256 value);

    function TokenMarket(){

    }

    function createDeal(uint _tokenId){
        deals[_tokenId] = Deal(  asset_token.ownerOf(_tokenId) );
    }

    function contribute(uint _tokenId){

        require(balances[msg.sender] > 0);
        Deal storage deal = deals[_tokenId];
        require(deal.initialTokenOwner != address(0));

        uint256 amount = balances[msg.sender];
        deal.contributions[msg.sender] += amount;
        balances[msg.sender] = 0;

        Contributed(msg.sender, asset_token, _tokenId, amount);
    }


    function closeDeal(){

    }

    function withdrawDeal(){

    }

    /* --- called from controller ( owner ) --- */
    function depositedFrom(address _sender, uint _amount) onlyOwner {
        balances[_sender] += _amount;
    }

    function contributedFrom(address _sender, uint _amount, uint _tokenId) onlyOwner{
        Deal storage deal = deals[_tokenId];
        require(deal.initialTokenOwner != address(0));
        deal.contributions[_sender] += _amount;
        Contributed(_sender, asset_token, _tokenId, _amount);
    }



}