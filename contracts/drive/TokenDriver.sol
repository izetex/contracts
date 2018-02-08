pragma solidity ^0.4.18;

import "../token/TokenController.sol";
import 'zeppelin-solidity/contracts/payment/PullPayment.sol';
import "zeppelin-solidity/contracts/math/SafeMath.sol";

contract TokenDriver is TokenController {

    using SafeMath for uint256; // TODO do we need it?

    address    public  token;

    function TokenDriver(address _token) public {
        token = _token;
    }

    function reserve_tokens(uint256 _tokens, uint256 _value) internal return(uint256) {

    }

    function release_tokens(address _holder, uint256 _tokens) internal {

    }


    function proxyPayment(address _owner) payable public returns(bool){
        return false;
    }

    function onTransfer(address _from, address _to, uint _amount) public returns(bool) {

    }

    function onApprove(address _owner, address _spender, uint _amount) public returns(bool) {

    }


}