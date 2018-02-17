pragma solidity ^0.4.18;

contract StormBurst {

	mapping (string => Submission[]) getSubmission;

	struct Submission {
		string mirrorLink;
		string title;
		string tag;
	}

	Submission[] public submissions;

	function createSubmission(string _mirrorLink, string _title, string _tag ) public {
		getSubmissions[_tag].push(Submission(_mirrorLink, _title, _tag));
	}



	function getArraySubmission(string _tag) public view returns(Submission[]) {
		return (getSubmission[_tag]);

	}

	//getIndex(tag, #){}

	//getIndexList(tag => List of tags, #)
}
