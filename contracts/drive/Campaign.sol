pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';


contract Campaign is Ownable {

    uint256     public  constant PRIZE_PRICE = 1 ether;
    uint256     public  constant DEFAULT_GAME_REWARD = 0.25 ether;
    uint256     public  constant DEFAULT_WINNER_REWARD = 0.4 ether;


    address     public  sponsor;
    address     public  game;
    address     public  game_token;
    address     public  izx_token;

    uint256     public  finish_at;

    uint256     public  sponsor_token_amount;
    uint256     public  holder_token_amount;

    struct Prize {

        address token_holder;
        address winner;

        uint256 winner_reward;
        uint256 game_reward;
        uint256 holder_reward;

    }

    mapping(uint256 => Prize)   public  prizes;
    mapping(address => uint256) public  token_holder_balance;
    address[]                   public  token_holders;
    uint256                     public  next_index;


    event Sponsored(address indexed campaign, address indexed sponsor, uint256 value);
    event Prize(address indexed campaign, address indexed token, uint256 indexed tokenId, uint256 value);
    event Win(address indexed campaign, address indexed token, address indexed winner, uint256 indexed tokenId);

    modifier notFinished() {
        require(now <= finish_at);
        _;
    }

    modifier notCompleted() {
        require(now <= finish_at || sponsor_token_amount >= PRIZE_PRICE);
        _;
    }

    modifier onlyCompleted() {
        require(now > finish_at || sponsor_token_amount < PRIZE_PRICE);
        _;
    }

    modifier onlySponsored() {
        require( sponsor_token_amount >= PRIZE_PRICE);
        _;
    }

    function Campaign(address _sponsor, address _game, address _game_token, address _izx_token, uint256 finish_at) public {
        sponsor = _sponsor;
        game = _game;
        game_token = _game_token;
        izx_token = _izx_token;
        finish_at = _finish_at;

    }


    function acceptTokens(address _sender, uint256 _token_amount) public onlyOwner notFinished  {

        if(_sender==sponsor){
            sponsor_token_amount += _token_amount;
        }else{
            holder_token_amount += _token_amount;
            token_holder_balance[_sender] += _token_amount;
            uint next = token_holders.length++;
            token_holders[next] = _sender;
        }

        Sponsored(this, address _sender, _token_amount);
    }

    function registerPrize(uint256 _tokenId) public onlyGame onlySponsored notFinished {
        require(ownerOf(_tokenId) != address(0));

        uint256 holder_amount = 0;
        address token_holder = token_holders[next_index];

        if( token_holder !=address(0) ){

            holder_amount = (PRIZE_PRICE * holder_token_amount) / sponsor_token_amount;

            if(holder_amount > token_holder_balance[token_holder]){
                holder_amount = token_holder_balance[token_holder];
            }

            token_holder_balance[token_holder] -= holder_amount;
            holder_token_amount -= holder_amount;

            if(token_holder_balance[token_holder]==0){
                next_index += 1;
            }

        }

        sponsor_token_amount -= PRIZE_PRICE;
        uint256 holder_reward = (PRIZE_PRICE - DEFAULT_WINNER_REWARD - DEFAULT_GAME_REWARD) + holder_amount;
        prizes[_tokenId] = Prize(token_holder, address(0), DEFAULT_WINNER_REWARD, DEFAULT_GAME_REWARD, holder_reward );

        Prize(this, address game_token, _tokenId, PRIZE_PRICE + holder_amount);
    }

    function winPrize(uint256 _tokenId, address _winner) public onlyGame notFinished {
        Prize storage prize = prizes[_tokenId];
        require(prize.winner_reward > 0);
        require(prize.winner == address(0));

        prize.winner = _winner;

        Win(this, game_token, winner, _tokenId);
    }

    function rewardPrize(uint256 _tokenId) public {

        takeOwnership(_tokenId);
        Prize storage prize = prizes[_tokenId];

        require(prize.winner_reward > 0);
        require(prize.winner != address(0));

        require(izx_token.transfer(game, prize.game_reward));
        require(izx_token.transfer(prize.winner, prize.winner_reward));
        require(izx_token.transfer(prize.token_holder, prize.holder_reward ));

        delete prizes[_tokenId];

    }

    function withdraw() public onlyCompleted {

        if(msg.sender == sponsor){

        }else{


        }

    }

}