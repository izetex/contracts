pragma solidity ^0.4.18;

import "./TokenDriver.sol";

import "../token/IZXToken.sol";

import 'zeppelin-solidity/contracts/payment/PullPayment.sol';
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';

contract CampaignManager is TokenDriver, PullPayment {

    struct Prize {
        address master;
        address game;
        address holder;
        address winner;

        uint256 value_eth;
        uint256 expires_at;

        uint256 info_hash;
    }

    uint256 public MASTER_PAYOUT_SHARE = 10;
    uint256 public GAME_PAYOUT_SHARE = 20;
    uint256 public WINNER_PAYOUT_SHARE = 20;
    uint256 public HOLDER_PAYOUT_SHARE = 50; // TODO setters !

    uint256 public TOKEN_RESERVE_AMOUNT = 1 ether; // TODO setter

    mapping (address => mapping (uint256 => Prize)) internal prizes;

    using SafeMath for uint256; // TODO: need it? optimize it?

    function CampaignManager(IZXToken _izx_token) TokenDriver(_izx_token) public {
    }

    function register_prize(ERC721 _erc721, address _game, uint256 _tokenId, uint256 _lifetime, uint256 _info_hash) payable public {

        require(_lifetime>0);
        require(_erc721!=address(0));
        require(_game!=address(0));
        require(_tokenId!=0);
        require( prizes[_erc721][_tokenId].master==address(0) );

        address holder = reserve_tokens( TOKEN_RESERVE_AMOUNT, HOLDER_PAYOUT_SHARE.mul(msg.value)/100);
        require(holder != address(0));

        prizes[_erc721][_tokenId] = Prize(msg.sender, _game, holder, address(0), msg.value, now + _lifetime, _info_hash );

    }

    function claim_prize(ERC721 _erc721, uint256 _tokenId, address _winner) public {

        Prize storage prize = prizes[_erc721][_tokenId];

        require(prize.master != address(0));
        require(prize.expires_at < now);

        payout(prize);
        release_tokens(prize.holder, TOKEN_RESERVE_AMOUNT);
        delete prizes[_erc721][_tokenId];
    }


    function payout(Prize _prize) private {

        uint256 payout = _prize.value_eth;

        if(payout==0)
            return;

        if(_prize.winner!=address(0) && _prize.expires_at >= now ){ // TODO do we need this check?

             uint256 v = payout.mul(GAME_PAYOUT_SHARE) / 100;
             asyncSend(_prize.game, v);
             payout = payout.sub(v);

             v = payout.mul(WINNER_PAYOUT_SHARE) / 100;
             asyncSend(_prize.winner, v);
             payout = payout.sub(v);

             v = payout.mul(HOLDER_PAYOUT_SHARE) / 100;
             asyncSend(_prize.holder, v);

             asyncSend(_prize.master, payout.sub(v));

        }else{

            asyncSend(_prize.master, payout);

        }



    }

}