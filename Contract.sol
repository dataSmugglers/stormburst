pragma solidity ^0.4.18;

contract StormBurst {

	mapping (bytes24 => Submission[] ) public getSubmission;
	SubmissionList[] public getSubmissionList;

	struct Submission {
		string mirrorLink;
		string title;
		bytes24 tag;
	}
	struct SubmissionList {
		uint counter;
		bytes24 tag;
	}

	Submission[] public submissions;

	function createSubmission(string _mirrorLink, string _title, bytes24 _tag ) public {

		getSubmission[_tag].push(Submission(_mirrorLink, _title, _tag));
	}



	function getArraySubmission(bytes24 _tag) public view returns(Submission[]) {
		return (getSubmission[_tag]);

	}
	// Source: https://ethereum.stackexchange.com/questions/9142/how-to-convert-a-string-to-bytes32
	//	function stringToBytes32(string memory source) returns (bytes32 result) {
	//		bytes memory tempEmptyStringTest = bytes(source);
	//		if (tempEmptyStringTest.length == 0) {
	//			return 0x0;
	//		}

	//		assembly {
	//			result := mload(add(source, 32))
	//		}
	//	}
}
