pragma solidity ^0.4.18;

import "./DriveToken.sol";
import "../drive/CampaignManager.sol";

contract GuessGame {

    DriveToken      public  token;
    CampaignManager public manager;
    uint256         public constant PRIZE_LIFETIME = 72 hours;

    mapping (uint256 => uint256) public game_tokens;

    function GuessGame(CampaignManager _manager) public {
        token = new DriveToken();
        manager = _manager;
        manager.change_payouts( 0, 30, 20, 50, 0.5 ether );
    }

    function issue_prize(uint256 _hash, uint256 _info) public payable {

        require(_hash!=0);
        require(game_tokens[_hash]==0);

        uint256 tokenId = token.mint(this);

        manager.register_prize.value(msg.value)(token, msg.sender, this, tokenId, PRIZE_LIFETIME, _info);

        game_tokens[_hash]= tokenId;
    }

    function claim_win(uint256 _guess) public {

        uint256 hash = key_hash256(_guess);
        uint256 tokenId = game_tokens[hash];
        require(tokenId!=0);

        token.transfer(msg.sender, tokenId);

        delete(game_tokens[hash]);

    }

    /// @notice calculate hash using a seed. The same method used to claim a prize
    /// This calculation can be done offline using sha256 hash function on client side
    /// @param _key to get the prize
    /// @return hash of the prize
    function key_hash256(uint256 _key) public view returns(uint256) {
        return uint256(sha256(_key, address(this)));
    }


}