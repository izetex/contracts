pragma solidity ^0.4.18;

library SafeMath {

  /**
  * @dev Multiplies two numbers, throws on overflow.
  */
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }

  /**
  * @dev Integer division of two numbers, truncating the quotient.
  */
  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  /**
  * @dev Substracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
  */
  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  /**
  * @dev Adds two numbers, throws on overflow.
  */
  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}

contract ERC721 {
  event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);
  event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);

  function balanceOf(address _owner) public view returns (uint256 _balance);
  function ownerOf(uint256 _tokenId) public view returns (address _owner);
  function transfer(address _to, uint256 _tokenId) public;
  function approve(address _to, uint256 _tokenId) public;
  function takeOwnership(uint256 _tokenId) public;
}

contract Auction  {

    struct Item {
        address owner;
        address winner;
        uint    finish_at;
        uint    start_price;
        uint    sale_price;
        uint    amount;
    }

    TokenDriver public  driver;
    ERC721      public  erc721token;
    IZXToken    public  izx;
    address     public  host;
    uint        public  host_share;

    mapping(uint256 => Item) public items;

    event Sale( address indexed token, address indexed owner, uint256 tokenId);
    event Bid( address indexed token, address indexed bidder, uint256 tokenId, uint256 amount);
    event Sold( address indexed token, address indexed winner, uint256 tokenId, uint256 amount);

    using SafeMath for uint256;

    /**
    * @dev creates a new auction contract for ERC721 token
    * @param _host The initiator of the auction creation. Typically it is a game owner or promoter
    * @param _token The address of ERC721 token, traded in new auction
    * @param _host_share Percentage (0 to 100) share of the payout for
    * every completed auction sale in the new contract. If equal to 0, all bid is payed
    * to the winner of the auction. If set to 100, all bid is payed to host, nothing left to bidder.
    */
    function Auction( address _host, ERC721 _token, uint _host_share ) public {
        require(address(_token) != address(0));
        require(_host_share <= 100);

        driver = TokenDriver(msg.sender);
        izx = driver.token();
        erc721token = _token;
        host = _host;
        host_share = _host_share;
    }

    /**
    * @dev start a new round fo auction to sell ERC721 token for IZX
    * @param _tokenId ERC721 token ID to be sold in auction.
    * @param _start_price Minimum bid amount in IZX. Note, that IZX has 18 decimals.
    * @param _sale_price Bid amount for immedeate sale close. Note, that IZX has 18 decimals.
    * @param _duration duration in seconds, after which auction round is finished. After this, call withdraw method
    * to get tokens.
    *
    * @notice Caller must be an owner of the ERC721 token ID and Caller must approve the token to this contract.
    */
    function sell( uint _tokenId, uint _start_price, uint _sale_price, uint _duration) public {
        require( msg.sender == erc721token.ownerOf(_tokenId) );
        require( _sale_price >= _start_price );
        require( _duration > 0 );
        require( items[_tokenId].owner == address(0) );

        items[_tokenId] = Item(msg.sender, address(0), now.add(_duration), _start_price, _sale_price, 0);

        Sale( erc721token, msg.sender, _tokenId);
    }

    /**
    * @dev make a bid to buy ERC721 token for IZX for specified amount of IZX
    * @param _tokenId ERC721 token ID to be bought
    * @param _amount IZX amount which in maximum caller wishes to pay.
    *
    * @notice Caller must own IZX tokens in this amount and must approve the spending to this contract.
    * If _amount is larger than sale_price, then only sale_price is withdrawn from caller.
    */
    function bid( uint _tokenId, uint _amount ) public {
        Item storage item = items[_tokenId];
        require( item.finish_at > now );
        require( _amount > item.amount );
        require( _amount >= item.start_price );

        if( item.winner == address(0)){
            erc721token.takeOwnership(_tokenId);
        }else{
            require(izx.transfer(item.winner, item.amount));
        }

        if( _amount >= item.sale_price ){
            require(izx.transferFrom(msg.sender, this, item.sale_price));
            close(_tokenId, item.owner, msg.sender, item.sale_price);
        }else{
            require(izx.transferFrom(msg.sender, this, _amount));
            item.winner = msg.sender;
            item.amount = _amount;
        }

        Bid( erc721token, msg.sender, _tokenId, _amount);
    }

    /**
    * @dev withdraw ERC721 and IZX tokens after finish_at time of the auction
    * @param _tokenId ERC721 token ID to be transfered
    */
    function withdraw(uint _tokenId) public {
        Item storage item = items[_tokenId];
        require( now > item.finish_at );
        require( item.amount > 0);

        close(_tokenId, item.owner, item.winner, item.amount);
    }

    // --- INTERNAL METHODS ----

    /**
    * @dev closes the auction, transfers IZX and ERC721 token.
    *
    * @param _tokenId ERC721 token ID to be transfered to auction winner
    * @param _owner is the seller address
    * @param _winner is the buyer address
    * @param _amount is the bid amount
    *
    * @notice this method called in 2 cases: after the finish_at by manual withdraw or by
    * bid method, when amount is larger or equal to tsbid price.
    */
    function close(uint _tokenId, address _owner, address _winner, uint _amount) internal {

        uint host_amount = _amount.mul(host_share) / 100;
        if(host_amount>0){
            izx.transfer(host, host_amount);
        }

        uint owner_amount = _amount.sub(host_amount);
        if(owner_amount>0){
            izx.transfer(_owner, owner_amount);
        }

        erc721token.transfer(_winner, _tokenId);

        delete items[_tokenId];
        Sold( erc721token, _winner, _tokenId, _amount);

    }

}

