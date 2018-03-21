pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';
import 'zeppelin-solidity/contracts/ownership/Ownable.sol';


/**
 * @title DriveToken
 *
 * @dev ERC721 token with ability to mint and associated arbitrary data
 *
 * @author Aleksey Studnev <studnev@izx.io>
 */
contract DriveToken is ERC721Token, Ownable {

    string public name = 'Puzzle Win';
    string public symbol = 'PUZZLE';

    uint256 last_tokenId = 1; // used to generate token IDs for prizes

    using SafeMath for uint256;

    mapping(uint256 => bytes) public token_data;

    /**
    * @dev mint a token ang give it to address
    * @param _to The address to transfer the new minted token
    * @return minted token ID
    */
    function mint(address _to, bytes _data) onlyOwner public returns(uint256) {
        _mint(_to, last_tokenId);
        token_data[last_tokenId] = _data;
        last_tokenId = last_tokenId.add(1);
    }

    /**
    * @dev token owner burns it
    * @param _tokenId token ID to burn
    */
    function burn(uint256 _tokenId) public {
        _burn(_tokenId);
    }

}

