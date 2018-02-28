pragma solidity ^0.4.18;

import "./PuzzleToken.sol";
import "../drive/CampaignManager.sol";

/**
 * @title CryptoPuzzleGame is the game of solving a puzzle using cryptographic hash.
 *
 * @notice WARNING! THIS GAME SHOULD NOT BE USED IN GAMES WITH ANY MONETARY REWARD,
 * AS IT IS SUBJECT FOR RACE CONDITIONS ATTACK.
 *
 * @dev The game demonstrates how any blockchain game, based on ERC721, can be integrated with the
 * monetization and reward system, based on IZX token.
 * The rules of the game are the following: game master invents a secret number and calculates a hash from it.
 * Players need to guess the secret number, knowing the hash. As the only way to solve this is the direct
 * brute force, it is computationally unrealizable. So the game should have hints or any kind of puzzle,
 * which helps to guess the secret number.
 * For example, game master can create a word, or graphic puzzle, and generate the secret code from it.
 * Player, who is the first to solve the puzzle, will be able to unlock the prize and receive ERC721 token
 * (PuzzleToken).
 * The same principle can be applied to a wide variety of games, where the prize can be coded as a secret,
 * and will be hunted or guessed by a player. This also includes IZX augmented reality game, where the token is
 * hunted like Pokemon Go.
 * To be able to create different puzzles, additional information can be associated with prize as a number ( called _info).
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
        manager.set_game_payout( 0, 30, 20, 50, 0.3 ether );
    }


    /**
    * @dev Create the new puzzle and sets a prize for winner. Function is payable,
    * the amount will be used as a fund, distributed for this prize
    * @param _hash is the hash, generated using key_hash256 function from the secret number
    * @param _info is the optional additional information to solve the puzzle and win the game,
    * for example, encrypted geograpic location or hash for IPFS resource. It can also be a
    * key to record in game database to lookup specific puzzle or game requisites.
    * @return Id of token for the puzzle
    */
    function create_puzzle(uint256 _hash, uint256 _info) public payable returns(uint256){

        require(_hash!=0);
        require(puzzles[_hash]==0);

        uint256 tokenId = token.mint(this);

        manager.register_prize.value(msg.value)(token, tokenId, msg.sender, this, PRIZE_LIFETIME, _info);

        puzzles[_hash]= tokenId;

        return tokenId;
    }


    /**
    * @dev Claim that caller solved the puzzle.
    * In response it gets the token, which can be used to get a reward from Campaign Manager.
    * @param _secret is the secret number, guessed by caller
    * @return Id of token for the puzzle
    */
    function claim_win(uint256 _secret) public returns(uint256){

        uint256 hash = key_hash256(_secret);
        uint256 tokenId = puzzles[hash];
        require(tokenId!=0);

        token.transfer(msg.sender, tokenId);

        delete(puzzles[hash]);

        return tokenId;

    }

    /**
    * @dev calculate hash using a secret number. The same method used to claim a prize
    * Note, that this calculation can be done offline using sha256 hash function on client side
    * @param _secret is the secret number
    * @return hash of the prize
    */
    function key_hash256(uint256 _secret) public view returns(uint256) {
        return uint256(sha256(_secret, address(this)));
    }


}