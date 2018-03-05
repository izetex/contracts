pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';


contract Campaign is Ownable {

    address     public  sponsor;
    address     public  game;
    address     public  game_token;
    address     public  izx_token;

    uint256     public  sponsor_token_amount;
    uint256     public  holder_token_amount;

    struct Prize {

        address token_holder;
        uint256 holder_amount;
        address winner;

    }

    mapping(uint256 => Prize)   public  prizes;
    mapping(address => uint256) public  token_holder_balance;
    address[]                   public  token_holders;
    uint256                     public  next_index;


    function Campaign(address _sponsor, address _game, address _game_token, address _izx_token) public {
        sponsor = _sponsor;
        game = _game;
        game_token = _game_token;
        izx_token = _izx_token;
    }


    function acceptTokens(address _sender, uint256 _token_amount) public onlyOwner {
        if(_sender==sponsor){
            sponsor_token_amount += _token_amount;
        }else{
            holder_token_amount += _token_amount;
            token_holder_balance[_sender] += _token_amount;
            uint next = token_holders.length++;
            token_holders[next] = _sender;
        }
    }

    function registerPrize(uint256 _tokenId) public onlyGame {

        prizes[_tokenId] = Prize(token_holder, holder_amount, address(0));
    }

    function rewardPrize(uint256 _tokenId) public {

    }

}