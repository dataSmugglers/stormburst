var StormBurst = artifacts.require("./StormBurst.sol");

contract('StormBurst', function(accounts) {
  it("should allow for creation of Submissions", function() {
    return StormBurst.deployed().then(function(instance) {
      return instance.createSubmission("test.xyz/abcdefghi.iso", "abcdefghi 8", "debia").then(function(Success) {
        return Success;
      });
    }).then(function(Success) {
      assert('tx' in Success, "First Submission not properly saved");
    });
  });

  it("should allow for queries against tags count", function() {
    return StormBurst.deployed().then(function(instance) {
      return instance.createSubmission("test.xyz/deb8.iso", "Debian 8", "debian").then(function(submission) {
        return instance.getTagCount.call().then(function(count) {
          return count.toNumber()
        });  
      });
    }).then(function(tagCount) {
      assert.equal(2, tagCount, "Tag count query inaccurate");
    });
  });

  it("should allow for tag retrieval", function() {
    return StormBurst.deployed().then(function(instance) {
      return instance.createSubmission("test.xyz/ubuntu.iso", "Ubuntu 17.04", "ubuntu").then(function(Success) {
        return instance.getTag.call(0).then(function(tag) {
          return tag;
        });
      });
    }).then(function(tag) {
      assert.equal("debia", tag, "Tag query by index inaccurate");
    });
  });

  it("should allow for submission count by tag", function() {
    return StormBurst.deployed().then(function(instance) {
      return instance.createSubmission("test.xyz/deb9001.iso", "Debian 9001", "debian").then(function(Success) {
        return instance.submissionsByTagCount.call("debian").then(function(count) {
          return count.toNumber();
        });
      });
    }).then(function(count) {
      assert.equal(2, count, "Tag => submission Count query by index inaccurate");
    });
  });

  it("should allow for tag retrieval", function() {
    return StormBurst.deployed().then(function(instance) {
      return instance.createSubmission("test.xyz/arch-linux.iso", "arch", "arch").then(function(Success) {
        return instance.submissionByTag.call("debian", 0).then(function(submission) {
          return submission;
        });
      });
    }).then(function(submission) {
      assert.equal("test.xyz/deb8.iso", submission[0], "Submission query by index inaccurate");
      assert.equal("Debian 8", submission[1], "Submission query by index inaccurate");
      assert.equal("debian", submission[2], "Submission query by index inaccurate");
    });
  });
});
