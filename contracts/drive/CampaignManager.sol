pragma solidity ^0.4.18;

import "./TokenDriver.sol";

import "../token/IZXToken.sol";

import 'zeppelin-solidity/contracts/payment/PullPayment.sol';
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import 'zeppelin-solidity/contracts/ownership/Ownable.sol';

contract CampaignManager is TokenDriver, PullPayment, Ownable {

    struct Prize {
        address master;
        address game;
        address holder;

        uint256 value_eth;
        uint256 expires_at;

        uint256 info_hash;
    }

    uint256 public MASTER_PAYOUT_SHARE = 10;
    uint256 public GAME_PAYOUT_SHARE = 20;
    uint256 public WINNER_PAYOUT_SHARE = 20;
    uint256 public HOLDER_PAYOUT_SHARE = 50;

    uint256 public TOKEN_RESERVE_AMOUNT = 1 ether;

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

        prizes[_erc721][_tokenId] = Prize(msg.sender, _game, holder, msg.value, now + _lifetime, _info_hash );

    }

    function claim_prize(ERC721 _erc721, uint256 _tokenId) public { // TODO is it safe to call?

        Prize storage prize = prizes[_erc721][_tokenId];

        require(prize.master != address(0));
        require(prize.expires_at > now);

        address winner = _erc721.ownerOf(_tokenId);
        require(winner != address(0));

        _erc721.takeOwnership(_tokenId);

        payout(prize, winner);

        release_tokens(prize.holder, TOKEN_RESERVE_AMOUNT);
        delete prizes[_erc721][_tokenId];

    }

    function payout(Prize _prize, address _winner) private {
        uint256 payout_amount = _prize.value_eth;
        if(payout_amount>0){

             if(_prize.expires_at > now){
                uint256 game_payout = payout_amount.mul(GAME_PAYOUT_SHARE) / 100;
                uint256 winner_payout = payout_amount.mul(WINNER_PAYOUT_SHARE) / 100;
                uint256 holder_payout = payout_amount.mul(HOLDER_PAYOUT_SHARE) / 100;

                asyncSend(_prize.game, game_payout);
                asyncSend(_winner, winner_payout);
                asyncSend(_prize.holder, holder_payout);
                asyncSend(_prize.master, payout_amount.sub(game_payout).sub(winner_payout).sub(holder_payout));

             }else{
                asyncSend(_prize.master, payout_amount);
             }

         }
    }

    function change_payouts(uint256 _master, uint256 _game, uint256 _winner, uint256 _holder, uint256 _reserve )
            onlyOwner public {

            MASTER_PAYOUT_SHARE = _master;
            GAME_PAYOUT_SHARE = _game;
            WINNER_PAYOUT_SHARE = _winner;
            HOLDER_PAYOUT_SHARE = _holder;
            TOKEN_RESERVE_AMOUNT = _reserve;

    }

}