pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/math/SafeMath.sol';
import '../token/ERC20.sol';

contract ControlledByVote {

    ERC20               public  token;
    uint                public  min_voting_duration;
    uint                public  max_voting_duration;

    ControlledByVote    public  candidate;
    uint                public  finishes_at;
    bool                public  voices_counted;
    bool                public  candidate_wins;

    event VotingStarted( address indexed candidate, address indexed token, uint finishes_at);
    event VotingCompleted( address indexed candidate, address indexed token, bool candidate_wins, uint voices_pro, uint voices_cons);

    using SafeMath for uint256;

    modifier onlyNoVoting() {
        if(address(candidate) != address(0)){

            require(now > finishes_at);
            if(!voices_counted){
                countVotes();
            }
            require(!candidate_wins);
        }
        _;
    }

    modifier onlyVotedFor(ControlledByVote _vote_for) {
        require(candidate != address(0));
        require(candidate == _vote_for);

        require(now > finishes_at);
        if(!voices_counted){
            countVotes();
        }
        require(candidate_wins);

        _;
    }



    function ControlledByVote( ERC20 _token, uint _min_voting_duration, uint _max_voting_duration ) public {
        require( address(_token) != address(0));
        require( _max_voting_duration >= _min_voting_duration);
        require( _max_voting_duration > 0 );
        token = _token;
        min_voting_duration = _min_voting_duration;
    }


    function newCandidate(ControlledByVote _candidate, uint _finishes_at) onlyNoVoting public {
        require(address(candidate) != address(0));
        require(_candidate.token() == token);
        require(_finishes_at >= now.add(min_voting_duration));
        require(_finishes_at <= now.add(max_voting_duration));

        candidate = _candidate;
        finishes_at = _finishes_at;
        voices_counted = false;

        VotingStarted( candidate, token, finishes_at);
    }


    function countVotes() internal {

        uint voices_cons    = token.balanceOf(this);
        uint voices_pro     = token.balanceOf(candidate);

        candidate_wins = voices_pro > voices_cons;
        voices_counted = true;

        VotingCompleted( candidate, token, candidate_wins, voices_pro, voices_cons);
    }


}