contract Campaign {

    struct Prize {
        address advertiser;
        address winner;
        uint    expires_at;
    }

    TokenDriver public  driver;
    ERC721      public  erc721token;
    IZXToken    public  izx;
    address     public  host;
    uint        public  lifetime;
    uint        public  token_price;
    uint        public  winner_payout;
    uint        public  host_payout;
    
    mapping(uint256 => Prize) public prizes;

    event Claimed( address indexed token, address indexed winner, address indexed advertiser, uint256 tokenId);
    event Reclaimed( address indexed token, address indexed winner, address indexed advertiser, uint256 tokenId);
    event Converted( address indexed token, address indexed winner, address indexed advertiser, uint256 tokenId);

    using SafeMath for uint256;

    /**
    * @dev create a new advertising contract for ERC721 token
    *
    * @param _host The initiator of the campaign creation. Typically it is a game owner or promoter
    * @param _token The address of ERC721 token, traded in new campaign
    * @param _lifetime The time period in seconds, allowed to convert the prize
    * after it is claimed by ERC721 token owner. I this time expires, and prize is not converted to IZX tokens,
    * the token can be returned to the initial owner.
    * @param _token_price Price of every ERC721 token in IZX, payed by advertiser.
    * @param _host_share Percentage (0 to 100) share of the payout for
    * every completed conversion in the new contract. If equal to 0, all token price is payed
    * to the winner of the prize. If set to 100, all bid is payed to host, nothing left to the winner.
    */
    function Campaign(  address _host, 
                        ERC721 _token, 
                        uint _lifetime, 
                        uint _token_price,
                        uint _host_share) public {

        require(address(_token) != address(0));
        require(_lifetime > 0);
        require(_token_price > 0);
        require(_host_share <= 100);
        
        driver = TokenDriver(msg.sender);
        izx = driver.token();
        erc721token = _token;
        host = _host;
        lifetime = _lifetime;
        token_price = _token_price;

        host_payout = _host_share.mul(token_price) / 100;
        winner_payout = _token_price.sub(host_payout);
    }

    /**
    * @dev player claims owing the ERC721 token
    *
    * @param _tokenId ID of owned ERC721 token in the game
    * @param _advertiser The address of advertiser, who is assumed to convert this token
    *
    * @notice player must call ERC721 approve method to allow this contract to take ownershio of the token,
    * effectively reserving it for conversion. Also, the token price in IZX is reserved from advertiser account.
    */
    function claim(uint _tokenId, address _advertiser) public {
        require(msg.sender == erc721token.ownerOf(_tokenId));
        require(izx.transferFrom(_advertiser, this, token_price));

        erc721token.takeOwnership(_tokenId);
        prizes[_tokenId] = Prize(_advertiser, msg.sender, now.add(lifetime) );

        Claimed(erc721token, msg.sender, _advertiser, _tokenId);
    }

    /**
    * @dev action, opposite to claim. Player, who claimed the token can call this before convert,
    * or anybody can call this after prize is expired.
    *
    * @param _tokenId ID of claimed ERC721 token
    *
    * @notice player get his ERC721 back, and advertiser receives token price IZX amount.
    * This transaction reverts claim transaction.
    */
    function reclaim(uint _tokenId) public {
        Prize storage prize = prizes[_tokenId];
        require( (prize.winner == msg.sender) || (now > prize.expires_at) );
        address advertiser = prize.advertiser;
        address winner = prize.winner;

        erc721token.transfer(prize.winner, _tokenId);
        require(izx.transfer(advertiser, token_price));

        delete prizes[_tokenId];

        Reclaimed( erc721token, winner, advertiser, _tokenId);
    }

    /**
    * @dev advertiser calls this method to approve IZX payout to player and host.
    *
    * @param _tokenId ID of claimed ERC721 token
    *
    * @notice payout distribution depends on host_share percentage.If equal to 0, all token price is payed
    * to the player, claiming the prize. If set to 100, all bid is payed to host, nothing left to the player.
    * On success, ERC721 token is transfered to advertiser, which he can burn or sell in auction, or put back to game
    * on his will.
    */
    function convert(uint _tokenId) public {
        Prize storage prize = prizes[_tokenId];
        require(prize.advertiser == msg.sender);

        address winner = prize.winner;
        erc721token.transfer(prize.advertiser, _tokenId);
        
        if(winner_payout>0){
            require(izx.transfer(winner, winner_payout));
        }

        if(host_payout>0){
            require(izx.transfer(host, host_payout));
        }

        delete prizes[_tokenId];

        Converted( erc721token, winner, msg.sender, _tokenId);
    }


}

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

