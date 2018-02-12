pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';
import 'zeppelin-solidity/contracts/ownership/Ownable.sol';


contract DriveToken is ERC721Token, Ownable {

    string public name = 'IZX Drive';
    string public symbol = 'DRIVE';

    uint256 last_tokenId = 1; // used to generate token IDs for prizes

    using SafeMath for uint256;

    function mint(address _to) onlyOwner public returns(uint256) {
        _mint(_to, last_tokenId);
        last_tokenId = last_tokenId.add(1);
    }

    function burn(uint256 _tokenId) public {
        _burn(_tokenId);
    }

}

