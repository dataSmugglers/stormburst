var StormBurst = artifacts.require("./StormBurst.sol");

contract('StormBurst', function(accounts) {
  it("should allow you to create Submissions", function() {
    return StormBurst.deployed().then(function(instance) {
      return instance.createSubmission("test.xyz/deb8.iso", "Debian 8", "debian").then(function(Success) {
        return Success;
      });
    }).then(function(Success) {
      assert('tx' in Success, "First Submission not properly saved");
    });
  });

  it("should allow to query tags count", function() {
    return StormBurst.deployed().then(function(instance) {
      return instance.createSubmission("test.xyz/deb8.iso", "Debian 8", "debian").then(function(submission) {
        return instance.getTagCount.call().then(function(count) {return count.toNumber()});  
      });
    }).then(function(tagCount) {
      assert.equal(tagCount, 1, "Tag count query inaccurate");
    });
  })
});
