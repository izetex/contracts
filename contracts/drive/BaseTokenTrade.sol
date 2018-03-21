pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import 'zeppelin-solidity/contracts/token/ERC20/ERC20.sol';
import 'zeppelin-solidity/contracts/math/SafeMath.sol';
import './TokenTrade.sol';

contract BaseTokenTrade is TokenTrade {

    struct Deal {
        address dealer;
        address winner;

        bool    active;
        bool    success;
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

    function BaseTokenTrade(ERC721 _asset_token, ERC20 _unit_token) public {
        asset_token = _asset_token;
        unit_token = _unit_token;
    }

    // ----- functions called by dealer ----- //

    function createDeal(uint _tokenId, uint _expiration) public {
        address dealer = asset_token.ownerOf(_tokenId);
        require( deals[_tokenId].dealer == address(0));
        require( _expiration > now );

        deals[_tokenId] = Deal( dealer, address(0), true, false, 0, 0, _expiration );

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
        require(unit_token.transferFrom(msg.sender, this, _amount));
        make_contribution( msg.sender, _amount, _tokenId);
        Contributed(msg.sender, asset_token, _tokenId, _amount);
    }

    function withdraw(uint _tokenId) public{
        Deal storage deal = deals[_tokenId];
        do_payout(deal, msg.sender);
        purge_deal(deal, _tokenId);
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

    function do_payout(Deal storage _deal, address _receiver) internal {

        uint amount = 0;
        if(_deal.success){
            amount = calculate_payout(_deal, _receiver);
        }else if(now > _deal.expiration){
            amount = _deal.contributions[_receiver];
        }

        require(amount > _deal.payouts[_receiver]);
        amount -= _deal.payouts[_receiver];

        _deal.payouts[_receiver] += amount;
        _deal.credited_amount += amount;
        unit_token.transfer(_receiver, amount);
    }

    function purge_deal(Deal storage _deal, uint _tokenId) internal {
        if(_deal.credited_amount==_deal.deposited_amount){
            delete deals[_tokenId];
        }
    }

}