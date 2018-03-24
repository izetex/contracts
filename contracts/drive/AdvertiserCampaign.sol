pragma solidity ^0.4.18;

import './ERC721TokenTrade.sol';

contract AdvertiserCampaign is ERC721TokenTrade {

    uint    public  token_price;
    uint    public  winner_reward;
    uint    public  max_lifetime;

    function AdvertiserCampaign(   ERC721 _asset_token,
                                ERC20 _unit_token,
                                uint _token_price,
                                uint _winner_reward,
                                uint _max_lifetime)
                ERC721TokenTrade(_asset_token, _unit_token) public {

         require(_token_price>0);
         require(_winner_reward>0);
         require(_winner_reward<=_token_price);
         require(_max_lifetime>0);

         token_price = _token_price;
         max_lifetime = _max_lifetime;
         winner_reward = _winner_reward;
    }

    function createDeal(uint _tokenId, uint _expires_at) public {
        require( _expires_at <= now + max_lifetime);
        super.createDeal( _tokenId,  _expires_at);

        require(unit_token.transferFrom(msg.sender, this, token_price) );
        make_contribution( msg.sender, token_price,  _tokenId);
        Contributed(msg.sender, asset_token, _tokenId, token_price);
    }


    function claim(uint _tokenId) public {
        address token_owner = asset_token.ownerOf(_tokenId);
        require(token_owner==msg.sender);

        Deal storage deal = deals[_tokenId];
        require(deal.completed);
        require(now <= deal.expires_at);

        asset_token.takeOwnership(_tokenId);
        deal.winner = token_owner;
    }

    function closeDeal(uint _tokenId) public {
        Deal storage deal = deals[_tokenId];
        require(deal.winner != address(0));

        if(deal.expires_at >= now){
            super.closeDeal(_tokenId);
            deal.succeeded = true;
            asset_token.transfer(deal.dealer, _tokenId);
        }else{
            asset_token.transfer(deal.winner, _tokenId);
        }

    }

    // ----- internally used functions  ----- //

    function calculate_payout(Deal storage _deal, address _sender) internal view returns(uint256) {

        if(_sender==_deal.dealer){
            return 0;
        }

        uint amount = _deal.deposits[_sender];
        if(amount>0){
            amount = amount.add( amount.mul( token_price.sub(winner_reward) ) / _deal.deposited_amount.sub(token_price));
        }

        if(_sender==_deal.winner){
            amount = amount.add(winner_reward);
        }

        return amount;
    }

}