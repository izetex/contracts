pragma solidity ^0.4.18;

import "./DriveToken.sol";
import "./CampaignManager.sol";

contract GameBase {

    DriveToken      public  token;
    CampaignManager public manager;
    address         public  vault;

    mapping (uint256 => uint256) public game_tokens;
    mapping (uint256 => uint256) public game_extra; // TODO may be it better belong to token?

    modifier onlyCampaignManager() {
        require(address(manager) == msg.sender);
        _;
    }

    function GameBase(CampaignManager _manager, address _vault) public {
        require(_vault != address(0) );
        require(_manager != address(0) );

        manager = _manager;
        token = manager.drive_token();
        vault = _vault;
    }

    function place_prize(uint256 _hash, uint256 _tokenId, uint256 _extra) public {

        require(_hash!=0);
        require(game_tokens[_hash]==0);

        if(token.ownerOf(_tokenId)!=address(this)){
            token.takeOwnership(_tokenId);
        }

        game_tokens[_hash]=_tokenId;
        game_extra[_hash]=_extra;
    }

    function remove_prize(uint256 _hash) onlyCampaignManager public {

         uint256 tokenId = game_tokens[_hash];
         if(tokenId!=0){

            token.burn(tokenId);

            delete(game_tokens[_hash]);
            delete(game_extra[_hash]);

         }
    }

    function claim_prize(uint256 _guess) public {

        uint256 hash = key_hash256(_guess);
        uint256 tokenId = game_tokens[hash];
        require(tokenId!=0);

        token.transfer(msg.sender, tokenId);

        delete(game_tokens[hash]);
        delete(game_extra[hash]);

    }

    /// @notice calculate hash using a seed. The same method used to claim a prize
    /// This calculation can be done offline using sha256 hash function on client side
    /// @param _key to get the prize
    /// @return hash of the prize
    function key_hash256(uint256 _key) public view returns(uint256) {
        return uint256(sha256(_key, address(this)));
    }


}