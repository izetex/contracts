pragma solidity ^0.4.11;


import "../token/ControlledToken.sol";
import "../token/TokenController.sol";
import "../util/Owned.sol";
import '../util/SafeMath.sol';


contract TokenSaleAfterSplit is TokenController, Owned, SafeMath {


    uint public startFundingTime;           // In UNIX Time Format
    uint public endFundingTime;             // In UNIX Time Format

    uint public tokenCap;                   // Maximum amount of tokens to be distributed
    uint public totalTokenCount;            // Actual amount of tokens distributed

    uint public totalCollected;             // In wei
    ControlledToken public tokenContract;   // The new token for this TokenSale
    address public vaultAddress;            // The address to hold the funds donated
    bool public transfersAllowed;           // If the token transfers are allowed
    uint256 public exchangeRate;            // USD/ETH rate * 100
    uint public exchangeRateAt;             // Block number when exchange rate was set

    /// @notice 'TokenSale()' initiates the TokenSale by setting its funding
    /// parameters
    /// @dev There are several checks to make sure the parameters are acceptable
    /// @param _startFundingTime The UNIX time that the TokenSale will be able to
    /// start receiving funds
    /// @param _endFundingTime The UNIX time that the TokenSale will stop being able
    /// to receive funds
    /// @param _tokenCap Maximum amount of tokens to be sold
    /// @param _vaultAddress The address that will store the donated funds
    /// @param _tokenAddress Address of the token contract this contract controls
    /// @param _transfersAllowed if token transfers are allowed
    /// @param _exchangeRate USD/ETH rate * 100
    function TokenSaleAfterSplit (
        uint _startFundingTime,
        uint _endFundingTime,
        uint _tokenCap,
        address _vaultAddress,
        address _tokenAddress,
        bool _transfersAllowed,
        uint256 _exchangeRate
    ) public {
        require ((_endFundingTime >= now) &&           // Cannot end in the past
            (_endFundingTime > _startFundingTime) &&
            (_vaultAddress != 0));                    // To prevent burning ETH
        startFundingTime = _startFundingTime;
        endFundingTime = _endFundingTime;
        tokenCap = _tokenCap;
        tokenContract = ControlledToken(_tokenAddress);// The Deployed Token Contract
        vaultAddress = _vaultAddress;
        transfersAllowed = _transfersAllowed;
        exchangeRate = _exchangeRate;
        exchangeRateAt = block.number;
    }

    /// @dev The fallback function is called when ether is sent to the contract, it
    /// simply calls `doPayment()` with the address that sent the ether as the
    /// `_owner`. Payable is a required solidity modifier for functions to receive
    /// ether, without this modifier functions will throw if ether is sent to them
    function ()  payable public {
        doPayment(msg.sender);
    }


    /// @dev `doPayment()` is an internal function that sends the ether that this
    ///  contract receives to the `vault` and creates tokens in the address of the
    ///  `_owner` assuming the TokenSale is still accepting funds
    /// @param _owner The address that will hold the newly created tokens

    function doPayment(address _owner) internal {

        // First check that the TokenSale is allowed to receive this donation
        require ((now >= startFundingTime) &&
            (now <= endFundingTime) &&
            (tokenContract.controller() != 0) &&
            (msg.value != 0) );

        uint256 tokensAmount = mul(msg.value, exchangeRate) / 10000;

        require( totalTokenCount + tokensAmount <= tokenCap );

        //Track how much the TokenSale has collected
        totalCollected += msg.value;

        //Send the ether to the vault
        require (vaultAddress.call.gas(28000).value(msg.value)());

        // Creates an  amount of tokens base on ether sent and exchange rate. The new tokens are created
        //  in the `_owner` address
        require (tokenContract.generateTokens(_owner, tokensAmount));

        totalTokenCount += tokensAmount;

        return;
    }

    function distributeTokens(address[] _owners, uint256[] _tokens) onlyOwner public {

        require( _owners.length == _tokens.length );
        for(uint i=0;i<_owners.length;i++){
            require (tokenContract.generateTokens(_owners[i], _tokens[i]));
        }

    }


    /// @notice `onlyOwner` changes the location that ether is sent
    /// @param _newVaultAddress The address that will receive the ether sent to this token sale
    function setVault(address _newVaultAddress) onlyOwner public{
        vaultAddress = _newVaultAddress;
    }

    /// @notice `onlyOwner` changes the setting to allow transfer tokens
    /// @param _allow  allowing to transfer tokens
    function setTransfersAllowed(bool _allow) onlyOwner public{
        transfersAllowed = _allow;
    }

    /// @notice `onlyOwner` changes the exchange rate of token to ETH
    /// @param _exchangeRate USD/ETH rate * 100
    function setExchangeRate(uint256 _exchangeRate) onlyOwner public{
        exchangeRate = _exchangeRate;
        exchangeRateAt = block.number;
    }

    /// @notice `onlyOwner` changes the controller of the tokenContract
    /// @param _newController - controller to be used with token
    function changeController(address _newController) onlyOwner public {
        tokenContract.changeController(_newController);
    }

    /////////////////
    // TokenController interface
    /////////////////

    /// @notice `proxyPayment()` allows the caller to send ether to the TokenSale and
    /// have the tokens created in an address of their choosing
    /// @param _owner The address that will hold the newly created tokens

    function proxyPayment(address _owner) payable public returns(bool) {
        doPayment(_owner);
        return true;
    }



    /// @notice Notifies the controller about a transfer, for this TokenSale all
    ///  transfers are allowed by default and no extra notifications are needed
    /// @param _from The origin of the transfer
    /// @param _to The destination of the transfer
    /// @param _amount The amount of the transfer
    /// @return False if the controller does not authorize the transfer
    function onTransfer(address _from, address _to, uint _amount) public returns(bool) {
        return transfersAllowed;
    }

    /// @notice Notifies the controller about an approval, for this TokenSale all
    ///  approvals are allowed by default and no extra notifications are needed
    /// @param _owner The address that calls `approve()`
    /// @param _spender The spender in the `approve()` call
    /// @param _amount The amount in the `approve()` call
    /// @return False if the controller does not authorize the approval
    function onApprove(address _owner, address _spender, uint _amount) public
        returns(bool)
    {
        return transfersAllowed;
    }


}