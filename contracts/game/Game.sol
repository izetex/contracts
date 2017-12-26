pragma solidity ^0.4.11;

import "../token/ControlledToken.sol";
import "../util/Owned.sol";
import "./GameController.sol";

contract Game is Owned {

    struct Prize {
        address issuer;
        address owner;
        uint256 tokens;
        uint256 value;
        bytes   info;
        uint256 expiration;
    }

    ControlledToken public  token;
    GameController public   controller;
    mapping (uint256 => Prize) public prizes;
    mapping (address => uint) public pendingWithdrawals;

    function Game(  ControlledToken _token ) public {
        require(address(_token)!=address(0));
        token = _token;
        controller = GameController(token.controller());
    }

    function issue(uint256 _amount, bytes _info, uint256 _expiration, uint256 _hash) payable public returns (bool) {

        require( _expiration > now );

        uint256 requested_amount = calculate_amount(_amount, msg.value);

        require(requested_amount>0);

        address tokens_owner = controller.allowed_for(this, requested_amount);

        if(tokens_owner!=address(0)){
            require( token.transferFrom(tokens_owner, this, requested_amount) );
            prizes[_hash] = Prize(msg.sender, tokens_owner, requested_amount, msg.value, _info, _expiration);
            return true;
        }else{
            return false;
        }


    }

    function claim(uint256 _key, address _winner) public returns (bool){

        uint256 hash = key_hash256(_key);

        Prize storage prize = prizes[hash];
        require(prize.owner != address(0));

        if( now>prize.expiration ){

            require( token.transfer(prize.owner, prize.tokens) );
            if(prize.value>0){
                pendingWithdrawals[prize.issuer] += prize.value;
            }
            delete(prizes[hash]);

            return false;
        }else{
            payout(prize, _winner);
            delete(prizes[hash]);
            return true;
        }

    }


    function key_hash256(uint256 _key) public view returns(uint256) {
        return uint256(sha256(_key, address(this)));
    }

    function withdraw() public {
        uint amount = pendingWithdrawals[msg.sender];
        pendingWithdrawals[msg.sender] = 0;
        if(amount>0){
            require(msg.sender.call.value(amount)());
        }
    }


    function calculate_amount( uint256 _requested_amount, uint256 _payed_value ) returns(uint256) {
        return 1;
    }


    function payout(Prize storage _prize, address _winner) internal {
        require(token.transfer(_prize.owner, _prize.tokens));
        if(_prize.value>0){
            pendingWithdrawals[_winner] += _prize.value;
        }
    }


}