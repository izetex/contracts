pragma solidity ^0.4.11;

import "../util/Owned.sol";
import "../token/ControlledToken.sol";

contract ProxyController is Owned, TokenController {

    ControlledToken public tokenContract;       // token controlled
    TokenController public proxiedController;   // controller being proxied
    bool            public allowTransfersToContracts;

    function ProxyController(address _token, address _controller) public {

        require(_token != address(0));

        tokenContract = ControlledToken(_token);
        proxiedController = TokenController(_controller);
    }


    /// @notice `onlyOwner` changes the controller of the tokenContract
    /// @param _newController - controller to be used with token
    function changeTokenController(address _newController) onlyOwner public {
        tokenContract.changeController(_newController);
    }

    /// @notice `onlyOwner` changes the proxied controller
    /// @param _newController - controller to be proxied
    function changeProxiedController(address _newController) onlyOwner public {
        proxiedController = TokenController(_newController);
    }

    /// @notice `onlyOwner` changes the setting to allow transfer tokens to other contracts
    /// @param _allow  allowing to transfer tokens to other contracts
    function setTransfersToContractsAllowed(bool _allow) onlyOwner public{
        allowTransfersToContracts = _allow;
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

    /////////////////
    // TokenController interface
    /////////////////

    /// @notice `proxyPayment()` allows the caller to send ether to the TokenSale and
    /// have the tokens created in an address of their choosing
    /// @param _owner The address that will hold the newly created tokens
    function proxyPayment(address _owner) payable public returns(bool) {
        if(proxiedController==address(0)){
            return false;
        }else{
            return proxiedController.proxyPayment(_owner);
        }
    }

    /// @notice Notifies the controller about a transfer, for this TokenSale all
    ///  transfers are allowed by default and no extra notifications are needed
    /// @param _from The origin of the transfer
    /// @param _to The destination of the transfer
    /// @param _amount The amount of the transfer
    /// @return False if the controller does not authorize the transfer
    function onTransfer(address _from, address _to, uint _amount) public returns(bool) {
        if(proxiedController==address(0)){
            return allowTransfersToContracts || !isContract(_to);
        }else if(proxiedController.onTransfer(_from, _to, _amount)){
            return true;
        }else{
            return allowTransfersToContracts || !isContract(_to);
        }
    }

    /// @notice Notifies the controller about an approval, for this TokenSale all
    ///  approvals are allowed by default and no extra notifications are needed
    /// @param _owner The address that calls `approve()`
    /// @param _spender The spender in the `approve()` call
    /// @param _amount The amount in the `approve()` call
    /// @return False if the controller does not authorize the approval
    function onApprove(address _owner, address _spender, uint _amount) public
        returns(bool)
    {
        if(proxiedController==address(0)){
            return true;
        }else{
            return proxiedController.onApprove(_owner, _spender, _amount);
        }
    }


}