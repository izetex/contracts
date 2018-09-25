pragma solidity ^0.4.11;


import "./Owned.sol";
import "../token/ERC20.sol";

contract TokenDistribution is Owned {

    ERC20 public tokenContract;
    address public wallet;

    function TokenDistribution ( address _tokenAddress, address _walletAddress ) public {
        tokenContract = ERC20(_tokenAddress); // The Deployed Token Contract
        wallet = _walletAddress;
     }

    function distributeTokens(address[] _owners, uint256[] _tokens) onlyOwner public {

        require( _owners.length == _tokens.length );
        for(uint i=0;i<_owners.length;i++){
            require (tokenContract.transferFrom(wallet, _owners[i], _tokens[i]));
        }

    }

}