pragma solidity ^0.4.11;


import "./Game.sol";

contract RevShareGame is Game {

    uint256 public token_price;
    uint256 dev_commission;
    uint256 owner_commission;
    uint256 issuer_commission;
    

    function RevShareGame(   ERC20 _token,
                        GameController _controller,
                        uint256 _prize_life_time,
                        uint256 _token_price,
                        uint256 _dev_commission,
                        uint256 _owner_commission,
                        uint256 _issuer_commission
                        )
        Game(_token, _controller, _prize_life_time) public {

        token_price = _token_price;
        dev_commission = _dev_commission;
        owner_commission = _owner_commission;
        issuer_commission = _issuer_commission;

    }


     function calculate_amount( uint256 _requested_amount, uint256 _payed_value ) internal
            returns(uint256 prize_count, uint256 prize_value, uint256 prize_tokens, uint256 total_tokens) {
     
        prize_count = _payed_value / token_price;
        prize_value = token_price;

        if(prize_count > _requested_amount){
            prize_count = _requested_amount;
        }

        return (prize_count, prize_value, 1, prize_count);
     }

     function set_token_price(uint256 _token_price) onlyOwner public {
        token_price = _token_price;
     }
     
     function set_payouts(uint256 _dev_commission, uint256 _owner_commission, uint256 _issuer_commission) onlyOwner public {
        dev_commission = _dev_commission;
        owner_commission = _owner_commission;
        issuer_commission = _issuer_commission;
     }


    function payout(Prize storage _prize, address _winner) internal {
        require(token.transfer(_prize.owner, _prize.tokens));
        uint256 total = _prize.value;

        uint256 dev_commission_amount = mul(total, dev_commission) / 100;
        pendingWithdrawals[owner] += dev_commission_amount;

        uint256 owner_commission_amount = mul(total, owner_commission) / 100;
        pendingWithdrawals[_prize.owner] += owner_commission_amount;

        uint256 issuer_commission_amount = mul(total, issuer_commission) / 100;
        pendingWithdrawals[_prize.issuer] += issuer_commission_amount;

        pendingWithdrawals[_winner] += total - (dev_commission_amount + owner_commission_amount + issuer_commission_amount);
    }

}