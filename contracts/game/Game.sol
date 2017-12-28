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
 * The prize is issued using a token reservation. The token controls the amount pf prize to be issued.
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

    ERC20                       public token;
    GameController              public controller;
    uint256                     public prize_life_time;
    mapping (uint256 => Prize)  public prizes;
    mapping (address => uint)   public pendingWithdrawals;
    mapping (address => uint)   public issuedPrizes;

    event Issue(address indexed issuer, address indexed owner, uint amount);
    event Claim(address indexed issuer, address indexed owner, address indexed winner, uint amount);
    event Expired(address indexed issuer, address indexed owner, uint amount);

    function Game(  ERC20 _token, GameController _controller, uint256 _prize_life_time  ) public {
        require(address(_token)!=address(0));
        require(address(_controller)!=address(0));
        token = _token;
        controller = _controller;
        prize_life_time = _prize_life_time;
    }

    function issue(uint256[] _hashes) payable public {

        var (prize_count, prize_value) = calculate_amount(_hashes.length, msg.value);
        require(prize_count>0);

        address tokens_owner = controller.amount_owner(this, prize_count);

        if(tokens_owner!=address(0)){
            require( token.transferFrom(tokens_owner, this, prize_count) );

            if(msg.value>0){
                uint256 change = sub(msg.value, mul(prize_count, prize_value));
                if(change>0){
                    pendingWithdrawals[msg.sender] += change;
                }
            }

            for(uint i=0;i<prize_count;i++){
                prizes[_hashes[i]] = Prize(msg.sender, tokens_owner, 1, prize_value, now + prize_life_time);
            }
            issuedPrizes[msg.sender] += prize_count;
            Issue(msg.sender, tokens_owner, prize_count);
        }
    }

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


    function key_hash256(uint256 _key) public view returns(uint256) {
        return uint256(sha256(_key, address(this)));
    }

    function withdraw() public {
        uint amount = pendingWithdrawals[msg.sender];
        pendingWithdrawals[msg.sender] = 0;
        if(amount>0){
            require(msg.sender.call.value(amount)());
        }
    }


    function calculate_amount( uint256 _requested_amount, uint256 _payed_value ) internal
            returns( uint256 prize_count, uint256 prize_value );

    function payout(Prize storage _prize, address _winner) internal;


}