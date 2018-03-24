pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import 'zeppelin-solidity/contracts/token/ERC20/ERC20.sol';
import 'zeppelin-solidity/contracts/math/SafeMath.sol';
import './TokenTrade.sol';

contract ERC721TokenTrade is TokenTrade {

    struct Deal {
        address dealer;
        address winner;

        bool    completed;
        bool    succeeded;
        uint    expires_at;

        uint    deposited_amount;
        uint    credited_amount;

        mapping(address => uint256) deposits;
        mapping(address => uint256) credits;
    }

    ERC721                          public  asset_token;
    ERC20                           public  unit_token;

    mapping(uint256 => Deal)        public  deals;

    using SafeMath for uint256;

    function ERC721TokenTrade(ERC721 _asset_token, ERC20 _unit_token) public {
        asset_token = _asset_token;
        unit_token = _unit_token;
    }

    // ----- functions called by dealer ----- //

    function createDeal(uint _tokenId, uint _expires_at) public {
        address dealer = asset_token.ownerOf(_tokenId);
        require( deals[_tokenId].dealer == address(0));
        require( _expires_at > now );

        deals[_tokenId] = Deal( dealer, address(0), false, false, 0, 0, _expires_at );

        CreatedDeal( dealer, asset_token, _tokenId);
    }

    function closeDeal(uint _tokenId) public {
        Deal storage deal = deals[_tokenId];

        require(!deal.completed);
        require(deal.expires_at >= now );
        require(deal.dealer == msg.sender );

        deal.completed = true;
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
        require(!deal.completed);
        require(now <= deal.expires_at);
        require(_amount>0);

        deal.deposits[_sender] += _amount;
        deal.deposited_amount += _amount;
    }

    function calculate_payout(Deal storage _deal, address _sender) internal view returns(uint256) {
        return _deal.deposits[_sender];
    }

    function do_payout(Deal storage _deal, address _receiver) internal {

        uint amount = 0;
        if(_deal.succeeded){
            amount = calculate_payout(_deal, _receiver);
        }else if(now > _deal.expires_at){
            amount = _deal.deposits[_receiver];
        }

        require(amount > _deal.credits[_receiver]);
        amount -= _deal.credits[_receiver];

        _deal.credits[_receiver] += amount;
        _deal.credited_amount += amount;
        unit_token.transfer(_receiver, amount);
    }

    function purge_deal(Deal storage _deal, uint _tokenId) internal {
        if(_deal.credited_amount==_deal.deposited_amount){
            delete deals[_tokenId];
        }
    }

}