pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import "../token/TokenController.sol";
import "../token/IZXToken.sol";
import "./Campaign.sol";


contract CampaignManager is Ownable, TokenController {

    IZXToken                 public  token;
    mapping(address => bool) public  campaigns;

    /**
    * @dev Create the controller for token manager.
    * @param _token IZX token
    */
    function CampaignManager( IZXToken _token ) public {
        require(_token != address(0));
        token = _token;
    }

    function createCampaign(address _game, ERC721 _game_token, uint256 _finish_at) public returns(address){
        address cmp = new Campaign(msg.sender, _game, _game_token, token, _finish_at);
        campaigns[cmp] = true;
        return cmp;
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
    * @notice Do not accept payments on token
    */
    function proxyPayment(address) payable public returns(bool) {
        return false;
    }

    /**
    * @notice Allow to transfer to any account or manager smart contract
    */
    function onTransfer(address _sender, address _to, uint _token_amount) public returns(bool) {
        if(campaigns[_to]){
            Campaign cmp = Campaign(_to);
            cmp.acceptTokens(_sender,_token_amount);
            return true;
        }else{
            return !isContract(_to);
        }
    }

    /**
    * @notice  Allow to approve to any account or manager smart contract
    */
    function onApprove(address, address, uint) public returns(bool)
    {
        return true;
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

}