pragma solidity ^0.4.18;

import "../token/TokenController.sol";
import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import 'zeppelin-solidity/contracts/payment/PullPayment.sol';
import "zeppelin-solidity/contracts/math/SafeMath.sol";

contract TokenDriver is TokenController, Ownable, PullPayment {

    using SafeMath for uint256;

    IZXToken    public    izx_token;
    DriveToken  public    drive_token;

    struct Prize {

    }

    function TokenDriver(IZXToken _izx_token, DriveToken _drive_token){

    }

    function issue_prize() payable public {

    }

    function approve_prize() onlyNotExpired(_tokenId), onlyMasterOf( _tokenId ) public {

    }

    function revoke_prize() onlyExpired( _tokenId ) public {

    }

    function burn_prize(uint256 _tokenId) onlyNotExpired(_tokenId), onlyOwnerOf( _tokenId ) public {

    }

    function proxyPayment(address _owner) payable public returns(bool){
        return false;
    }

    function onTransfer(address _from, address _to, uint _amount) public returns(bool) {

    }

    function onApprove(address _owner, address _spender, uint _amount) public returns(bool) {

    }


}