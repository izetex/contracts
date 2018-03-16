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

    function closeDeal(uint _tokenId) public {
        Deal storage deal = deals[_tokenId];

        require(deal.winner != address(0));
        require(deal.winner == asset_token.ownerOf(_tokenId));

        super.closeDeal(_tokenId);
    }

    function claim(uint _tokenId) public {
        require(false);
    }

    function calculate_payout(Deal storage _deal, address _sender) internal view returns(uint256) {

        if(_sender==_deal.dealer){
            return _deal.deposited_amount;
        }else{
            return 0;
        }

    }

}