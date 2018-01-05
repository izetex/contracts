pragma solidity ^0.4.11;

import "../token/TokenController.sol";
import "../token/ERC20.sol";

/**
 * @title GameController
 * @dev GameController is a TokenController contract to calculate the amount of tokens,
 *  which can be used in the game.
 *
 * The contract ensures, that the game can use the amount of tokens, allowed by
 * token holders. Note, that token holder may allow more tokens, that it holds, to more than one game.
 *
 * After the tokens are used in prize, they are transfered to the game, and token holder apparently
 * may not use them before the prize is claimed or expired.
 *
 * Contract also ensures the rotation of token holders, so that the last used token holder is placed
 * to the end of the queue. It guarantees that all token holders have the same chance to participate in the
 * game.
 *
 * Game requests the amount of tokens from GameController using amount_owner() method.
 *
 * @author Aleksey Studnev <studnev@izx.io>
 */
contract GameController is TokenController {

    struct Balance {
        uint key_index;
        uint approved_amount;
        uint reserved_amount;
    }

    struct Allowance {
       address[] owners;
       mapping( address => Balance) balances;
    }

    address public master;
    ERC20   public token;

    mapping( address => Allowance) allowances;

    function GameController(ERC20 _token, address _master) public {
        require(_master != address(0));
        require(address(_token) != address(0));
        master = _master;
        token = _token;
    }

    function onApprove(address _owner, address _spender, uint _amount) public returns(bool){
        require(msg.sender==master);

        Allowance storage allowance = allowances[_spender];
        Balance storage balance = allowance.balances[_owner];

        if(balance.key_index==0){
            uint next = allowance.owners.length++;
            allowance.owners[next] = _owner;
            balance.key_index = next + 1;
        }

        balance.approved_amount = _amount;

        return true;
    }

    function onTransfer(address _from, address _to, uint _amount) public returns(bool){
        require(msg.sender==master);

        Allowance storage allowance = allowances[_to];
        Balance storage balance = allowance.balances[_from];

        if(balance.key_index>0){

            balance.reserved_amount += _amount;
            address[] storage owners = allowance.owners;

            uint256 switch_index = (block.timestamp % owners.length);
            address switch_owner = owners[switch_index];

            owners[balance.key_index-1] = switch_owner;
            owners[switch_index] = _from;

            allowance.balances[switch_owner].key_index = balance.key_index;
            balance.key_index = switch_index + 1;

            return true;
        }else{
            allowance = allowances[_from];
            balance = allowance.balances[_to];

            if(balance.key_index>0){
                balance.reserved_amount -= _amount;
                return true;
            }else{
                return false;
            }

        }
    }

    function proxyPayment(address) payable public returns(bool) {
        return false;
    }

    function amount_owner(address _to, uint256 _amount) view public returns(address){
        uint256 count = allowances[_to].owners.length;
        for(uint i = 0; i < count; i++ ){
            address owner = allowances[_to].owners[i];
            if(token.balanceOf(owner)>=_amount){
                Balance storage balance = allowances[_to].balances[owner];
                if(balance.approved_amount >= _amount + balance.reserved_amount){
                    return owner;
                }
            }
        }
        return address(0);
    }

    function approved_amount(address _owner, address _game) view public returns(uint256){
        return allowances[_game].balances[_owner].approved_amount;
    }

    function reserved_amount(address _owner, address _game) view public returns(uint256){
        return allowances[_game].balances[_owner].reserved_amount;
    }

    function owner_index(address _owner, address _game) view public returns(uint256){
        return allowances[_game].balances[_owner].key_index;
    }

    function available_amount(address _owner, address _game) view public returns(uint256){
        uint256 amt = allowances[_game].balances[_owner].approved_amount;
        uint256 bal = token.balanceOf(_owner);
        if( bal < amt){
            amt = bal;
        }
        return amt;
    }

    function owners(address _game) view public returns(address[]){
        return allowances[_game].owners;
    }
}