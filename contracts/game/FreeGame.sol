pragma solidity ^0.4.11;

import "./Game.sol";

contract FreeGame is Game {

    function FreeGame(  ERC20 _token, GameController _controller  )
        Game(_token, _controller) public {
    }

    function issue(uint256[] _hashes, uint256 _expiration) payable public {
        require(msg.value==0);
        super.issue(_hashes, _expiration);
    }

    function reserve_amount( uint256 , uint256 , address  ) internal returns(uint256) {
        return 1;
    }

    function payout(Prize storage _prize, address ) internal {
        require(token.transfer(_prize.owner, _prize.tokens));
    }
}