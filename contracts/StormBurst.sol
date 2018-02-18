pragma solidity ^0.4.18;

import "./StringUtils.sol";

contract StormBurst {

	mapping (bytes32 => Submission[]) public submissions;
	mapping (uint => string) public tagTable;
	uint public tagCount;

	struct Submission {
		string mirrorLink;
		string title;
		string tag;
	}

	function createSubmission(string mirrorLink, string title, string tag ) public returns(bool success) {
		uint tagIdx = 0;
		while (tagIdx < tagCount && !StringUtils.equal(tagTable[tagIdx],tag)) {
			tagIdx++;
		}

		if (tagIdx == tagCount) {
			tagTable[tagIdx] = tag;
			tagCount++;
		}

		bytes32 tagBytes = _stringToBytes32(tag);
		submissions[tagBytes].push(Submission(mirrorLink, title, tag));
		return true;
	}

	function getTagCount() public view returns (uint count) {
		return tagCount;
	}

	function getTag(uint index) public view returns (string tag) {
		return tagTable[index];
	}

	function submissionsByTagCount(string tag) public view returns(uint submissionCount) {
		bytes32 tagBytes = _stringToBytes32(tag);
		return submissions[tagBytes].length;
  }

	function submissionsByTag(string tagIn, uint index) public view returns(string link, string title, string tag) {
		bytes32 tagBytes = _stringToBytes32(tagIn);
	  Submission storage rval = submissions[tagBytes][index];
		return (rval.mirrorLink, rval.title, rval.tag);
	}

	function _stringToBytes32(string memory source) private pure returns (bytes32 result) {
		bytes memory tempEmptyStringTest = bytes(source);
		if (tempEmptyStringTest.length == 0) {
			return 0x0;
		}
		assembly {
			result := mload(add(source, 32))
		}
}

}
