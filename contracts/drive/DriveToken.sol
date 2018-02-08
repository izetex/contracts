pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';


contract DriveToken is ERC721Token, Ownable {


    function DriveToken() {

    }

    function mint() onlyOwner public return(uint256) {

    }

    function burn() public {

    }


}