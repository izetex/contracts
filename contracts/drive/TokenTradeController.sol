pragma solidity ^0.4.18;

import '../token/TokenController.sol';
import './ControlledTokenTrade.sol';

contract TokenTradeController is TokenController {

    /// @notice Called when `_owner` sends ether to the Token contract
    function proxyPayment(address) payable public returns(bool){
        return false;
    }

    /// @notice Notifies the controller about a token transfer allowing the
    ///  controller to react if desired
    /// @param _from The origin of the transfer
    /// @param _to The destination of the transfer
    /// @param _amount The amount of the transfer
    /// @return False if the controller does not authorize the transfer
    function onTransfer(address _from, address _to, uint _amount) public returns(bool){
        if(isContract(_to)){
            bytes memory call_data = bytes(msg.data);
            if(call_data.length==0){
                ControlledTokenTrade(_to).onTransfer(_from, _amount);
            }else{
                uint tokenId;
                assembly {
                    tokenId := mload(add(call_data, 32))
                }
                ControlledTokenTrade(_to).onTransferWithId(_from, _amount, tokenId);
            }
        }
        return true;
    }

    /// @notice Notifies the controller about an approval allowing the
    function onApprove(address, address, uint) public returns(bool){
        return true;
    }

    /// @dev Internal function to determine if an address is a contract
    /// @param _addr The address being queried
    /// @return True if `_addr` is a contract
    function isContract(address _addr) constant internal returns(bool) {
        uint size;
        if (_addr == 0) return false;
        assembly {
            size := extcodesize(_addr)
        }
        return size>0;
    }

}