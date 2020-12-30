// require the test file
const divide = require("../index");
// // require the chai assertion library
// const chai = require("chai");
// // require the expect interface of chai
// const expect = chai.expect;
const expect = require("chai").expect;

/*
CREATING TEST SUITES

1. SET UP ANY DATA WE NEED TO TEST THE CASES
2. INVOKE THE FUNCTION TO BE TESTED AND STORE THE OUTPUT 
3. USE AN ASSERTION LIBRARY TO ASSERT THAT ALL THE EFFECTS OF THE INVOCATION MEET OUR EXPECTATIONS  

*/

// create test suite using the describe function
describe("Divide function", () => {
  it("should divide positive integers correctly", () => {
    // 1. define data inputs
    const a = 8;
    const b = 4;
    const expectedAnswer = 2;

    // 2. invoke the function
    const actualAnswer = divide(a, b);

    // 3. assert that expected === actual; .equal() from chai performs a strictly equal comparison
    expect(actualAnswer).to.equal(expectedAnswer);
  });

  it("should throw an error when divide by zero", () => {
    // 1. define data inputs
    const a = 8;
    const b = 0;

    // 2 invoke the function
    const fn = () => {
      divide(a, b);
    };

    // 3. assert that expected === actual
    expect(fn).to.throw();
  });
});
