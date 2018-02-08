pragma solidity ^0.4.18;

contract GameBase {

    TokenDriver public  token_driver;
    DriveToken  public  token;
    address     public  vault;

    mapping (uint256 => uint256) public game_tokens;

    function GameBase(TokenDriver _driver, address _vault) public {
        require(address(_driver) != address(0));
        require(_vault != address(0) );
        token_driver = _driver;
        token = _driver.drive_token();
        vault = _vault;
    }


    function place_prize(uint256 _hash, uint256 _tokenId) public {
        // require(token.ownerOf(_tokenId)==msg.sender); TODO this is required or not?
        require(_hash!=0);
        require(game_tokens[_hash]==0);

        token.takeOwnership(_tokenId);
        game_tokens[_hash]=_tokenId;
    }

    function claim_prize(uint256 _guess) public {

        uint256 hash = key_hash256(_guess);
        uint256 tokenId = game_tokens[hash];

        require(tokenId!=0); // TODO do we really need this?
        require(token.ownerOf(_tokenId)==msg.sender);

        delete(game_tokens[hash]);
        token_driver.win_prize(tokenId, msg.sender);

    }

    /// @notice calculate hash using a seed. The same method used to claim a prize
    /// This calculation can be done offline using sha256 hash function on client side
    /// @param _key to get the prize
    /// @return hash of the prize
    function key_hash256(uint256 _key) public view returns(uint256) {
        return uint256(sha256(_key, address(this)));
    }


}