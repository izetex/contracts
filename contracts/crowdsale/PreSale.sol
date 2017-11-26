pragma solidity ^0.4.11;

import "./TokenSale.sol";

contract PreSale is TokenSale {
    function PreSale() TokenSale(
        0,    //    uint _startFundingTime,
        1514764800,    //    uint _endFundingTime,
        10000,    //    uint _maximumFunding,
        0,    //    address _vaultAddress,
        0,    //    address _tokenAddress,
        false,    //    bool _transfersAllowed,
        100    //    uint256 _exchangeRate
    ) public {}
}