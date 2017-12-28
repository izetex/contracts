pragma solidity ^0.4.11;

import "./Game.sol";

contract FreeGame is Game {

    function FreeGame(  ERC20 _token, GameController _controller, uint256 _prize_life_time  )
        Game(_token, _controller, _prize_life_time) public {
    }

    function issue(uint256[] _hashes) payable public {
        require(msg.value==0);
        super.issue(_hashes);
    }

    function calculate_amount( uint256 _requested_amount, uint256  ) internal
        returns(uint256 prize_count, uint256 prize_value, uint256 prize_tokens, uint256 total_tokens) {
            return (_requested_amount, 0, 1, _requested_amount);
    }

    function payout(Prize storage _prize, address ) internal {
        require(token.transfer(_prize.owner, _prize.tokens));
    }
}