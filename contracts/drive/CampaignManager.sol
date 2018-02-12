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

        uint256 value_eth;
        uint256 expires_at;

        uint256 info_hash;
    }

    struct Payout {
        uint256 master_payout;
        uint256 game_payout;
        uint256 winner_payout;
        uint256 holder_payout;
        uint256 token_reserve;
    }


    mapping (address => mapping (uint256 => Prize)) public prizes;
    mapping (address => Payout) public game_payout;

    function CampaignManager(IZXToken _izx_token) TokenDriver(_izx_token) public {
    }

    function register_prize(ERC721 _erc721, address _master, address _game, uint256 _tokenId,
                                            uint256 _lifetime, uint256 _info_hash) payable public {

        require(_lifetime>0);
        require(_erc721!=address(0));
        require(_game!=address(0));
        require(_master!=address(0));
        require(_tokenId!=0);
        require( prizes[_erc721][_tokenId].master==address(0) );

        Payout storage payout = game_payout[_game];
        if(payout.token_reserve==0){
            game_payout[_game] = Payout(10,20,20,50,1 ether);
        }

        address holder = _master;
        if( !token.transferFrom(_master, address(this), payout.token_reserve) ) {
            holder = reserve_tokens( payout.token_reserve, (payout.holder_payout*msg.value)/100);
            require(holder != address(0));
        }

        prizes[_erc721][_tokenId] = Prize(_master, _game, holder, msg.value, now + _lifetime, _info_hash );

    }

    function give_prize(ERC721 _erc721, uint256 _tokenId) public {

        Prize storage prize = prizes[_erc721][_tokenId];

        require(prize.master == msg.sender);
        require(prize.expires_at > now);

        address winner = _erc721.ownerOf(_tokenId);
        require(winner != address(0));

        _erc721.takeOwnership(_tokenId);

        Payout storage payout = game_payout[prize.game];
        make_payouts(prize, payout, winner);

        release_tokens(prize.holder, payout.token_reserve);
        delete prizes[_erc721][_tokenId];

    }

    function make_payouts(Prize _prize, Payout _payout, address _winner) private {
        uint256 payout_amount = _prize.value_eth;
        if(payout_amount>0){

             if(_prize.expires_at > now){
                uint256 game_amount = (payout_amount *_payout.game_payout) / 100;
                uint256 winner_amount = (payout_amount * _payout.winner_payout) / 100;
                uint256 holder_amount = (payout_amount * _payout.holder_payout) / 100;

                asyncSend(_prize.game, game_amount);
                asyncSend(_winner, winner_amount);
                asyncSend(_prize.holder, holder_amount);
                asyncSend(_prize.master, payout_amount - game_amount - winner_amount - holder_amount);

             }else{
                asyncSend(_prize.master, payout_amount);
             }

         }
    }

    function change_payouts(uint256 _master_payout, uint256 _game_payout, uint256 _winner_payout,
                                        uint256 _holder_payout, uint256 _reserve ) public {
        require(_master_payout <= 100);
        require(_game_payout <= 100);
        require(_winner_payout <= 100);
        require(_holder_payout <= 100);
        require(_reserve> 0);
        require(_master_payout + _game_payout + _winner_payout + _holder_payout == 100);

        game_payout[msg.sender] = Payout(   _master_payout,
                                            _game_payout,
                                            _winner_payout,
                                            _holder_payout,
                                            _reserve);
    }

}