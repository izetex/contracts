pragma solidity ^0.4.18;

import "../token/TokenController.sol";
import 'zeppelin-solidity/contracts/payment/PullPayment.sol';
import "zeppelin-solidity/contracts/math/SafeMath.sol";

contract CampaignManager is TokenDriver, PullPayment {

    using SafeMath for uint256; // TODO do we need it?
    DriveToken  public    drive_token;

    struct Prize {
        GameBase game,
        address holder,
        address master,
        address winner,

        uint256 value,
        uint256 expiration,

        uint256 extra // TODO: may be belongs to game?
    }

    uint256 constant public MASTER_PAYOUT_SHARE = 10;
    uint256 constant public GAME_PAYOUT_SHARE = 20;
    uint256 constant public WINNER_PAYOUT_SHARE = 20;
    uint256 constant public HOLDER_PAYOUT_SHARE = 50;

    mapping (uint256 => Prize) public prizes;

    function TokenDriver(IZXToken _izx_token) TokenDriver(_izx_token) public {
        drive_token = new DriveToken();
    }

    function issue_prizes(GameBase _game, uint256 _lifetime, uint256[] _hashes, uint256[] _extra) payable public {

        require(_lifetime>0);

        uint256 expiration = now + _lifetime;
        uint256 prize_value = msg.value / _hashes.length;
        uint256 change = msg.value % _hashes.length;

        address holder = reserve_tokens(_hashes.length, prize_value); // TODO! prize_value is not payout!
        require(holder != address(0));

        for(uint256 i=0;i<_hashes.length;i++){

           tokenId = drive_token.mint(_game);

           require( address(prizes[tokenId].game)==address(0) );
           prizes[tokenId] = Prize(_game, holder, msg.sender, address(0), prize_value, expiration, extra[i]);

           _game.place_prize(_hashes[i], tokenId);
        }

        if(change>0){
            asyncSend(msg.sender, change);
        }

    }

    function win_prize(uint256 _tokenId, address _winner) public {

        Prize prize = prizes[_tokenId];

        require(msg.sender = prize.game);
        require(prize.winner==address(0));

        prize.winner = _winner;

    }


    function payout_prize(uint256 _tokenId)  public {

        Prize prize = prizes[_tokenId];

        require(prize.winner != address(0));
        require(prize.master == msg.sender);
        require(prize.expiration >= now);

        drive_token.burn(_tokenId);

        if(prize.value>0){
            execute_payouts(prize);
        }

        release_tokens(prize.holder, 1);
        delete prizes[_tokenId];
    }

    function revoke_prize(uint256 _tokenId)  public {

        Prize prize = prizes[_tokenId];
        require(prize.expiration < now);

        drive_token.burn(_tokenId);

        if(prize.value>0){
            asyncSend(prize.master, prize.value);
        }

        release_tokens(prize.holder, 1);

    }

    function execute_payouts(Prize _prize) private {

        uint256 payout = _prize.value;

        uint256 v = (payout.mul(GAME_PAYOUT_SHARE)) / 100;
        asyncSend(prize.game.vault(), v);
        payout = payout.sub(v);

        v = (payout.mul(WINNER_PAYOUT_SHARE)) / 100;
        asyncSend(prize.winner, v);
        payout = payout.sub(v);

        v = (payout.mul(HOLDER_PAYOUT_SHARE)) / 100;
        asyncSend(prize.holder, v);
        payout = payout.sub(v);

        asyncSend(prize.master, payout);

    }

}