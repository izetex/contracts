pragma solidity ^0.4.11;

import "../token/ERC20.sol";
import "../util/Owned.sol";
import "./GameController.sol";
import "../util/SafeMath.sol";

/**
 * @title Game
 * @dev Game is a contract to perform the game by guessing seed to hash.
 *
 * Rules of the game are:
 *
 * 1) Game issuer places number of prizes, identified by hashes. The seed to calculate that hashes are unknown
 *   and  kept in secret
 * 2) Players play the game, and the issuer may give a secret seed to a winner. Winner claims the prize and gets a reward
 *
 * The reward can be distributed in arbitrary way, depending on the sub-classed contract for a real game.
 * Look FreeGame and RevShareGame for real examples. The contract can be extended by overriding methods
 * issue and payout, which defines how to calculate the prize value and pay reward to winner, issuer,
 * game owner and others.
 *
 * The prize is issued using a token reservation. The token controls the amount of prize to be issued.
 * Token owners first allow the game to transfer certain amount of tokens, the GameController contract is responsibe for this.
 *
 * The prize can be set to be expired at some moment in the future. When expired, tokens will be returned to token owners,
 * and money returned to issuer.
 *
 * Money are pulled from the contract using the withdraw() method.
 *
 * @author Aleksey Studnev <studnev@izx.io>
 */
contract Game is Owned, SafeMath {

    // Prize is issued by issuer, using a tokens, borrowed from owner
    // value is the amount, payed to borrow the tokens
    // expiration is the time in the future, when the prize expires and can be
    // fetched back
    struct Prize {
        address issuer;     // issuer of the prize. He setup the game rules and hash to guess
        address owner;      // owner of the tokens, used in prize
        uint256 tokens;     // number of tokens per prize
        uint256 value;      // money spent on the prize
        uint256 expiration; // unix timestamp of expiration
    }

    // State variables
    ERC20                           public token;               // token used to create a prize for the game
    GameController                  public controller;          // game controller for token allowance control
    uint256                         public prize_life_time;     // time from prize creation to expiration in seconds
    mapping (uint256 => Prize)      public prizes;              // prizes by hashes
    mapping (address => uint)       public pendingWithdrawals;  // withdrawal amounts for pull payments

    // Events
    event Issue(address indexed issuer, address indexed owner, uint256 hash, uint256 tokens, uint256 value, uint256 expiration);
    event Claim(address indexed issuer, address indexed owner, address indexed winner, uint256 hash, uint256 tokens, uint256 value);
    event Revoke(address indexed issuer, address indexed owner, uint256 hash, uint256 tokens, uint256 value);

    /// @notice Game constructor. Called by game owner ("developer")
    /// @param _token ERC20 token, used in game, not 0
    /// @param _controller GameController, used to controlled token allowances, not 0
    /// @param _prize_life_time time from prize creation to expiration in seconds
    function Game(  ERC20 _token, GameController _controller, uint256 _prize_life_time  ) public {
        require(address(_token)!=address(0));
        require(address(_controller)!=address(0));
        require( _prize_life_time > 0 );
        token = _token;
        controller = _controller;
        prize_life_time = _prize_life_time;
    }


    /// @notice revoke prizes. Issuer can revoke all prizes issued by him, at any time. All other can revoke only expired prizes
    /// @param _hashes array of hashes to revoke prizes
    function revoke(uint256[] _hashes) public {
        for(uint i=0;i<_hashes.length;i++){
           Prize storage prize = prizes[_hashes[i]];
           if( now>prize.expiration || msg.sender==prize.issuer ){
              expire_prize(prize, _hashes[i]);
           }
        }
    }

    /// @notice prize, claimed by using a key. Prize can be claimed in reward to winner by the winner himself
    /// or third party. Apparently, key can be used just once, as it is revealed after this call and the prize is deleted.
    /// @param _key to get the prize
    /// @param _winner a winner, rewarded for the prize
    /// @return True if prize is not expired and rewarded, False if not
    function claim(uint256 _key, address _winner) public returns (bool){

        uint256 hash = key_hash256(_key);

        Prize storage prize = prizes[hash];
        require(prize.owner != address(0));

        if( now>prize.expiration ){
            expire_prize(prize, hash);
            return false;
        }else{
            payout(prize, _winner);

            Claim( prize.issuer, prize.owner, _winner, hash, prize.tokens, prize.value );

            delete(prizes[hash]);
            return true;
        }


    }


    function expire_prize(Prize prize, uint256 hash) internal {

       require( token.transfer(prize.owner, prize.tokens) );
       if(prize.value>0){
            pendingWithdrawals[prize.issuer] += prize.value;
       }

       Revoke(prize.issuer, prize.owner, hash, prize.tokens, prize.value);

       delete(prizes[hash]);
    }

    /// @notice calculate hash using a seed. The same method used to claim a prize
    /// @param _key to get the prize
    /// @return hash of the prize
    function key_hash256(uint256 _key) public view returns(uint256) {
        return uint256(sha256(_key, address(this)));
    }

    /// @notice withdraw an amount if pending withdrawals present
    function withdraw() public {
        uint amount = pendingWithdrawals[msg.sender];
        pendingWithdrawals[msg.sender] = 0;
        if(amount>0){
            require(msg.sender.call.value(amount)());
        }
    }


    /// --- METHDOS TO BE IMPLEMENTED IN GAME CONTRACTS ----

    /// @notice issue prizes for specified hashes. Function is payable, and in non-free games the amount being payed
    /// defines the number of prizes.
    /// This method to be implemented in game contracts, based on this protocol
    /// @param _hashes array of hashes to setup prizes
    function issue(uint256[] _hashes) payable public;

    /// @notice this method to be implemented in game contracts, based on this protocol
    /// payout expects to make a payout to all parties in tokens and Ether
    /// @param _prize prize being claimed
    /// @param _winner winner, claiming the prize
    function payout(Prize storage _prize, address _winner) internal;


}