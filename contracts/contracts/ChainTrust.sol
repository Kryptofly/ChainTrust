pragma solidity ^0.8.0;

contract ChainTrust {
    struct Review {
        address reviewer;
        string content;
        uint8 rating;
    }

    mapping(address => Review[]) public reviews;

    function addReview(address _user, string memory _content, uint8 _rating) public {
        reviews[_user].push(Review(msg.sender, _content, _rating));
    }

    function getReviews(address _user) public view returns (Review[] memory) {
        return reviews[_user];
    }
}
