// require the test file
// require the chai assertion library & require teh expect interface of chai
const index = require("../index");
const expect = require("chai").expect;
// WHAT SHOULD THE FUNCTION BE ABLE TO DO
// WHAT TYPE OF PARAMETERS
// WHEN SHOULD IT THROW AN ERROR
// WHAT FORMAT SHOULD THE RESULT BE IN

describe("Sort function", () => {
  // the returned value should in fact be an array
  it("should return a value with the data type of array", () => {
    const array = [10, 235, 488, 8000, 314, 2, 49];
    const actualArray = index.sort(array);
    expect(actualArray).to.be.a("array");
  });
  // the returned value should should have the same length as the parameter
  it("should return a an array with the same length as the parameter", () => {
    const array = [10, 235, 488, 8000, 314, 2, 49];
    const actualArray = index.sort(array);
    expect(actualArray).to.have.lengthOf(array.length);
  });
  it("should sort posiive integers in acsending order", () => {
    // 1. define data inputs
    const array = [10, 235, 488, 8000, 314, 2, 49];
    const expectedArray = [2, 10, 49, 235, 314, 488, 8000];
    //2. invoke the function
    const actualArray = index.sort(array);
    // 3. assert the expected vs actual output
    // https://www.chaijs.com/api/bdd/
    expect(expectedArray).to.eql(actualArray);
  });
  it("should sort positive integers in ascending order even when there are duplicates", () => {
    // 1. define data inputs
    const array = [10, 314, 488, 8000, 10, 2, 488];
    const expectedArray = [2, 10, 10, 314, 488, 488, 8000];
    //2. invoke the function
    const actualArray = index.sort(array);
    // 3. assert the expected vs actual output
    // https://www.chaijs.com/api/bdd/
    expect(actualArray).to.eql(expectedArray);
  });
  it("should sort negative integers in acsending order", () => {
    const array = [-7, -235, -488, -8000, -314, -2, -49];
    const expectedArray = [-8000, -488, -314, -235, -49, -7, -2];
    const actualArray = index.sort(array);

    expect(actualArray).to.eql(expectedArray);
  });
  it("should sort negative integers in acsending order even when there are duplicates", () => {
    const array = [-7, -235, -49, -8000, -314, -49, -314];
    const expectedArray = [-8000, -314, -314, -235, -49, -49, -7];
    const actualArray = index.sort(array);

    expect(actualArray).to.eql(expectedArray);
  });
  it("should sort a combination of positive and negative integers in acsending order", () => {
    const array = [10, -7, -235, 314, 488, -8000, 2, -49, -31];
    const expectedArray = [-8000, -235, -49, -31, -7, 2, 10, 314, 488];
    const actualArray = index.sort(array);
    expect(actualArray).to.eql(expectedArray);
  });
  // WHAT TO DO ABOUT FRACTIONS???
  it("should sort floating point numbers in acsending order", () => {
    const array = [0.1, -0.7, -0.235, 0.314, 0.488, -0.8, 0.2, -0.49, -0.31];
    const expectedArray = [
      -0.8,
      -0.7,
      -0.49,
      -0.31,
      -0.235,
      0.1,
      0.2,
      0.314,
      0.488,
    ];
    const actualArray = index.sort(array);
    expect(actualArray).to.eql(expectedArray);
  });
});
