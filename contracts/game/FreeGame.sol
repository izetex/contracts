pragma solidity ^0.4.11;

import "./Game.sol";

/**
 * @title FreeGame
 * @dev FreeGame is a contract to perform the game free of charge.
 *
 * Look Game contract on the rule games. In the FreeGame, issuing prizes do not require Ether to pay.
 * Winner of the game receives all tokens of the prize
 *
 * @author Aleksey Studnev <studnev@izx.io>
 */
contract FreeGame is Game {

    function FreeGame(  ERC20 _token, GameController _controller, uint256 _prize_life_time  )
        Game(_token, _controller, _prize_life_time) public {
    }

    function calculate_amount( uint256 _requested_amount, uint256  ) internal
        returns(uint256 prize_count, uint256 prize_value, uint256 prize_tokens, uint256 total_tokens) {
            return (_requested_amount, 0, 1, _requested_amount);
    }

    function payout(Prize storage _prize, address _winner) internal {
        require(token.transfer(_winner, _prize.tokens));
    }
}