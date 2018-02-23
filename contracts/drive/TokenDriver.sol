pragma solidity ^0.4.18;

import '../token/IZXToken.sol';
import "zeppelin-solidity/contracts/math/SafeMath.sol";

/**
 * @title Token driver, controlling the right of IZX token holders
 * to participate in game reward distribution and receive rewards
 *
 * @notice Refer to IZX White paper for more details on TokenDriver functionality
 *
 * @dev IZX token holder calls allow() function, granting TokenDriver ability
 * to use all or part of holder tokens in the game reward system.
 * When Campaign Manager needs to find a provider for IZX tokens, it looks the TokenDriver
 * to get the tokens and reserve it till the winner is rewarded with prize, or prize is expired.
 * TokenDriver ensures, that the balance of prizes, used in the game, does not exceed
 * allowed number of tokens at any moment of time.
 *
 * @author Aleksey Studnev <studnev@izx.io>
 */
contract TokenDriver  {

    using SafeMath for uint256;

    IZXToken  public token;

    struct Approval {
        uint256 key_index;
        uint256 tokens;
        uint256 token_price_gwei;
    }

    address[] holders;
    mapping( address => Approval) approvals;

    function TokenDriver(IZXToken _token) public {
        token = _token;
    }

    /**
    * @dev Allow to use amount of IZX tokens in campaigns
    * Called by IZX token holder, who sets the maximum amount of tokens, eligible to participate in
    * game rewards, and minimum payout ( in Ether ) per one IZX token.
    *
    * @notice Token holder must also  approve the tokens to use by Token driver on the
    * specified amount using IZXToken interface, standard ERC-20 approve() function.
    *
    * @param _max_tokens Maximum amount of tokens ( up to the full balance), allowed to use in campaigns
    * @param _token_price_gwei Minimum amount (in Gwei) per one IZX token (>=0), used in campaign
    */
    function allow(uint256 _max_tokens, uint256 _token_price_gwei) public {
        require(token.balanceOf(msg.sender) >= _max_tokens);
        Approval storage approval = approvals[msg.sender];

        if(approval.key_index==0){
            uint next = holders.length++;
            holders[next] = msg.sender;
            approval.key_index = next + 1;
        }
        
        approval.tokens = _max_tokens;
        approval.token_price_gwei = _token_price_gwei;

    }

    /**
    * @dev Internal function, used by Campaign manager. It reserves tokens of required amount with a
    * given total value
    * First, it searches token holders in find_eligible_holder function, with allowances matching the specified
    * parameters, and then transfers
    *
    * @param _tokens amount of IZX tokens required to reseve for the game
    * @param _token_price_gwei proposed price per token in Gwei
    */
    function reserve_tokens(uint256 _tokens, uint256 _token_price_gwei) internal returns(address) {
        address holder = find_eligible_holder(_tokens, _token_price_gwei);
        token.transferFrom(holder, address(this), _tokens);
        return holder;
    }

    /**
    * @dev Internal function, used by Campaign manager. It releases tokens of required amount,
    * previously reseved by reserve_tokens function.
    * @param _holder owner of IZX tokens, which are reserved
    * @param _tokens amount of IZX reseved tokens to be released
    */
    function release_tokens(address _holder, uint256 _tokens) internal {
        Approval storage approval = approvals[_holder];
        approval.tokens = approval.tokens.add( _tokens );
        token.transfer(_holder, _tokens);
    }

    /**
    * @dev Private function for finding an eligible token holder, who
    * approved specific amount of tokens with the price lower or equal
    * to specified in parameters.
    *
    * @notice to shuffle the holders, it uses the pseudo-random number of index,
    * where the lookup for the holder is started. If no holder found, it reverts.
    *
    * @param _tokens amount of tokens to be reserved
    * @param _token_price_gwei proposed price per token in Gwei
    */
    function find_eligible_holder(uint256 _tokens, uint256 _token_price_gwei) private returns(address){

        uint256 count = holders.length;
        uint256 i = (block.timestamp % count);
        for(uint j = 0; j < count; j++ ){
            address holder = holders[i];
            Approval storage approval = approvals[holder];
            if(_tokens <= approval.tokens && _token_price_gwei > approval.token_price_gwei && token.balanceOf(holder)>=_tokens){
               approval.tokens = approval.tokens.sub(_tokens);
               return holder;
            }

            i++;
            if(i==count){
                i=0;
            }

        }
        revert();
    }

}