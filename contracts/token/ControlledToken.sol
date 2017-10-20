pragma solidity ^0.4.11;

import './ERC20.sol';
import './TokenController.sol';

// Token implementation
// sources
//   https://github.com/ConsenSys/Tokens



contract ControlledToken is ERC20, Controlled {

    uint256 constant MAX_UINT256 = 2**256 - 1;

    event ClaimedTokens(address indexed _token, address indexed _controller, uint _amount);

    /* Public variables of the token */

    /*
    NOTE:
    The following variables are OPTIONAL vanities. One does not have to include them.
    They allow one to customise the token contract & in no way influences the core functionality.
    Some wallets/interfaces might not even bother to look at this information.
    */
    string public name;                   //fancy name: eg Simon Bucks
    uint8 public decimals;                //How many decimals to show. ie. There could 1000 base units with 3 decimals. Meaning 0.980 SBX = 980 base units. It's like comparing 1 wei to 1 ether.
    string public symbol;                 //An identifier: eg SBX
    string public version = '1.0';       //human 0.1 standard. Just an arbitrary versioning scheme.
    uint256 public totalSupply;

    function ControlledToken(
        uint256 _initialAmount,
        string _tokenName,
        uint8 _decimalUnits,
        string _tokenSymbol
        ) {
        balances[msg.sender] = _initialAmount;               // Give the creator all initial tokens
        totalSupply = _initialAmount;                        // Update total supply
        name = _tokenName;                                   // Set the name for display purposes
        decimals = _decimalUnits;                            // Amount of decimals for display purposes
        symbol = _tokenSymbol;                               // Set the symbol for display purposes
    }


    function transfer(address _to, uint256 _value) returns (bool success) {
        //Default assumes totalSupply can't be over max (2^256 - 1).
        //If your token leaves out totalSupply and can issue more tokens as time goes on, you need to check if it doesn't wrap.
        //Replace the if with this one instead.
        //require(balances[msg.sender] >= _value && balances[_to] + _value > balances[_to]);
        require(balances[msg.sender] >= _value);

        if (isContract(controller)) {
            require(TokenController(controller).onTransfer(msg.sender, _to, _value));
        }

        balances[msg.sender] -= _value;
        balances[_to] += _value;
        // Alerts the token controller of the transfer

        Transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) returns (bool success) {
        //same as above. Replace this line with the following if you want to protect against wrapping uints.
        //require(balances[_from] >= _value && allowed[_from][msg.sender] >= _value && balances[_to] + _value > balances[_to]);
        uint256 allowance = allowed[_from][msg.sender];
        require(balances[_from] >= _value && allowance >= _value);

        if (isContract(controller)) {
            require(TokenController(controller).onTransfer(_from, _to, _value));
        }

        balances[_to] += _value;
        balances[_from] -= _value;
        if (allowance < MAX_UINT256) {
            allowed[_from][msg.sender] -= _value;
        }
        Transfer(_from, _to, _value);
        return true;
    }

    function balanceOf(address _owner) constant returns (uint256 balance) {
        return balances[_owner];
    }

    function approve(address _spender, uint256 _value) returns (bool success) {

        // Alerts the token controller of the approve function call
        if (isContract(controller)) {
            require(TokenController(controller).onApprove(msg.sender, _spender, _value));
        }

        allowed[msg.sender][_spender] = _value;
        Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender) constant returns (uint256 remaining) {
      return allowed[_owner][_spender];
    }

    ////////////////
// Generate and destroy tokens
////////////////

    /// @notice Generates `_amount` tokens that are assigned to `_owner`
    /// @param _owner The address that will be assigned the new tokens
    /// @param _amount The quantity of tokens generated
    /// @return True if the tokens are generated correctly
    function generateTokens(address _owner, uint _amount ) onlyController returns (bool) {
        uint curTotalSupply = totalSupply;
        require(curTotalSupply + _amount >= curTotalSupply); // Check for overflow
        uint previousBalanceTo = balanceOf(_owner);
        require(previousBalanceTo + _amount >= previousBalanceTo); // Check for overflow
        totalSupply = curTotalSupply + _amount;
        balances[_owner]  = previousBalanceTo + _amount;
        Transfer(0, _owner, _amount);
        return true;
    }


    /// @notice Burns `_amount` tokens from `_owner`
    /// @param _owner The address that will lose the tokens
    /// @param _amount The quantity of tokens to burn
    /// @return True if the tokens are burned correctly
    function destroyTokens(address _owner, uint _amount
    ) onlyController returns (bool) {
        uint curTotalSupply = totalSupply;
        require(curTotalSupply >= _amount);
        uint previousBalanceFrom = balanceOf(_owner);
        require(previousBalanceFrom >= _amount);
        totalSupply = curTotalSupply - _amount;
        balances[_owner] = previousBalanceFrom - _amount;
        Transfer(_owner, 0, _amount);
        return true;
    }

    /// @notice The fallback function: If the contract's controller has not been
    ///  set to 0, then the `proxyPayment` method is called which relays the
    ///  ether and creates tokens as described in the token controller contract
    function ()  payable {
        require(isContract(controller));
        require(TokenController(controller).proxyPayment.value(msg.value)(msg.sender));
    }

    /// @dev Internal function to determine if an address is a contract
    /// @param _addr The address being queried
    /// @return True if `_addr` is a contract
    function isContract(address _addr) constant internal returns(bool) {
        uint size;
        if (_addr == 0) return false;
        assembly {
            size := extcodesize(_addr)
        }
        return size>0;
    }

    /// @notice This method can be used by the controller to extract mistakenly
    ///  sent tokens to this contract.
    /// @param _token The address of the token contract that you want to recover
    ///  set to 0 in case you want to extract ether.
    function claimTokens(address _token) onlyController {
        if (_token == 0x0) {
            controller.transfer(this.balance);
            return;
        }

        ControlledToken token = ControlledToken(_token);
        uint balance = token.balanceOf(this);
        token.transfer(controller, balance);
        ClaimedTokens(_token, controller, balance);
    }


    mapping (address => uint256) balances;
    mapping (address => mapping (address => uint256)) allowed;


}

