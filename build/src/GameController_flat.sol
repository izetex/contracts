pragma solidity ^0.4.13;

contract ERC20 {

  function balanceOf(address who) constant public returns (uint);
  function allowance(address owner, address spender) constant public returns (uint);

  function transfer(address to, uint value) public returns (bool ok);
  function transferFrom(address from, address to, uint value) public returns (bool ok);
  function approve(address spender, uint value) public returns (bool ok);

  event Transfer(address indexed from, address indexed to, uint value);
  event Approval(address indexed owner, address indexed spender, uint value);

}

contract TokenController {
    /// @notice Called when `_owner` sends ether to the Token contract
    /// @param _owner The address that sent the ether to create tokens
    /// @return True if the ether is accepted, false if it throws
    function proxyPayment(address _owner) payable public returns(bool);

    /// @notice Notifies the controller about a token transfer allowing the
    ///  controller to react if desired
    /// @param _from The origin of the transfer
    /// @param _to The destination of the transfer
    /// @param _amount The amount of the transfer
    /// @return False if the controller does not authorize the transfer
    function onTransfer(address _from, address _to, uint _amount) public returns(bool);

    /// @notice Notifies the controller about an approval allowing the
    ///  controller to react if desired
    /// @param _owner The address that calls `approve()`
    /// @param _spender The spender in the `approve()` call
    /// @param _amount The amount in the `approve()` call
    /// @return False if the controller does not authorize the approval
    function onApprove(address _owner, address _spender, uint _amount) public
        returns(bool);
}

contract GameController is TokenController {

    struct Balance {
        uint key_index;
        uint approved_amount;
        uint reserved_amount;
    }

    struct Allowance {
       address[] owners;
       mapping( address => Balance) balances;
    }

    address public master;
    ERC20   public token;

    mapping( address => Allowance) allowances;

    function GameController(ERC20 _token, address _master) public {
        require(_master != address(0));
        require(address(_token) != address(0));
        master = _master;
        token = _token;
    }

    function onApprove(address _owner, address _spender, uint _amount) public returns(bool){
        require(msg.sender==master);

        Allowance storage allowance = allowances[_spender];
        Balance storage balance = allowance.balances[_owner];

        if(balance.key_index==0){
            uint next = allowance.owners.length++;
            allowance.owners[next] = _owner;
            balance.key_index = next + 1;
        }

        balance.approved_amount = _amount;

        return true;
    }

    function onTransfer(address _from, address _to, uint _amount) public returns(bool){
        require(msg.sender==master);

        Allowance storage allowance = allowances[_to];
        Balance storage balance = allowance.balances[_from];

        if(balance.key_index>0){

            balance.reserved_amount += _amount;
            address[] storage owners = allowance.owners;

            uint256 switch_index = (block.timestamp % owners.length);
            address switch_owner = owners[switch_index];

            owners[balance.key_index-1] = switch_owner;
            owners[switch_index] = _from;

            allowance.balances[switch_owner].key_index = balance.key_index;
            balance.key_index = switch_index + 1;

            return true;
        }else{
            allowance = allowances[_from];
            balance = allowance.balances[_to];

            if(balance.key_index>0){
                balance.reserved_amount -= _amount;
                return true;
            }else{
                return false;
            }

        }
    }

    function proxyPayment(address) payable public returns(bool) {
        return false;
    }

    function amount_owner(address _to, uint256 _amount) view public returns(address){
        uint256 count = allowances[_to].owners.length;
        for(uint i = 0; i < count; i++ ){
            address owner = allowances[_to].owners[i];
            if(token.balanceOf(owner)>=_amount){
                Balance storage balance = allowances[_to].balances[owner];
                if(balance.approved_amount >= _amount + balance.reserved_amount){
                    return owner;
                }
            }
        }
        return address(0);
    }

    function approved_amount(address _owner, address _game) view public returns(uint256){
        return allowances[_game].balances[_owner].approved_amount;
    }

    function reserved_amount(address _owner, address _game) view public returns(uint256){
        return allowances[_game].balances[_owner].reserved_amount;
    }

    function owner_index(address _owner, address _game) view public returns(uint256){
        return allowances[_game].balances[_owner].key_index;
    }

    function available_amount(address _owner, address _game) view public returns(uint256){
        uint256 amt = allowances[_game].balances[_owner].approved_amount;
        uint256 bal = token.balanceOf(_owner);
        if( bal < amt){
            amt = bal;
        }
        return amt;
    }

    function owners(address _game) view public returns(address[]){
        return allowances[_game].owners;
    }
}

contract Controlled {
    /// @notice The address of the controller is the only address that can call
    ///  a function with this modifier
    modifier onlyController { require(msg.sender == controller); _; }

    address public controller;

    function Controlled() public { controller = msg.sender;}

    /// @notice Changes the controller of the contract
    /// @param _newController The new controller of the contract
    function changeController(address _newController) onlyController public {
        controller = _newController;
    }
}

