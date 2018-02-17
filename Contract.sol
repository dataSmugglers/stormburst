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
		submissions.push(Submission(_mirrorLink, _title, _tag));
	}



	function getArraySubmission(string _tag) public view returns(Submission[]) {
		return (getSubmission[_tag]);

	}
	//createSubmition (string URI, name, tag) {
	//	Submission new_submission = Submission(URI, name, tag) {
	//	This is where new_submission is "binded" to the tag.
	//	get_submission[tag] = new_submission
	//}

	//getIndex(tag, #){}

	//getIndexList(tag => List of tags, #)
}
