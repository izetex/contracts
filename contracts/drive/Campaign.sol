pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';


contract Campaign is Ownable {

    address public      game;
    ERC721  public      token;
    address public      sponsor;

    uint    public      price;
    uint    public      finish_at;

    uint    public      max_tokens;
    uint    public      tokens_total;

    uint    public      sponsor_payout_pct;
    uint    public      game_payout_pct;
    uint    public      winner_payout_pct;
    uint    public      holder_payout_pct;

    mapping (address => uint)   public      token_holders;
    mapping (uint => address)   public      prize_winners;

    function Campaign(address _game, address _sponsor){
    }

    function tokensApproved() onlyOwner {
    }

    function tokensTransfered() onlyOwner {
    }


    function issuePrize(uint _tokenId) onlyGame {
        transfer token
        tokens_reserved[] =
    }

    function payoutPrize(uint _tokenId) onlySponsor {
    }

    function finalize() onlyOwner onlyAfterFinish {
    }

}