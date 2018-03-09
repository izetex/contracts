pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import 'zeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import '../token/IZXToken.sol';

contract Deal is Ownable  {

    ERC721  public  token;
    uint    public  tokenId;
    address public  initialTokenOwner;

    uint    public  totalAmountCollected;


    mapping(address => uint)   public  bids;

    function Deal( ERC721 _token, uint _tokenId ) {
        token = _token;
        tokenId = _tokenId;
        initialTokenOwner = _token.ownerOf(_tokenId);
        require(initialTokenOwner!=address(0));
    }

    function join( address _participant, uint _amount  ) public onlyOwner {
        bids[_participant] += _amount;
        totalAmountCollected += _amount;
    }

    function close(  ) public {

    }

    function refund(  ) public {

    }

}
