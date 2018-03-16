pragma solidity ^0.4.18;

import '../ControlledTokenTrade.sol';

contract TokenAuction is ControlledTokenTrade {

    uint    public  token_price;

    function TokenAuction(  ERC721 _asset_token,
                                ERC20 _unit_token,
                                uint _token_price)
                ControlledTokenTrade(_asset_token, _unit_token) public {

         require(_token_price>0);
         token_price = _token_price;
    }


    function createDeal(uint _tokenId, uint _expiration) public {

        address dealer = asset_token.ownerOf(_tokenId);
        require(dealer == msg.sender);

        asset_token.takeOwnership(_tokenId);

        super.createDeal(_tokenId, _expiration);

    }

    function closeDeal(uint _tokenId) public {
        Deal storage deal = deals[_tokenId];

        require( deal.active );
        require( now > deal.expiration );


        if(deal.winner != address(0)){
            deal.success = true;
            asset_token.transfer(deal.winner, _tokenId);
        }else{
            asset_token.transfer(deal.dealer, _tokenId);
        }

        deal.active = false;
        ClosedDeal( msg.sender, asset_token, _tokenId);
    }

    function withdraw(uint _tokenId) public{

        Deal storage deal = deals[_tokenId];
        if( deal.active ){
           closeDeal(_tokenId);
        }
        super.withdraw(_tokenId);

    }

    // ----- internally used functions  ----- //

    function make_contribution(address _sender, uint _amount, uint _tokenId) internal {
        Deal storage deal = deals[_tokenId];
        require(deal.winner == address(0) || deal.contributions[deal.winner] < _amount );
        deal.winner = _sender;
        super.make_contribution(_sender, _amount, _tokenId);
    }

    function calculate_payout(Deal storage _deal, address _sender) internal view returns(uint256) {
        if(_sender==_deal.dealer){
            return _deal.contributions[_deal.winner];
        }else if(_sender!=_deal.winner){
            return _deal.contributions[_sender];
        }
    }

}