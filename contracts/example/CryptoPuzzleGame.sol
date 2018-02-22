pragma solidity ^0.4.18;

import "./DriveToken.sol";
import "../drive/CampaignManager.sol";

/**
 * @title CryptoPuzzleGame is the game of guessing a puzzle using cryptographic hash.
 *
 * @dev The game demonstrates how any blockchain game, based on ERC721, can be integrated with the
 * monetization and reward system, based on IZX token.
 * The rules of the game are the following: game master invents a secret number and calculates a hash from it.
 * Players need to guess the secret number, knowing the hash. As the only way to solve this is the direct
 * brute force, it is computationally unrealizable. So the game should have hints or any kind of puzzle,
 * which helps to guess the secret number.
 * For example, game master can create a word or graphic puzzle, and generate the secret code from it.
 * Player, who is the first to solve the puzzle, will be able to unlock the prize and receive ERC721 token
 * (PuzzleToken).
 * The same principle can be applied to a wide variety of games, where the prize can be coded as a secret,
 * and will be hunted or guessed by a player. This also includes IZX augmented reality game, where the token is
 * hunted like Pokemon Go.
 * To be able to create different puzzles, additiona information can be associated with prize as a number ( called _info).
 * This can be used as a hash for IPFS content to get a content of a puzzle in a game, or hash of geographic position
 * of token on the map, or anything else, related to the game rules.
 *
 * @author Aleksey Studnev <studnev@izx.io>
 */
contract CryptoPuzzleGame {

    PuzzleToken         public  token;
    CampaignManager     public  manager;
    uint256             public  constant PRIZE_LIFETIME = 72 hours;

    mapping (uint256 => uint256) public puzzles;

    /**
    * @dev Create the game with the campaign manager.
    * It sets the parameters for payout for this game as well.
    * @param _manager The campaign manager, which will arrange pay reward for prizes of this game
    */
    function CryptoPuzzleGame(CampaignManager _manager) public {
        token = new PuzzleToken();
        manager = _manager;
        manager.set_game_payout( 0, 30, 20, 50, 0.5 ether );
    }


    function issue_prize(uint256 _hash, uint256 _info) public payable {

        require(_hash!=0);
        require(puzzles[_hash]==0);

        uint256 tokenId = token.mint(this);

        manager.register_prize.value(msg.value)(token, msg.sender, this, tokenId, PRIZE_LIFETIME, _info);

        puzzles[_hash]= tokenId;
    }

    function claim_win(uint256 _guess) public {

        uint256 hash = key_hash256(_guess);
        uint256 tokenId = puzzles[hash];
        require(tokenId!=0);

        token.transfer(msg.sender, tokenId);

        delete(puzzles[hash]);

    }

    /// @notice calculate hash using a seed. The same method used to claim a prize
    /// This calculation can be done offline using sha256 hash function on client side
    /// @param _key to get the prize
    /// @return hash of the prize
    function key_hash256(uint256 _key) public view returns(uint256) {
        return uint256(sha256(_key, address(this)));
    }


}