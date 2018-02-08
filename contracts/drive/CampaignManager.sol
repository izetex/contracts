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
        address burner,

        uint256 amount,

        uint256 extra // TODO: may be belongs to game?
    }

    mapping (uint256 => Prize) public prizes;

    function TokenDriver(IZXToken _izx_token) TokenDriver(_izx_token) public {
        drive_token = new DriveToken();
    }

    function issue_prizes(GameBase _game, uint256[] _hashes, uint256[] _extra) payable public {

        uint256 prize_value = msg.value / _hashes.length;
        uint256 change = msg.value % _hashes.length;

        address holder = reserve_tokens(_hashes.length, prize_value); // TODO! prize_value is not payout!
        require(holder != address(0));

        for(uint256 i=0;i<_hashes.length;i++){
           tokenId = drive_token.mint();

           require( address(prizes[tokenId].game)==address(0) );
           prizes[tokenId] = Prize(_game, holder, msg.sender, address(0), address(0), prize_value, extra[i]);

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


    function approve_prize(uint256 _tokenId) onlyNotExpired(_tokenId), onlyMasterOf( _tokenId ) public {

        prize.burner = prize.winner;

    }

    function revoke_prize() onlyExpired( _tokenId ) public {


        release_tokens(prize.holder, 1);

    }

    function burn_prize(uint256 _tokenId) onlyNotExpired(_tokenId), onlyOwnerOf( _tokenId ) public {

        release_tokens(prize.holder, 1);

    }

}