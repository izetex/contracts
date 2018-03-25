pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';

import '../token/TokenController.sol';
import '../token/IZXToken.sol';
import './Auction.sol';
import './Campaign.sol';

contract TokenDriver is TokenController {

    event NewAuction( address indexed token, address indexed creator);
    event NewCampaign( address indexed token, address indexed creator);

    IZXToken public token;

    function TokenDriver( IZXToken _token ) public {
        require( address(_token) != address(0));
        token = _token;
    }

    function createAuction(ERC721 _token, uint _owner_share) external returns(Auction){
        return new Auction(msg.sender, _token, _owner_share);
    }

    function createCampaign(ERC721 _token, uint _lifetime, uint _token_price, uint _owner_share) external returns(Campaign){
        return new Campaign(msg.sender, _token, _lifetime, _token_price, _owner_share);
    }

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