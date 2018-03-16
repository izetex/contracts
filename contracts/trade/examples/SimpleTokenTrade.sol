pragma solidity ^0.4.18;

import '../ControlledTokenTrade.sol';

contract SimpleTokenTrade is ControlledTokenTrade {

    uint    public  token_price;
    uint    public  max_lifetime;

    function SimpleTokenTrade(  ERC721 _asset_token,
                                ERC20 _unit_token,
                                uint _token_price,
                                uint _max_lifetime)
                ControlledTokenTrade(_asset_token, _unit_token) public {

         require(_token_price>0);
         require(_max_lifetime>0);

         token_price = _token_price;
         max_lifetime = _max_lifetime;
    }

    function createDeal(uint _tokenId, uint _expiration) public {
        require( _expiration <= now + max_lifetime);
        super.createDeal( _tokenId,  _expiration);

        require(unit_token.transferFrom(msg.sender, this, token_price) );
        make_contribution( msg.sender, token_price,  _tokenId);
        Contributed(msg.sender, asset_token, _tokenId, token_price);

    }

    function calculate_payout(Deal storage _deal, address _sender) internal view returns(uint256) {

        if(_sender==_deal.winner){
            return _deal.deposited_amount;
        }else{
            return 0;
        }

    }

}