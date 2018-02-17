pragma solidity ^0.4.19;

contract StormBurst {


    
	// Here will lie the future of decentralization
    mapping (string => Submission) get_submission;
    
	//For consistancy with the createSubmition, I've moved the
	//fields around.
	struct Submission {
		string mirror_link;
		string title;
		//Assuming tag is the key value.
		string tag;
	}

	Submission[] public submissions;
	
	function _createLink() {};

	//Do you want the submission to immediately be appended to the list?
	//It seems like each time when the submission is created, we also need to create a key, which maps to the
	//appended submission.
	//And what's the tag for?
	//createSubmition (string URI, name, tag) {
	//	Submission new_submission = Submission(URI, name, tag)
	//	This is where new_submission is "binded" to the tag.
	//	get_submission[tag] = new_submission
	//
	//}
	
	//getIndex(tag, #){}
	
	//getIndexList(tag => List of tags, #)
}
