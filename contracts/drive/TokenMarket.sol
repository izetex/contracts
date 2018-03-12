pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import '../token/ERC20.sol';


contract TokenMarket is Ownable {

    struct Deal {
        address dealOwner;
        uint    balance;
        bool    active;

        mapping(address => uint256) contributions;
    }

    ERC721                          public  asset_token;
    ERC20                           public  unit_token;

    mapping(uint256 => Deal)        public  deals;
    mapping(address => uint256)     public  balances;

    event Contributed( address indexed contributor, address indexed token, uint256 indexed tokenId, uint256 value);
    event DealCreated( address indexed owner, address indexed token, uint256 indexed tokenId);

    function TokenMarket(){

    }

    function createDeal(uint _tokenId){
        address dealOwner = asset_token.ownerOf(_tokenId);
        deals[_tokenId] = Deal( dealOwner, 0, true );

        DealCreated( dealOwner, asset_token, _tokenId);
    }

    function contribute(uint _tokenId) public {
        uint256 amount = balances[msg.sender];
        register_contribution( msg.sender, amount,  _tokenId);
        balances[msg.sender] = 0;

        Contributed(msg.sender, asset_token, _tokenId, amount);
    }


    function closeDeal(uint _tokenId) public {
        Deal storage deal = deals[_tokenId];
        require(deal.active);
        require(deal.dealOwner == msg.sender );

    }

    function withdrawDeal(){

    }

    // ----- functions called from controller ( owner ) ----- //

    function depositedFrom(address _sender, uint _amount) onlyOwner external {
        balances[_sender] += _amount;
    }

    function contributedFrom(address _sender, uint _amount, uint _tokenId) onlyOwner external {
        register_contribution( _sender,  _amount,  _tokenId);
        Contributed(_sender, asset_token, _tokenId, _amount);
    }

    function register_contribution(address _sender, uint _amount, uint _tokenId) private {
        require(_amount>0);
        Deal storage deal = deals[_tokenId];
        require(deal.active);

        deal.contributions[_sender] += _amount;
        deal.balance += _amount;
    }

}