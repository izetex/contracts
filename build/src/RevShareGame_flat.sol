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

contract Owned {
    /// @dev `owner` is the only address that can call a function with this
    /// modifier
    modifier onlyOwner { require (msg.sender == owner); _; }

    address public owner;

    /// @notice The Constructor assigns the message sender to be `owner`
    function Owned() { owner = msg.sender;}

    /// @notice `owner` can step down and assign some other address to this role
    /// @param _newOwner The address of the new owner. 0x0 can be used to create
    ///  an unowned neutral vault, however that cannot be undone
    function changeOwner(address _newOwner)  onlyOwner {
        owner = _newOwner;
    }
}

contract SafeMath {
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }

  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}

contract Game is Owned, SafeMath {

    // Prize is issued by issuer, using a tokens, borrowed from owner
    // value is the amount, payed to borrow the tokens
    // expiration is the time in the future, when the prize expires and can be
    // fetched back
    struct Prize {
        address issuer;     // issuer of the prize. He setup the game rules and hash to guess
        address owner;      // owner of the tokens, used in prize
        uint256 tokens;     // number of tokens per prize
        uint256 value;      // money spent on the prize
        uint256 expiration; // unix timestamp of expiration
    }

    // State variables
    ERC20                           public token;               // token used to create a prize for the game
    GameController                  public controller;          // game controller for token allowance control
    uint256                         public prize_life_time;     // time from prize creation to expiration in seconds
    mapping (uint256 => Prize)      public prizes;              // prizes by hashes
    mapping (address => uint)       public pendingWithdrawals;  // withdrawal amounts for pull payments

    // Events
    event Issue(address indexed issuer, address indexed owner, uint256 hash, uint256 tokens, uint256 value, uint256 expiration);
    event Claim(address indexed issuer, address indexed owner, address indexed winner, uint256 hash, uint256 tokens, uint256 value);
    event Revoke(address indexed issuer, address indexed owner, uint256 hash, uint256 tokens, uint256 value);

    /// @notice Game constructor. Called by game owner ("developer")
    /// @param _token ERC20 token, used in game, not 0
    /// @param _controller GameController, used to controlled token allowances, not 0
    /// @param _prize_life_time time from prize creation to expiration in seconds
    function Game(  ERC20 _token, GameController _controller, uint256 _prize_life_time  ) public {
        require(address(_token)!=address(0));
        require(address(_controller)!=address(0));
        require( _prize_life_time > 0 );
        token = _token;
        controller = _controller;
        prize_life_time = _prize_life_time;
    }


    /// @notice revoke prizes. Issuer can revoke all prizes issued by him, at any time. All other can revoke only expired prizes
    /// @param _hashes array of hashes to revoke prizes
    function revoke(uint256[] _hashes) public {
        for(uint i=0;i<_hashes.length;i++){
           Prize storage prize = prizes[_hashes[i]];
           if( now>prize.expiration || msg.sender==prize.issuer ){
              expire_prize(prize, _hashes[i]);
           }
        }
    }

    /// @notice prize for sender, claimed by using a key. Prize can be claimed in reward to winner by the winner himself
    /// or third party. Apparently, key can be used just once, as it is revealed after this call and the prize is deleted.
    /// @param _key to get the prize
    /// @return True if prize is not expired and rewarded, False if not
    function claim( uint256 _key ) public returns (bool){
        return claim_winner( _key, msg.sender );
    }

    /// @notice prize, claimed by using a key. Prize can be claimed in reward to winner by the winner himself
    /// or third party. Apparently, key can be used just once, as it is revealed after this call and the prize is deleted.
    /// @param _key to get the prize
    /// @param _winner a winner, rewarded for the prize
    /// @return True if prize is not expired and rewarded, False if not
    function claim_winner( uint256 _key, address _winner ) public returns (bool){

        uint256 hash = key_hash256(_key);

        Prize storage prize = prizes[hash];
        require(prize.owner != address(0));

        if( now>prize.expiration ){
            expire_prize(prize, hash);
            return false;
        }else{
            payout(prize, _winner);

            Claim( prize.issuer, prize.owner, _winner, hash, prize.tokens, prize.value );

            delete(prizes[hash]);
            return true;
        }


    }


    function expire_prize(Prize prize, uint256 hash) internal {

       require( token.transfer(prize.owner, prize.tokens) );
       if(prize.value>0){
            pendingWithdrawals[prize.issuer] += prize.value;
       }

       Revoke(prize.issuer, prize.owner, hash, prize.tokens, prize.value);

       delete(prizes[hash]);
    }

    /// @notice calculate hash using a seed. The same method used to claim a prize
    /// @param _key to get the prize
    /// @return hash of the prize
    function key_hash256(uint256 _key) public view returns(uint256) {
        return uint256(sha256(_key, address(this)));
    }

    /// @notice withdraw an amount if pending withdrawals present
    function withdraw() public {
        uint amount = pendingWithdrawals[msg.sender];
        pendingWithdrawals[msg.sender] = 0;
        if(amount>0){
            require(msg.sender.call.value(amount)());
        }
    }


    /// --- METHDOS TO BE IMPLEMENTED IN GAME CONTRACTS ----

    /// @notice issue prizes for specified hashes. Function is payable, and in non-free games the amount being payed
    /// defines the number of prizes.
    /// This method to be implemented in game contracts, based on this protocol
    /// @param _hashes array of hashes to setup prizes
    function issue(uint256[] _hashes) payable public;

    /// @notice this method to be implemented in game contracts, based on this protocol
    /// payout expects to make a payout to all parties in tokens and Ether
    /// @param _prize prize being claimed
    /// @param _winner winner, claiming the prize
    function payout(Prize storage _prize, address _winner) internal;


}

