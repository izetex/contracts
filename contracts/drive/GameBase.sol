pragma solidity ^0.4.18;

contract GameBase {

    TokenDriver public  token_driver;
    DriveToken  public  drive_token;

    function GameBase(TokenDriver _driver) public {
        require(address(_driver)!=address(0));
        token_driver = _driver;
    }


    function place_prize(uint256 _hash, uint256 _tokenId) public {

    }

    function claim_prize(uint256 _guess) public {

    }


}