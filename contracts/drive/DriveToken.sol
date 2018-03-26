pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';
import 'zeppelin-solidity/contracts/ownership/Ownable.sol';


/**
 * @title DriveToken
 *
 * @dev ERC721 token with ability to mint / burn and with associated arbitrary data
 * DriveToken is intended for use in AR IZX game, where people are hunting
 * tokens on the map using mobile device. After the token is captured, it can be claimed
 * and exchange for IZX ERC-20 tokens in Campaign contract.
 *
 * @notice In IZX game, token_data contains the encrypted pointer to geo location of the token.
 * It also may include additional encrpted information, like message or image, associated with the token.
 * When player finds the token, he can read or see the message.
 *
 * @author Aleksey Studnev <studnev@izx.io>
 */
contract DriveToken is ERC721Token, Ownable {

    string public name = 'IZX Drive';
    string public symbol = 'DRIVE';

    uint256 last_tokenId = 1; // used to generate token IDs for prizes

    using SafeMath for uint256;

    mapping(uint256 => bytes) public token_data; // arbitrary data associated with the token on mint

    /**
    * @dev mint a token ang give it to address
    * @param _to The address to transfer the new minted token
    * @param _data The data, associated with the token. It can be a data itself, or hash for lookup in
    * a decentralized storage, like IPFS
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

