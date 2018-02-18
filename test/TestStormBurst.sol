pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/StormBurst.sol";

contract TestStormBurst {

  function testInitialSubmissionUsingDeployedContract() {
    StormBurst sb = StormBurst(DeployedAddresses.StormBurst());

    sb.createSubmission("test.xyz", "test", "test");

    submission = sb.getSubmissionsByTag("test")[0];

    string expected = "test.xyz";

    Assert.equal(submission.mirrorLink, expected, "First Submission not properly saved");
  }

  function testInitialBalanceWithNewMetaCoin() {
    StormBurst sb = new StormBurst();
    
    sb.createSubmission("test.xyz", "test", "test");

    submission = sb.getSubmissionsByTag("test")[0];

    string expected = "test.xyz";

    Assert.equal(submission.mirrorLink, expected, "First Submission not properly saved");
  }

}