contract RevShareGame is Game {

    uint256 public prize_price; // price of the single issuance of the prize in wei
    uint256 public prize_tokens; // amount of tokens in one prize
    uint256 dev_commission;     // commission in percentage, payed to game owner (developer)
    uint256 owner_commission;   // commission in percentage, payed to tokens holder
    uint256 issuer_commission;  // commission in percentage, payed to issuer

    /// @notice RevShareGame constructor. Called by game owner ("developer")
    /// @param _token ERC20 token, used in game, not 0
    /// @param _controller GameController, used to controlled token allowances, not 0
    /// @param _prize_life_time time from prize creation to expiration in seconds
    /// @param _prize_tokens amount of tokens in one prize
    /// @param _prize_price price of the single issuance of the prize in wei
    /// @param _dev_commission commission in percentage, payed to game owner (developer)
    /// @param _owner_commission commission in percentage, payed to tokens holder
    /// @param _issuer_commission commission in percentage, payed to issuer
    function RevShareGame( ERC20 _token,
                        GameController _controller,
                        uint256 _prize_life_time,
                        uint256 _prize_tokens,
                        uint256 _prize_price,
                        uint256 _dev_commission,
                        uint256 _owner_commission,
                        uint256 _issuer_commission
                        )
        Game(_token, _controller, _prize_life_time) public {

        require( _prize_price > 0 );
        require( _prize_tokens > 0 );

        prize_price = _prize_price;
        prize_tokens = _prize_tokens;
        dev_commission = _dev_commission;
        owner_commission = _owner_commission;
        issuer_commission = _issuer_commission;

    }

    /// @notice issue prizes using approved tokens from token owners and based on token price specified
    /// @param _hashes array of hashes to setup prizes
    function issue(uint256[] _hashes) payable public {

        uint256 prize_count = msg.value / prize_price;
        if(prize_count > _hashes.length){
            prize_count = _hashes.length;
        }

        require(prize_count>0);

        uint256 total_tokens = mul(prize_count, prize_tokens);
        address tokens_owner = controller.amount_owner(this, total_tokens );

        require( tokens_owner!=address(0) );
        require( token.transferFrom(tokens_owner, this, total_tokens) );

        uint256 change = sub(msg.value, mul(prize_count, prize_price));
        if(change>0){
            pendingWithdrawals[msg.sender] += change;
        }

        uint256 expired_at = now + prize_life_time;
        for(uint i=0;i<prize_count;i++){
            prizes[_hashes[i]] = Prize(msg.sender, tokens_owner, prize_tokens, prize_price, expired_at);
            Issue(msg.sender, tokens_owner, _hashes[i], prize_tokens, prize_price, expired_at);
        }
    }

     function set_prize_tokens(uint256 _prize_tokens) onlyOwner public {
        prize_tokens = _prize_tokens;
     }

     function set_prize_price(uint256 _prize_price) onlyOwner public {
        prize_price = _prize_price;
     }
     
     function set_payouts(uint256 _dev_commission, uint256 _owner_commission, uint256 _issuer_commission) onlyOwner public {
        dev_commission = _dev_commission;
        owner_commission = _owner_commission;
        issuer_commission = _issuer_commission;
     }


    function payout(Prize storage _prize, address _winner) internal {
        require(token.transfer(_prize.owner, _prize.tokens));
        uint256 total = _prize.value;

        uint256 dev_commission_amount = mul(total, dev_commission) / 100;
        pendingWithdrawals[owner] += dev_commission_amount;

        uint256 owner_commission_amount = mul(total, owner_commission) / 100;
        pendingWithdrawals[_prize.owner] += owner_commission_amount;

        uint256 issuer_commission_amount = mul(total, issuer_commission) / 100;
        pendingWithdrawals[_prize.issuer] += issuer_commission_amount;

        pendingWithdrawals[_winner] += total - (dev_commission_amount + owner_commission_amount + issuer_commission_amount);
    }

}