contract TokenDriver is TokenController {

    event NewAuction( address indexed token, address indexed auction);
    event NewCampaign( address indexed token, address indexed campaign);

    IZXToken public token;

    mapping(address => bool) public allowed_contracts;

    function TokenDriver( IZXToken _token ) public {
        require( address(_token) != address(0));
        token = _token;
    }

    /**
    * @dev creates a new auction contract for ERC721 token
    * @param _token The address of ERC721 token, traded in new auction
    * @param _host_share Percentage (0 to 100) share of the payout for
    * every completed auction sale in the new contract. If equal to 0, all bid is payed
    * to the winner of the auction. If set to 100, all bid is payed to host, nothing left to bidder.
    */
    function createAuction(ERC721 _token, uint _host_share) external{
        Auction auction = new Auction(msg.sender, _token, _host_share);
        allowed_contracts[address(auction)] = true;
        NewAuction( _token, auction);
    }

    /**
    * @dev create a new advertising contract for ERC721 token
    * @param _token The address of ERC721 token, traded in new campaign
    * @param _lifetime The time period in seconds, allowed to convert the prize
    * after it is claimed by ERC721 token owner. I this time expires, and prize is not converted to IZX tokens,
    * the token can be returned to the initial owner.
    * @param _token_price Price of every ERC721 token in IZX, payed by advertiser.
    * @param _host_share Percentage (0 to 100) share of the payout for
    * every completed conversion in the new contract. If equal to 0, all token price is payed
    * to the winner of the prize. If set to 100, all bid is payed to host, nothing left to the winner.
    */
    function createCampaign(ERC721 _token, uint _lifetime, uint _token_price, uint _host_share) external{
        Campaign campaign = new Campaign(msg.sender, _token, _lifetime, _token_price, _host_share);
        allowed_contracts[address(campaign)] = true;
        NewCampaign( _token, campaign);
    }

    /// ----- METHODS IMPLEMENTATION FROM TokenController interface ----- ///

    /// @notice Called when `_owner` sends ether to the Token contract
    function proxyPayment(address) payable public returns(bool){
        return false;
    }

    /// @notice Notifies the controller about a token transfer allowing the
    ///  controller to react if desired
    /// @param _to The destination of the transfer
    /// @return False if the controller does not authorize the transfer
    function onTransfer(address, address _to, uint) public returns(bool){
        return !isContract(_to) || allowed_contracts[_to];
    }

    /// @notice Notifies the controller about an approval allowing the
    function onApprove(address, address _spender, uint) public returns(bool){
        return !isContract(_spender) || allowed_contracts[_spender];
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

contract IZXToken is ControlledToken {

   function IZXToken() ControlledToken( 1, 'IZX Token', 18, 'IZX' ) public {}

}

