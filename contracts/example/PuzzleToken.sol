pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';
import 'zeppelin-solidity/contracts/ownership/Ownable.sol';


/**
 * @title PuzzleToken for CryptoPuzzleGame
 *
 * @dev ERC721 token, used in demo game ( CryptoPuzzleGame ) to demonstrate, how
 * IZX reward can be associated with the prize from an arbitrary game with ERC721 token.
 * The token is given to a winner, who guessed the puzzle. After that, it can be exchange to reward
 * using CampaignManager.
 *
 * @author Aleksey Studnev <studnev@izx.io>
 */
contract PuzzleToken is ERC721Token, Ownable {

    string public name = 'Puzzle Win';
    string public symbol = 'PUZZLE';

    uint256 last_tokenId = 1; // used to generate token IDs for prizes

    using SafeMath for uint256;

    /**
    * @dev mint a token ang give it to address
    * @param _to The address to transfer the new minted token
    * @return minted token ID
    */
    function mint(address _to) onlyOwner public returns(uint256) {
        _mint(_to, last_tokenId);
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

