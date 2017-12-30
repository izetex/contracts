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
 * calculate_amount and payout, which defines how to calculate the prize value and pay reward to winner, issuer,
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
        address owner;      // owner of the tokens, used as a garant in prize
        uint256 tokens;     // number of tokens per prize ( 1 by default )
        uint256 value;      // money spent on the prize
        uint256 expiration;
    }

    // State variables
    ERC20                       public token;               // token used to create a prize for the game
    GameController              public controller;          // game controller for token allowance control
    uint256                     public prize_life_time;     // time from prize creation to expiration in seconds
    mapping (uint256 => Prize)  public prizes;              // prizes by hashes
    mapping (address => uint)   public pendingWithdrawals;  // withdrawal amounts for pull payments
    mapping (address => uint)   public issuedPrizes;        // information mapping prize count by issuer

    // Events
    event Issue(address indexed issuer, address indexed owner, uint amount);
    event Claim(address indexed issuer, address indexed owner, address indexed winner, uint amount);
    event Expired(address indexed issuer, address indexed owner, uint amount);

    /// @notice Game constructor. Called by game owner ("developer")
    /// @param _token ERC20 token, used in game, not 0
    /// @param _controller GameController, used to controlled token allowances, not 0
    /// @param _prize_life_time time from prize creation to expiration in seconds
    function Game(  ERC20 _token, GameController _controller, uint256 _prize_life_time  ) public {
        require(address(_token)!=address(0));
        require(address(_controller)!=address(0));
        token = _token;
        controller = _controller;
        prize_life_time = _prize_life_time;
    }

    /// @notice issue prizes for specified hashes. Function is payable, and in non-free games the amount being payed
    /// defines the number of prizes
    /// @param _hashes array of hashes to setup prizes
    function issue(uint256[] _hashes) payable public {

        var (prize_count, prize_value, prize_tokens, total_tokens) = calculate_amount(_hashes.length, msg.value);
        require(prize_count>0);

        address tokens_owner = controller.amount_owner(this, total_tokens );

        require(tokens_owner!=address(0));
        require( token.transferFrom(tokens_owner, this, total_tokens) );

        if(msg.value>0){
            uint256 change = sub(msg.value, mul(prize_count, prize_value));
            if(change>0){
                pendingWithdrawals[msg.sender] += change;
            }
        }

        for(uint i=0;i<prize_count;i++){
            prizes[_hashes[i]] = Prize(msg.sender, tokens_owner, prize_tokens, prize_value, now + prize_life_time);
        }
        issuedPrizes[msg.sender] += prize_count;
        Issue(msg.sender, tokens_owner, prize_count);
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

            require( token.transfer(prize.owner, prize.tokens) );
            if(prize.value>0){
                pendingWithdrawals[prize.issuer] += prize.value;
            }
            issuedPrizes[msg.sender] -= 1;

            Expired(prize.issuer, prize.owner, prize.tokens);

            delete(prizes[hash]);
            return false;
        }else{
            payout(prize, _winner);
            issuedPrizes[msg.sender] -= 1;

            Claim(prize.issuer, prize.owner, _winner, prize.tokens);

            delete(prizes[hash]);
            return true;
        }


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

    /// @notice this method to be implemented in game contracts, based on this protocol
    /// calculate_amount expects to calulate an amount of prizes to issue and the value for each prize
    /// @param _requested_amount maximum number of prizes requested to issue
    /// @param _payed_value payed value in wei
    /// @return prize_count actial number of prizes that can be issued for the price
    /// @return prize_value the price for every prize
    /// @return prize_tokens tokens used to secure the prize
    /// @return total_tokens total number of tokens required
    function calculate_amount( uint256 _requested_amount, uint256 _payed_value ) internal
            returns( uint256 prize_count, uint256 prize_value, uint256 prize_tokens, uint256 total_tokens );


    /// @notice this method to be implemented in game contracts, based on this protocol
    /// payout expects to make a payout to all parties in tokens and Ether
    /// @param _prize prize being claimed
    /// @param _winner winner, claiming the prize
    function payout(Prize storage _prize, address _winner) internal;


}