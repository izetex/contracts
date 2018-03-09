pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import '../token/IZXToken.sol';
import './Deal.sol';

contract Marketplace is Ownable, TokenController {

    mapping(uint256 => Deal)   public  deals;

    function Marketplace(IZXToken izx_token) {

    }

    function create_deal( ERC721 _token, uint _tokenId) public {
        deals[_tokenId] = new Deal(_token, _tokenId);
    }



}