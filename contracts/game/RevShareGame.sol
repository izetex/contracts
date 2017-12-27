pragma solidity ^0.4.11;


import "./Game.sol";
import "../util/SafeMath.sol";

contract RevShareGame is Game, SafeMath {

    uint256 public token_price;
    uint256 dev_commission;
    uint256 owner_commission;
    uint256 issuer_commission;
    

    function IZXGame(   ERC20 _token,
                        GameController _controller,
                        uint256 _token_price,
                        uint256 _dev_commission,
                        uint256 _owner_commission,
                        uint256 _issuer_commission
                        )
        Game(_token, _controller) public {

        token_price = _token_price;
        dev_commission = _dev_commission;
        owner_commission = _owner_commission;
        issuer_commission = _issuer_commission;

    }


     function reserve_amount( uint256 _requested_amount, uint256 _payed_value, address _buyer ) internal returns(uint256) {
     
        uint256 amount = _payed_value / token_price;

        if(amount > _requested_amount){
            amount = _requested_amount;
        }
        
        uint256 change = sub(_payed_value, mul(amount, token_price));
        if(change>0){
            pendingWithdrawals[_buyer] += change;
        }
        
        return amount;
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