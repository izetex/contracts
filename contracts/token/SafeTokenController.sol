pragma solidity ^0.4.18;

import './TokenController.sol';

contract SafeTokenController is TokenController {

    /// @notice Called when `_owner` sends ether to the Token contract
    function proxyPayment(address) payable public returns(bool){
        return false;
    }

    /// @notice Notifies the controller about a token transfer allowing the
    ///  controller to react if desired
    /// @param _to The destination of the transfer
    /// @return False if the controller does not authorize the transfer
    function onTransfer(address, address _to, uint) public returns(bool){
        return !isContract(_to);
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