pragma solidity ^0.4.11;

import "./Game.sol";

/**
 * @title TokenGame
 * @dev TokenGame is a contract to perform the game for tokens, no ether required.
 *
 * Look Game contract on the rule games. In the TokenGame, issuing prizes do not require Ether to pay.
 * Winner of the game receives all tokens of the prize
 *
 * @author Aleksey Studnev <studnev@izx.io>
 */
contract TokenGame is Game {

    uint256 public prize_tokens; // amount of tokens in one prize

    /// @notice TokenGame constructor. Called by game owner ("developer")
    /// @param _token ERC20 token, used in game, not 0
    /// @param _controller GameController, used to controlled token allowances, not 0
    /// @param _prize_life_time time from prize creation to expiration in seconds
    /// @param _prize_tokens amount of tokens in one prize
    function TokenGame(  ERC20 _token,
                        GameController _controller,
                        uint256 _prize_life_time,
                        uint256 _prize_tokens)
        Game(_token, _controller, _prize_life_time) public {
        require( _prize_tokens > 0 );
        prize_tokens = _prize_tokens;
    }

    /// @notice issue prizes using own tokens, no ether is required, just tokens
    /// @param _hashes array of hashes to setup prizes
    function issue(uint256[] _hashes) payable public {
        require(msg.value==0);

        uint256 prize_count = controller.available_amount(msg.sender, this) / prize_tokens;
        if(prize_count > _hashes.length){
            prize_count = _hashes.length;
        }

        uint256 total_tokens = mul(prize_count, prize_tokens);
        require( token.transferFrom(msg.sender, this, total_tokens) );

        uint256 expired_at = now + prize_life_time;
        for(uint i=0;i<prize_count;i++){
            prizes[_hashes[i]] = Prize(msg.sender, msg.sender, prize_tokens, 0, expired_at);
            Issue(msg.sender, msg.sender, _hashes[i], prize_tokens, 0, expired_at);
        }
    }

    function payout(Prize storage _prize, address _winner) internal {
        require(token.transfer(_winner, _prize.tokens));
    }

    function set_prize_tokens(uint256 _prize_tokens) onlyOwner public {
        prize_tokens = _prize_tokens;
    }

}