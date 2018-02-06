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
        address burner;     // responsible for burning the prize before expiration

        uint256 tokens;     // amount of IZX tokens, reserved to issue the prize
        uint256 amount;     // total amount of Ethers for this prize

        uint256 expiration; // unix timestamp of expiration for the prize

        bytes extra;        // extra information, associated with prize, for example hash to IPFS
        mapping (address => uint256) shares; // distribution of the prize amount for beneficiars

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

    uint256 amount = prize.amount;
    if(amount>0){
        distribute_share(prize, prize.game);
        distribute_share(prize, prize.sponsor);
        distribute_share(prize, prize.holder);
        distribute_share(prize, ownerOf(_tokenId));
    }
    delete prizes[_tokenId];

    _burn(_tokenId);
  }

  /**
  * @dev Burns a specific token, which is already expired
  * All funds go back to sponsor then
  * @param _tokenId uint256 ID of the token being burned by the msg.sender
  */
  function burn_expired(uint256 _tokenId) onlyOwnerOf(_tokenId) public {

    Prize storage prize = prizes[_tokenId];

    require(prize.expiration>0);
    require(now>prize.expiration);

    if(prize.sponsor!=address(0) && prize.amount>0){
        asyncSend(prize.sponsor, prize.amount);
    }

    delete prizes[_tokenId];

    _burn(_tokenId);
  }


  function distribute_share(Prize storage _prize, address _receiver) private {
    if(_receiver!=address(0) && _prize.shares[_receiver]>0){
        asyncSend(_receiver, _prize.shares[_receiver]);
    }
  }


}