// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by tag-transfer.js.
import { name as packageName } from "meteor/tag-transfer";

// Write your tests here!
// Here is an example.
Tinytest.add('tag-transfer - example', function (test) {
  test.equal(packageName, "tag-transfer");
});
