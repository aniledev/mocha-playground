const index = require("../index");
const expect = require("chai").expect;

describe("Array sum", () => {
  it("should return a promise", () => {
    expect(index.sum([1, 2, 3])).to.be.a("promise");
  });
  it("should sum an array of numbers", () => {
    // to test that the promise resolves a correct value we hae to add a .then handler
    // since index.sum returns a promise and is performing an asynchronous function, we need to make sure the promise resolves and then we can look at the result
    return index.sum([1, 2, 3]).then((ans) => {
      expect(ans).to.equal(6);
    });
  });
  it("should sum an array of numbers and numeric strings", () => {
    return index.sum([1, "2", 3]).then((ans) => {
      expect(ans).to.equal(6);
    });
  });
});
