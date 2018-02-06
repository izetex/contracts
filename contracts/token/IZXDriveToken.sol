pragma solidity ^0.4.11;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';

contract IZXDriveToken is ERC721Token {

   struct Prize {

        address sponsor;    // creator of the prize. He setup the game rules and hash to guess
        address holder;     // holder of IZX token, granted to issue this prize
        address burner;     // responsible for burning the prize before expiration

        uint256 tokens;     // amount of IZX tokens, reserved to issue the prize
        uint256 amount;     // total amount of Ethers for this prize

        uint256 expiration; // unix timestamp of expiration for the prize

        mapping (address => uint256) share; // distribution of the prize amount for beneficiars
    }

   mapping (uint256 => Prize) private prizes;


   function IZXDriveToken() public {
        _mint(msg.sender, 1223);
   }

}