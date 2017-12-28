pragma solidity ^0.4.11;

import "../token/TokenController.sol";

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
    mapping( address => Allowance) allowances;


    function GameController(address _master) public {
        require(_master != address(0));
        master = _master;
    }

    function onApprove(address _owner, address _spender, uint _amount) public returns(bool){
        require(msg.sender==master);

        Allowance storage allowance = allowances[_spender];
        Balance storage balance = allowance.balances[_owner];

        if(balance.key_index>0){
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

            owners[balance.key_index-1] = owners[owners.length-1];
            owners[owners.length-1] = _from;

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
            Balance storage balance = allowances[_to].balances[owner];
            if(balance.approved_amount >= _amount + balance.reserved_amount){
                return owner;
            }
        }
        return address(0);
    }

    function approved_amount(address _owner, address _game) view public returns(uint256){
        return owner_balance(_owner, _game).approved_amount;
    }

    function reserved_amount(address _owner, address _game) view public returns(uint256){
        return owner_balance(_owner, _game).reserved_amount;
    }

    function owner_index(address _owner, address _game) view public returns(uint256){
        return owner_balance(_owner, _game).key_index;
    }

    function owner_balance(address _owner, address _game) view internal returns(Balance){
        Allowance storage allowance = allowances[_game];
        return allowance.balances[_owner];
    }
}