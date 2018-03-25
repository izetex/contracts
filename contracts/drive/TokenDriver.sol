pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';

import '../token/TokenController.sol';
import '../token/IZXToken.sol';
import './Auction.sol';
import './Campaign.sol';

contract TokenDriver is TokenController {

    event NewAuction( address indexed token, address indexed auction);
    event NewCampaign( address indexed token, address indexed campaign);

    IZXToken public token;

    mapping(address => bool) public allowed_contracts;

    function TokenDriver( IZXToken _token ) public {
        require( address(_token) != address(0));
        token = _token;
    }

    function createAuction(ERC721 _token, uint _host_share) external{
        Auction auction = new Auction(msg.sender, _token, _host_share);
        allowed_contracts[address(auction)] = true;
        NewAuction( _token, auction);
    }

    function createCampaign(ERC721 _token, uint _lifetime, uint _token_price, uint _host_share) external{
        Campaign campaign = new Campaign(msg.sender, _token, _lifetime, _token_price, _host_share);
        allowed_contracts[address(campaign)] = true;
        NewCampaign( _token, campaign);
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
        return !isContract(_to) || allowed_contracts[_to];
    }

    /// @notice Notifies the controller about an approval allowing the
    function onApprove(address, address _spender, uint) public returns(bool){
        return !isContract(_spender) || allowed_contracts[_spender];
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