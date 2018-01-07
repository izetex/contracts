pragma solidity ^0.4.11;


import "./Game.sol";

/**
 * @title RevShareGame
 * @dev RevShareGame is a contract to perform the game with Ether payout to winner, game owner, issuer and token holder
 * in persentages.
 *
 * Look Game contract on the rule games. In the RevShareGame, issuing prizes happens on fixed prize price,
 * setup by game developer.
 *
 * @author Aleksey Studnev <studnev@izx.io>
 */
contract RevShareGame is Game {

    uint256 public prize_price; // price of the single issuance of the prize in wei
    uint256 public prize_tokens; // amount of tokens in one prize
    uint256 dev_commission;     // commission in percentage, payed to game owner (developer)
    uint256 owner_commission;   // commission in percentage, payed to tokens holder
    uint256 issuer_commission;  // commission in percentage, payed to issuer

    /// @notice RevShareGame constructor. Called by game owner ("developer")
    /// @param _token ERC20 token, used in game, not 0
    /// @param _controller GameController, used to controlled token allowances, not 0
    /// @param _prize_life_time time from prize creation to expiration in seconds
    /// @param _prize_tokens amount of tokens in one prize
    /// @param _prize_price price of the single issuance of the prize in wei
    /// @param _dev_commission commission in percentage, payed to game owner (developer)
    /// @param _owner_commission commission in percentage, payed to tokens holder
    /// @param _issuer_commission commission in percentage, payed to issuer
    function RevShareGame( ERC20 _token,
                        GameController _controller,
                        uint256 _prize_life_time,
                        uint256 _prize_tokens,
                        uint256 _prize_price,
                        uint256 _dev_commission,
                        uint256 _owner_commission,
                        uint256 _issuer_commission
                        )
        Game(_token, _controller, _prize_life_time) public {

        require( _prize_price > 0 );
        require( _prize_tokens > 0 );

        prize_price = _prize_price;
        prize_tokens = _prize_tokens;
        dev_commission = _dev_commission;
        owner_commission = _owner_commission;
        issuer_commission = _issuer_commission;

    }

    /// @notice issue prizes using approved tokens from token owners and based on token price specified
    /// @param _hashes array of hashes to setup prizes
    function issue(uint256[] _hashes) payable public {

        uint256 prize_count = msg.value / prize_price;
        if(prize_count > _hashes.length){
            prize_count = _hashes.length;
        }

        require(prize_count>0);

        uint256 total_tokens = mul(prize_count, prize_tokens);
        address tokens_owner = controller.amount_owner(this, total_tokens );

        require( tokens_owner!=address(0) );
        require( token.transferFrom(tokens_owner, this, total_tokens) );

        uint256 change = sub(msg.value, mul(prize_count, prize_price));
        if(change>0){
            pendingWithdrawals[msg.sender] += change;
        }

        uint256 expired_at = now + prize_life_time;
        for(uint i=0;i<prize_count;i++){
            prizes[_hashes[i]] = Prize(msg.sender, tokens_owner, prize_tokens, prize_price, expired_at);
            Issue(msg.sender, tokens_owner, _hashes[i], prize_tokens, prize_price, expired_at);
        }
    }

     function set_prize_tokens(uint256 _prize_tokens) onlyOwner public {
        prize_tokens = _prize_tokens;
     }

     function set_prize_price(uint256 _prize_price) onlyOwner public {
        prize_price = _prize_price;
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