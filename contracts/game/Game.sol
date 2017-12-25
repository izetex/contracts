pragma solidity ^0.4.11;

import "../token/ControlledToken.sol";
import "../util/Owned.sol";

contract Game is Owned {

    struct Prize {
        address owner;
        address issuer;
        uint256 tokens;
        uint256 value;
        bytes   info;
        uint256 expiration;
    }

    ERC20 public token;
    mapping (uint256 => Prize) public prizes;
    mapping (address => uint) public pendingWithdrawals;

    function Game(  ERC20 _token ) public {
        require(address(_token)!=address(0));
        token = _token;
    }

    function add(address _owner, uint256 _amount, bytes _info, uint256 _expiration, uint256 _hash) payable public returns (bool) {
        require( _owner != address(0) );
        require( _amount > 0 );
        require( token.transferFrom(_owner, this, _amount) );
        // TODO: price?
        prizes[_hash] = Prize(_owner, msg.sender, _amount, msg.value, _info, _expiration);
    }

    function claim(uint256 _key, address _winner) public returns (bool){

        uint256 hash = key_hash256(_key);

        Prize storage prize = prizes[hash];
        require(prize.owner != address(0));

        if( prize.expiration!=0 && now>prize.expiration ){

            require( token.transfer(prize.owner, prize.tokens) );
            if(prize.value>0){
                pendingWithdrawals[prize.issuer] += prize.value;
            }
            delete(prizes[hash]);

            return false;
        }else{
            distribute(prize, _winner);
            delete(prizes[hash]);
            return true;
        }

    }

    function distribute(Prize storage _prize, address _winner) private {
        require(token.transfer(_prize.owner, _prize.tokens));
        if(_prize.value>0){
            pendingWithdrawals[_winner] += _prize.value;
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

}