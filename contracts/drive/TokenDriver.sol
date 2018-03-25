pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';

import '../token/TokenController.sol';
import '../token/IZXToken.sol';
import './Auction.sol';
import './Campaign.sol';

/**
 * @title TokenDriver
 *
 * @dev TokenDriver is responsible for controlling operations with IZX tokens.
 * IZX token can be used in campaigns and auctions, where it is used as a payment
 * unit for ERC721 tokens, used in advertisement campaigns.
 *
 * Token transfer and approval is allowed for all non-contract ( wallet ) addresses,
 * as well as auctions / campaigns, created in this driver.
 *
 * @notice Once setup as a controller for the token, this contract can not be changed.
 * After that, the protocol will work completely in decentralized way, with nobody
 * having control over it.
 *
 * @author Aleksey Studnev <studnev@izx.io>
 */
contract TokenDriver is TokenController {

    event NewAuction( address indexed token, address indexed auction);
    event NewCampaign( address indexed token, address indexed campaign);

    IZXToken public token;

    mapping(address => bool) public allowed_contracts;

    function TokenDriver( IZXToken _token ) public {
        require( address(_token) != address(0));
        token = _token;
    }

    /**
    * @dev creates a new auction contract for ERC721 token
    * @param _token The address of ERC721 token, traded in new auction
    * @param _host_share Percentage (0 to 100) share of the payout for
    * every completed auction sale in the new contract. If equal to 0, all bid is payed
    * to the winner of the auction. If set to 100, all bid is payed to host, nothing left to bidder.
    */
    function createAuction(ERC721 _token, uint _host_share) external{
        Auction auction = new Auction(msg.sender, _token, _host_share);
        allowed_contracts[address(auction)] = true;
        NewAuction( _token, auction);
    }

    /**
    * @dev create a new advertising contract for ERC721 token
    * @param _token The address of ERC721 token, traded in new campaign
    * @param _lifetime The time period in seconds, allowed to convert the prize
    * after it is claimed by ERC721 token owner. I this time expires, and prize is not converted to IZX tokens,
    * the token can be returned to the initial owner.
    * @param _token_price Price of every ERC721 token in IZX, payed by advertiser.
    * @param _host_share Percentage (0 to 100) share of the payout for
    * every completed conversion in the new contract. If equal to 0, all token price is payed
    * to the winner of the prize. If set to 100, all bid is payed to host, nothing left to the winner.
    */
    function createCampaign(ERC721 _token, uint _lifetime, uint _token_price, uint _host_share) external{
        Campaign campaign = new Campaign(msg.sender, _token, _lifetime, _token_price, _host_share);
        allowed_contracts[address(campaign)] = true;
        NewCampaign( _token, campaign);
    }

    /// ----- METHODS IMPLEMENTATION FROM TokenController interface ----- ///

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