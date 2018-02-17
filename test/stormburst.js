var StormBurst = artifacts.require("./StormBurst.sol");

contract('StormBurst', function(accounts) {
  it("should allow you to create Submissions", function() {
    return StormBurst.deployed().then(function(instance) {
      instance.createSubmission('test.xyz', 'test', 'test');
      return instance.getSubmissionsByTag.call('test');
    }).then(function(submission) {
      assert.equals(submission[0].mirrorLink, 'test.xyz', "First Submission not properly saved");
    });
  });
});
