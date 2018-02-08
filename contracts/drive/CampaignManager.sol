pragma solidity ^0.4.18;

import "./TokenDriver.sol";
import "./GameBase.sol";

import "../token/IZXToken.sol";

import 'zeppelin-solidity/contracts/payment/PullPayment.sol';
import "zeppelin-solidity/contracts/math/SafeMath.sol";

contract CampaignManager is TokenDriver, PullPayment {

    DriveToken  public    drive_token;

    struct Prize {
        GameBase game;
        address holder;
        address master;
        address winner;
        address burner;

        uint256 value;
        uint256 expiration;
        uint256 hash;
    }

    uint256 constant public MASTER_PAYOUT_SHARE = 10;
    uint256 constant public GAME_PAYOUT_SHARE = 20;
    uint256 constant public WINNER_PAYOUT_SHARE = 20;
    uint256 constant public HOLDER_PAYOUT_SHARE = 50;

    uint256 constant public TOKEN_RESERVE_AMOUNT = 1 ether;

    mapping (uint256 => Prize) public prizes;

    using SafeMath for uint256;

    modifier onlyDriveToken() {
        require(address(drive_token) == msg.sender);
        _;
    }


    function CampaignManager(IZXToken _izx_token) TokenDriver(_izx_token) public {
        drive_token = new DriveToken();
    }

    function issue_prizes(GameBase _game, uint256 _lifetime, uint256[] _hashes, uint256[] _extra) payable public {

        require(_lifetime>0);

        uint256 expiration = now + _lifetime;
        uint256 prize_value = msg.value / _hashes.length;
        uint256 change = msg.value % _hashes.length;

        address holder = reserve_tokens(
            TOKEN_RESERVE_AMOUNT.mul(_hashes.length),
            HOLDER_PAYOUT_SHARE.mul(prize_value)/100);

        require(holder != address(0));

        for(uint256 i=0;i<_hashes.length;i++){

           uint256 tokenId = drive_token.mint(_game);
           require( address(prizes[tokenId].game)==address(0) );
           prizes[tokenId] = Prize(_game, holder, msg.sender, address(0), address(0),
                                    prize_value, expiration, _hashes[i]);
           _game.place_prize(_hashes[i], tokenId, _extra[i]);
        }

        if(change>0){
            asyncSend(msg.sender, change);
        }

    }


    function revoke_prize(uint256 _tokenId)  public {

        Prize storage prize = prizes[_tokenId];

        require(prize.expiration < now);
        require(prize.master != address(0));

        payout(prize);

        prize.game.remove_prize(prize.hash);

        release_tokens(prize.holder, TOKEN_RESERVE_AMOUNT);
        delete prizes[_tokenId];

    }


    function approve_prize(uint256 _tokenId) public {

        address winner = drive_token.ownerOf(_tokenId);
        require(winner != address(0));

        Prize storage prize = prizes[_tokenId];
        require(msg.sender == address(prize.master));
        require(prize.expiration >= now);

        prize.winner = winner;

    }


    function token_burnt(uint256 _tokenId) onlyDriveToken public {

        Prize storage prize = prizes[_tokenId];

        if( prize.master != address(0) ){
            payout(prize);
            release_tokens(prize.holder, TOKEN_RESERVE_AMOUNT);
            delete prizes[_tokenId];
        }

    }

    function payout(Prize _prize) private {

        uint256 payout = _prize.value;

        if(payout==0)
            return;

        if(_prize.winner!=address(0) && _prize.expiration >= now ){

             uint256 v = payout.mul(GAME_PAYOUT_SHARE) / 100;
             asyncSend(_prize.game.vault(), v);
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