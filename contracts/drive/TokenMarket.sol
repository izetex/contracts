pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import '../token/ERC20.sol';


contract TokenMarket  {

    struct Deal {
        uint    tokenId;
        address initialTokenOwner;

        mapping(address => uint256) contributions;
    }


    ERC721                          public  asset_token;
    ERC20                           public  unit_token;

    mapping(uint256 => Deal)        public  deals;
    mapping(address => uint256)     public  balances;


    function TokenMarket(){

    }

    function createDeal(){

    }

    function contribute(){

    }

    function closeDeal(){

    }

    function withdrawDeal(){

    }

}