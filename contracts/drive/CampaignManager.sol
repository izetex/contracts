pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import "../token/TokenController.sol";
import "../token/IZXToken.sol";
import "./Campaign.sol";


contract CampaignManager is Ownable, TokenController {

    IZXToken        public token;        // token controlled


    /**
    * @dev Create the controller for token manager.
    * @param _manager The token manager, which is eligible to receive IZX tokens
    */
    function CampaignManager( IZXToken _token ) public {
        require(_token != address(0));
        token = _token;
    }

    function createCampaign(address _game, address _game_token) public returns address{



    }

    /**
    * @dev As only controller can change the token controller, this method is required
    * for ability to modify the controller later
    * @param _newController The new controller for the token
    */
    function changeTokenController(address _newController) onlyOwner public {
        token.changeController(_newController);
    }


    /**
    * @dev Utility function checking that address is a smart contract
    * @param _addr The address to check
    */
    function isContract(address _addr) constant internal returns(bool) {
        uint size;
        if (_addr == 0) return false;
        assembly {
            size := extcodesize(_addr)
        }
        return size>0;
    }

    /**
    * @notice Do not accept payments on token
    */
    function proxyPayment(address) payable public returns(bool) {
        return false;
    }

    /**
    * @notice Allow to transfer to any account or manager smart contract
    */
    function onTransfer(address, address _to, uint) public returns(bool) {
        return (_to==address(manager)) || !isContract(_to);
    }

    /**
    * @notice  Allow to approve to any account or manager smart contract
    */
    function onApprove(address, address _spender, uint) public returns(bool)
    {
        return (_spender==address(manager)) || !isContract(_spender);
    }


}