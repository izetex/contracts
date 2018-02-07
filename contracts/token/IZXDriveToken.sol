pragma solidity ^0.4.11;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';
import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import 'zeppelin-solidity/contracts/payment/PullPayment.sol';
import "zeppelin-solidity/contracts/math/SafeMath.sol";

contract IZXDriveToken is ERC721Token, Ownable, PullPayment {

   struct Prize {

        address game;       // game address where the prize is issued
        address sponsor;    // creator of the prize. He setup the game rules and hash to guess
        address holder;     // holder of IZX token, granted to issue this prize
        address winner;     // responsible for burning the prize before expiration

        uint256 tokens;     // amount of IZX tokens, reserved to issue the prize
        uint256 amount;     // total amount of ETH for this prize

        uint256 expiration; // unix timestamp of expiration for the prize
        uint256 extra;      // extra information, associated with prize, for example hash to IPFS

        uint256 game_payout;    // payout to game in ETH after burning before expiration
        uint256 sponsor_payout; // payout to sponsor in ETH after burning before expiration
        uint256 holder_payout;  // payout to holder in ETH after burning before expiration
        uint256 winner_payout;  // payout to winner in ETH after burning before expiration

   }

  mapping (uint256 => Prize)   public prizes;       // prizes by token ids

  using SafeMath for uint256;

  function IZXDriveToken() public {
  }

  /**
  * @dev Mint token function
  * @param _to The address that will own the minted token
  * @param _tokenId uint256 ID of the token to be minted by the msg.sender
  */
  function issue_prize(address _to, uint256 _tokenId) onlyOwner public  {


    _mint(_to, _tokenId);
  }

  /**
  * @dev Burns a specific token
  * @param _tokenId uint256 ID of the token being burned by the msg.sender
  */
  function burn(uint256 _tokenId) onlyOwnerOf(_tokenId) public {

    Prize storage prize = prizes[_tokenId];
    require(prize.winner==msg.sender);

    uint256 amount = prize.amount;
    if(amount>0 && prize.expiration>now){
      payout_prize(prize);
    }

    delete prizes[_tokenId];

    _burn(_tokenId);
  }


  function payout_prize(Prize storage _prize) private {

    uint256 total = _prize.winner_payout;
    total = total.add(_prize.game_payout);
    total = total.add(_prize.holder_payout);
    total = total.add(_prize.sponsor_payout);

    require(_prize.amount==total);

    if(_prize.winner!=address(0) && _prize.winner_payout>0){
        asyncSend(_prize.winner, _prize.winner_payout);
    }

    if(_prize.game!=address(0) && _prize.game_payout>0){
        asyncSend(_prize.game, _prize.game_payout);
    }

    if(_prize.holder!=address(0) && _prize.holder_payout>0){
        asyncSend(_prize.holder, _prize.holder_payout);
    }

    if(_prize.sponsor!=address(0) && _prize.sponsor_payout>0){
        asyncSend(_prize.sponsor, _prize.sponsor_payout);
    }

  }


}