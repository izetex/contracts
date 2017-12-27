pragma solidity ^0.4.11;

import "../token/TokenController.sol";


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

    address public token;
    mapping( address => Allowance) allowances;


    function GameController(address _token) public {
        require(_token != address(0));
        token = _token;
    }

    function onApprove(address _owner, address _spender, uint _amount) public returns(bool){
        require(msg.sender==token);

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
        require(msg.sender==token);

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

}