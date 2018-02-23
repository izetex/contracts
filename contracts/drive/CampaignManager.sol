pragma solidity ^0.4.18;

import "./TokenDriver.sol";

import "../token/IZXToken.sol";

import 'zeppelin-solidity/contracts/payment/PullPayment.sol';
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';

/**
 * @title CampaignManager is a contract between the game master, game, player and IZX token holder
 *
 * @dev CampaignManager is about the reward distribution.
 * Contract concerns the percentage of distribution between these parties,
 * as well as the conditions for the reward distribution.
 *
 * @notice IZX White paper descibes the role of Campaign manager in advertising campaigns and reward
 * distribution using IZX token
 *
 *
 * @author Aleksey Studnev <studnev@izx.io>
 */
contract CampaignManager is TokenDriver, PullPayment {

    using SafeMath for uint256;

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
    mapping (address => Payout) public game_payouts;

    function CampaignManager(IZXToken _izx_token) TokenDriver(_izx_token) public {
    }

    /**
    * @dev Creates a new prize for any ERC721 token for specific game
    *
    * @notice _master can allow to use own IZX tokens for game. If it does,
    * then his tokens will be taken as priority. If game master do not have IZX token or did
    * not granted them for game, the tokens are taken from token holders. See TokenDriver contract
    * for details.
    * Funnction is payable, and the funds collected are distirbuted according to game policy, defined
    * in set_game_payout function.
    *
    *
    * @param _erc721 ERC721 token contract, used as a prize for winner
    * @param _tokenId associated ID of ERC721 token
    * @param _master game master, sponsoring the game. In some cases the caller of this method is game master.
    * However, there are cases when the game is calling this method from behalf of game master.
    * @param _game approved to play
    * @param _lifetime lifetime of the prize till expiration in seconds
    * @param _info_hash additional data, associated with the prize, for example, hash for IPFS content lookup
    */
    function register_prize(ERC721 _erc721, uint256 _tokenId, address _master, address _game,
                                            uint256 _lifetime, uint256 _info_hash) payable public {

        uint256 expires_at = now + _lifetime;
        require(expires_at > now);
        require(_erc721!=address(0));
        require(_game!=address(0));
        require(_master!=address(0));
        require(_tokenId!=0);
        require( prizes[_erc721][_tokenId].master==address(0) );

        Payout storage payout = game_payouts[_game];
        if(payout.token_reserve==0){
            game_payouts[_game] = Payout(10,20,20,50,1 ether);
        }

        address holder = _master;
        if( !token.transferFrom(_master, address(this), payout.token_reserve) ) {
            uint256 price_gwei = (payout.holder_payout.mul(msg.value * 10000000))/payout.token_reserve;
            holder = reserve_tokens( payout.token_reserve, price_gwei);
            require(holder != address(0));
        }

        prizes[_erc721][_tokenId] = Prize(_master, _game, holder, msg.value, expires_at, _info_hash);

    }

    /**
    * @dev Gives the reward to ERC721 token holder
    *
    * @notice rewards are distributed according to the payout policy,
    * defined by the game in set_game_payout function.
    * Payments can be later withdraw using pull method.
    * Look PullPayment for details.
    * In success, the ERC721 is transfered to this contract, and effectively is burned.
    *
    * @param _erc721 ERC721 token contract, used as a prize for winner
    * @param _tokenId associated ID of ERC721 token
    */
    function give_prize(ERC721 _erc721, uint256 _tokenId) public {

        Prize storage prize = prizes[_erc721][_tokenId];

        require(prize.master == msg.sender);
        require(prize.expires_at >= now);

        address winner = _erc721.ownerOf(_tokenId);
        require(winner != address(0));

        _erc721.takeOwnership(_tokenId);

        Payout storage payout = game_payouts[prize.game];
        make_payouts(prize, payout, winner);

        release_tokens(prize.holder, payout.token_reserve);
        delete prizes[_erc721][_tokenId];

    }


    /**
    * @dev Burn exprired prize
    *
    * @notice rewards are returned back to master
    *
    * @param _erc721 ERC721 token contract, used as a prize for winner
    * @param _tokenId associated ID of ERC721 token
    */
    function burn_prize(ERC721 _erc721, uint256 _tokenId) public {

        Prize storage prize = prizes[_erc721][_tokenId];

        require(prize.master == msg.sender);
        require(prize.expires_at < now);

        Payout storage payout = game_payouts[prize.game];
        if(prize.value_eth > 0){
            asyncSend(prize.master, prize.value_eth);
        }

        release_tokens(prize.holder, payout.token_reserve);
        delete prizes[_erc721][_tokenId];

    }
    /**
    * @dev Private function distributing rewards
    */
    function make_payouts(Prize _prize, Payout _payout, address _winner) private {
        uint256 payout_amount = _prize.value_eth;
        if(payout_amount>0){
                uint256 game_amount = (payout_amount *_payout.game_payout) / 100;
                uint256 winner_amount = (payout_amount * _payout.winner_payout) / 100;
                uint256 holder_amount = (payout_amount * _payout.holder_payout) / 100;

                asyncSend(_prize.game, game_amount);
                asyncSend(_winner, winner_amount);
                asyncSend(_prize.holder, holder_amount);
                asyncSend(_prize.master, payout_amount - game_amount - winner_amount - holder_amount);
         }
    }

    /**
    * @dev Set the policy of payout by game. Assumed to be called by game - see examples folder
    *
    * @notice If the game did not set this, default values are used
    *
    * @param _master_payout percent of reward amount in Ether, distributed to master of the game (default is 10). Note, that if the prize is expired,
    * master gets all amount back in any case.
    * @param _game_payout percent of reward amount in Ether, distributed to master of the game (default is 20). Note, that if the prize is expired,
    * master gets all amount back in any case.
    * @param _winner_payout percent of reward amount in Ether, distributed to winner of the game (default is 20).
    * @param _holder_payout percent of reward amount in Ether, distributed to holder of IZX tokens, reserved for the game (default is 50)
    * @param _reserve required amount of IZX token per one ERC721 token ( default is 1 IZX token = 1 ether in integer )
    */
    function set_game_payout(uint256 _master_payout, uint256 _game_payout, uint256 _winner_payout,
                                        uint256 _holder_payout, uint256 _reserve ) public {
        require(_master_payout <= 100);
        require(_game_payout <= 100);
        require(_winner_payout <= 100);
        require(_holder_payout <= 100);
        require(_reserve> 0);
        require(_master_payout + _game_payout + _winner_payout + _holder_payout == 100);

        game_payouts[msg.sender] = Payout(   _master_payout,
                                            _game_payout,
                                            _winner_payout,
                                            _holder_payout,
                                            _reserve);
    }

}