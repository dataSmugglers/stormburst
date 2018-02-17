pragma solidity ^0.4.18;

contract StormBurst {

	mapping (bytes24 => Submission[] ) public getSubmission;

	struct Submission {
		string mirrorLink;
		string title;
		bytes24 tag;
	}

	Submission[] public submissions;

	function createSubmission(string _mirrorLink, string _title, bytes24 _tag ) public {
		getSubmission[_tag].push(Submission(_mirrorLink, _title, _tag));
	}



	function getArraySubmission(bytes24 _tag) public view returns(Submission[]) {
		return (getSubmission[_tag]);

	}

	//getIndex(tag, #){}

	//getIndexList(tag => List of tags, #)
}
