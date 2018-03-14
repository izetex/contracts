pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import 'zeppelin-solidity/contracts/token/ERC20/ERC20.sol';
import 'zeppelin-solidity/contracts/math/SafeMath.sol';
import './TokenTrade.sol';

contract ControlledTokenTrade is TokenTrade, Ownable {

    struct Deal {
        address dealer;
        address winner;

        bool    active;
        uint    expiration;

        uint    deposited_amount;
        uint    credited_amount;

        mapping(address => uint256) contributions;
        mapping(address => uint256) payouts;
    }

    ERC721                          public  asset_token;
    ERC20                           public  unit_token;

    mapping(uint256 => Deal)        public  deals;

    using SafeMath for uint256;

    function ControlledTokenTrade(ERC721 _asset_token, ERC20 _unit_token) public {
        asset_token = _asset_token;
        unit_token = _unit_token;
    }

    // ----- functions called by dealer ----- //

    function createDeal(uint _tokenId, uint _expiration) public {
        address dealer = asset_token.ownerOf(_tokenId);
        require( deals[_tokenId].dealer == address(0));
        require( _expiration > now );

        deals[_tokenId] = Deal( dealer, address(0), true, 0, 0, _expiration );

        CreatedDeal( dealer, asset_token, _tokenId);
    }

    function closeDeal(uint _tokenId) public {
        Deal storage deal = deals[_tokenId];

        require(deal.active);
        require(deal.expiration >= now );
        require(deal.dealer == msg.sender );

        deal.active = false;
        ClosedDeal( msg.sender, asset_token, _tokenId);
    }

    // ----- functions called by contributor (anybody) ----- //

    function contribute(uint _tokenId, uint256 _amount) public {
        require(unit_token.transferFrom(msg.sender, this, _amount) );
        make_contribution( msg.sender, _amount,  _tokenId);
        Contributed(msg.sender, asset_token, _tokenId, _amount);
    }

    function claim(uint _tokenId) public {
        address token_owner = asset_token.ownerOf(_tokenId);
        require(token_owner==msg.sender);

        Deal storage deal = deals[_tokenId];
        require(deal.active);
        require(now <= deal.expiration);

        asset_token.takeOwnership(_tokenId);
        deal.winner = token_owner;

        ClaimedDeal( token_owner, asset_token, _tokenId);
    }

    function withdraw(uint _tokenId) public{

        Deal storage deal = deals[_tokenId];

        uint amount = 0;
        if(!deal.active){
            amount = calculate_payout(deal, msg.sender);
        }else if(now > deal.expiration){
            amount = deal.contributions[msg.sender];
        }

        amount = amount.sub(deal.payouts[msg.sender]);
        require(amount > 0);

        deal.payouts[msg.sender] += amount;
        deal.credited_amount += amount;
        unit_token.transfer(msg.sender, amount);

        if(deal.credited_amount==deal.deposited_amount){
            delete deals[_tokenId];
        }
    }

    // ----- functions called from controller ( owner ) ----- //


    function contributedFrom(address _sender, uint _amount, uint _tokenId) onlyOwner external {
        make_contribution( _sender,  _amount,  _tokenId);
        Contributed(_sender, asset_token, _tokenId, _amount);
    }

    // TODO this is unsecure
    function transferUnit(address _to, uint _amount) onlyOwner external {
        require(unit_token.transfer(_to, _amount));
    }

    // TODO this is unsecure
    function transferAsset(address _to, uint _tokenId) onlyOwner external {
        asset_token.transfer(_to, _tokenId);
    }

    // ----- internally used functions  ----- //

    function make_contribution(address _sender, uint _amount, uint _tokenId) internal {

        Deal storage deal = deals[_tokenId];
        require(deal.active);
        require(now <= deal.expiration);
        require(_amount>0);

        deal.contributions[_sender] += _amount;
        deal.deposited_amount += _amount;
    }

    function calculate_payout(Deal storage _deal, address _sender) internal view returns(uint256) {
        return _deal.contributions[_sender];
    }

}