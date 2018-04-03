pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';

import '../token/TokenController.sol';
import '../token/ControlledToken.sol';
import './Auction.sol';
import './Campaign.sol';
import './ControlledByVote.sol';

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
 * @notice Once setup as a controller for the token, this contract can be changed only
 * by voting procedure, look ControlledByVote contract for details.
 * The protocol works completely in decentralized way, with nobody
 * having full control over it.
 *
 * @author Aleksey Studnev <studnev@izx.io>
 */
contract TokenDriver is TokenController, ControlledByVote {

    event NewAuction( address indexed token, address indexed auction);
    event NewCampaign( address indexed token, address indexed campaign);
    event NewTokenDriver( address indexed token, address indexed new_driver);

    mapping(address => bool) public allowed_contracts;
    mapping(address => uint) public deposits;

    using SafeMath for uint256;

    /**
    * @dev Throws if called by any account other than the token.
    */
    modifier onlyToken() {
        require(msg.sender == address(token));
        _;
    }

    /**
    * @dev Throws if called by any account other than the token or its controller.
    */
    modifier onlyTokenOrController() {
        require(msg.sender == address(token) || msg.sender == address(ControlledToken(token).controller() ) );
        _;
    }

    function TokenDriver( ERC20 _token, uint _min_voting_duration, uint _max_voting_duration ) public
                ControlledByVote(_token, _min_voting_duration, _max_voting_duration) {}

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
    function proxyPayment(address) payable public onlyToken returns(bool){
        return false;
    }

    /// @notice Notifies the controller about a token transfer allowing the
    ///  controller to react if desired
    /// @param _from The origin of the transfer
    /// @param _to The destination of the transfer
    /// @param _amount The amount of the transfer
    /// @return False if the controller does not authorize the transfer
    function onTransfer(address _from, address _to, uint _amount) public onlyToken returns(bool){
        if(  (_to==address(this) || _to==address(candidate)) && votingInProgress()){
           TokenDriver(_to).register_deposit(_from, _amount);
           return true;
        }else{
           return !isContract(_to) || allowed_contracts[_to];
        }
    }

    /// @notice Notifies the controller about an approval allowing the
    function onApprove(address, address _spender, uint) public onlyToken returns(bool){
        return !isContract(_spender) || allowed_contracts[_spender] || _spender==address(this);
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

    function register_deposit(address _from, uint _amount) onlyTokenOrController public {
        deposits[_from] = deposits[_from].add(_amount);
    }

    function withdraw() public {
        uint amount = deposits[msg.sender];
        require(amount > 0);
        deposits[msg.sender] = 0;
        token.transfer(msg.sender, amount);
    }

    function changeController(ControlledByVote _newController) onlyVotedFor(_newController) public {
        ControlledToken(token).changeController(_newController);
        NewTokenDriver( token, address(_newController));
    }
}