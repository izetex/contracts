pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import 'zeppelin-solidity/contracts/math/SafeMath.sol';

import '../token/IZXToken.sol';
import './TokenDriver.sol';

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
    * @dev Throws if called by any account other than the token driver.
    */
    modifier onlyDriver() {
        require(msg.sender == address(driver));
        _;
    }

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


    function claim(uint _tokenId, address _advertiser) public {
        require(msg.sender == erc721token.ownerOf(_tokenId));
        require(izx.transferFrom(_advertiser, this, token_price));

        erc721token.takeOwnership(_tokenId);
        prizes[_tokenId] = Prize(_advertiser, msg.sender, now.add(lifetime) );

        Claimed(erc721token, msg.sender, _advertiser, _tokenId);
    }

    function reclaim(uint _tokenId) public {
        Prize storage prize = prizes[_tokenId];
        require(prize.winner == msg.sender || now > prize.expires_at);
        address advertiser = prize.advertiser;

        erc721token.transfer(prize.winner, _tokenId);
        require(izx.transferFrom(this, advertiser, token_price));

        delete prizes[_tokenId];

        Reclaimed( erc721token, msg.sender, advertiser, _tokenId);
    }

    function convert(uint _tokenId) public {
        Prize storage prize = prizes[_tokenId];
        require(prize.advertiser == msg.sender);

        address winner = prize.winner;
        erc721token.transfer(prize.advertiser, _tokenId);
        
        if(winner_payout>0){
            require(izx.transferFrom(this, winner, winner_payout));
        }

        if(host_payout>0){
            require(izx.transferFrom(this, winner, host_payout));
        }

        delete prizes[_tokenId];

        Converted( erc721token, winner, msg.sender, _tokenId);
    }


}