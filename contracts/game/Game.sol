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

    function issue(uint256[] _hashes, uint256 _expiration) payable public returns (uint256) {

        uint256 reserved_amount = reserve_amount(_hashes.length, msg.value);
        require(reserved_amount>0 && _expiration > now);

        address tokens_owner = controller.amount_owner(this, reserved_amount);

        if(tokens_owner!=address(0)){
            require( token.transferFrom(tokens_owner, this, reserved_amount) );
            for(uint i=0;i<reserved_amount;i++){
                prizes[_hashes[i]] = Prize(msg.sender, tokens_owner, 1, msg.value, _expiration);
            }
            return reserved_amount;
        }else{
            return 0;
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


    function reserve_amount( uint256 _requested_amount, uint256 _payed_value ) returns(uint256) {
        return 1;
    }


    function payout(Prize storage _prize, address _winner) internal {
        require(token.transfer(_prize.owner, _prize.tokens));
        if(_prize.value>0){
            pendingWithdrawals[_winner] += _prize.value;
        }
    }


}