pragma solidity ^0.4.18;

contract StormBurst {

	mapping (bytes32 => Submission[] ) public getSubmission;
	SubmissionList[] public getSubmissionList;
    Submission[] public submissions;
    string[] public tag;

	struct Submission {
		string mirrorLink;
		string title;
		bytes32 tag;
	}
	struct SubmissionList {
		uint counter;
		bytes32 tag;
	}
	
	/*
		Incoming _tag, which is in the form of string, gets appended to the tag array (please refer the fields).
		Then, stringToByte32 is invoked inorder to convert the _tag into byte32, so the getSubmission mapper
		behaves properly.
		Finally, getSubmission binds the correctTagType key to the new Submission being appeneded to the
		getSubmission array.
	*/
	function createSubmission(string _mirrorLink, string _title, string _tag) public {
        saveTag(_tag);
		bytes32 correctTagType = stringToBytes32(_tag);
		getSubmission[correctTagType].push(Submission(_mirrorLink, _title, correctTagType));
	}

	/*
		Self explanatory, self documenting code at its finest.
	*/
    function saveTag(string _tag){
        tag.push(_tag);
    }
	
	/*
		"Please ask Mr.Sal about this"-Bob
	*/
	function getArraySubmission(string _tag) public view returns(Submission[]) {
	    bytes32 correctTagType = stringToBytes32(_tag);
		return (getSubmission[correctTagType]);
    }
	
	// Source: https://ethereum.stackexchange.com/questions/9142/how-to-convert-a-string-to-bytes32
	function stringToBytes32(string memory source) returns (bytes32 result) {
		bytes memory tempEmptyStringTest = bytes(source);
		if (tempEmptyStringTest.length == 0) {
			return 0x0;
		}
		assembly {
			result := mload(add(source, 32))
		}
	}
}
