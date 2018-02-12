pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import "../token/TokenController.sol";
import "../token/IZXToken.sol";
import "./TokenDriver.sol";

/**
 * @title IZXTokenController
 * @dev TODO
 *
 * @author Aleksey Studnev <studnev@izx.io>
 */
contract IZXTokenController is Ownable, TokenController {

    TokenDriver public driver;       // drive for token
    IZXToken    public token;        // token controlled

    function IZXTokenController( TokenDriver _driver ) public {
        require(_driver != address(0));
        driver = _driver;
        token = driver.token();
        require(token != address(0));
    }

    /// @notice `onlyOwner` changes the controller of the tokenContract
    /// @param _newController - controller to be used with token
    function changeTokenController(address _newController) onlyOwner public {
        token.changeController(_newController);
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

    /// @notice Do not allow to pay on contract
    function proxyPayment(address) payable public returns(bool) {
        return false;
    }

    /// @notice Allow to transfer to any account or driver smart contract
    function onTransfer(address, address _to, uint) public returns(bool) {
        return (_to==address(driver)) || !isContract(_to);
    }

    /// @notice Allow to approve to any account or driver smart contract
    function onApprove(address, address _spender, uint) public returns(bool)
    {
        return (_spender==address(driver)) || !isContract(_spender);
    }


}