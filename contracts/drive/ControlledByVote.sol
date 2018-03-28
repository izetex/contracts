pragma solidity ^0.4.18;


contract ControlledByVote {

    address     candidate;
    uint        finishes_at;

    mapping(address => uint) amounts;

    modifier onlyVotedFor(address _vote_for) {
        require(candidate == _vote_for);
        require(voted);
        _;
    }


    function newCandidate(address _new_candidate) public {

    }

    function withdraw() public {

    }

}