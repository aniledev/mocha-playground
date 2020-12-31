// require the test file
// require the chai assertion library & require teh expect interface of chai
const index = require("../index");
const expect = require("chai").expect;

// WHAT SHOULD THE FUNCTION BE ABLE TO DO
// WHAT TYPE OF PARAMETERS
// WHEN SHOULD IT THROW AN ERROR
// WHAT FORMAT SHOULD THE RESULT BE IN

describe("Sort function", () => {
  it("1. should sort posiive integers in acsending order", () => {
    // 1. define data inputs
    const array = [10, 235, 488, 8000, 314, 2, 49];
    const expectedArray = [2, 10, 49, 235, 314, 488, 8000];
    //2. invoke the function
    const actualArray = index.sort(array);
    // 3. assert the expected vs actual output
    // https://www.chaijs.com/api/bdd/
    expect(expectedArray).to.eql(actualArray);
  });
  it("2. should sort positive integers in ascending order even when there are duplicates", () => {
    // 1. define data inputs
    const array = [10, 314, 488, 8000, 10, 2, 488];
    const expectedArray = [2, 10, 10, 314, 488, 488, 8000];
    //2. invoke the function
    const actualArray = index.sort(array);
    // 3. assert the expected vs actual output
    // https://www.chaijs.com/api/bdd/
    expect(actualArray).to.eql(expectedArray);
  });
  it("3. should sort negative integers in acsending order", () => {
    const array = [-7, -235, -488, -8000, -314, -2, -49];
    const expectedArray = [-8000, -488, -314, -235, -49, -7, -2];
    const actualArray = index.sort(array);

    expect(actualArray).to.deep.equal(expectedArray);
  });
  it("4. should sort a combination of positive and negative integers in acsending order", () => {
    // 1. define data inputs
    //2. invoke the functio
    // 3. assert the expected vs actual output
  });
  // WHAT TO DO ABOUT FRACTIONS???
  it("5. should sort floating point numbers in acsending order", () => {
    // 1. define data inputs
    //2. invoke the functio
    // 3. assert the expected vs actual output
  });
  // throw an error if the paramter is not an array
  it("6. should throw an error when the parameter is not an array", () => {
    // 1. define data inputs
    //2. invoke the functio
    // 3. assert the expected vs actual output
  });
  // the returned value should in fact be an array
  it("7. should return a value with the data type of array", () => {
    // 1. define data inputs
    //2. invoke the functio
    // 3. assert the expected vs actual output
  });
  // the returned value should should have the same length as the parameter
  it("8. should return a an array with the same length as the parameter", () => {
    // 1. define data inputs
    //2. invoke the functio
    // 3. assert the expected vs actual output
  });
  it("9. should return an array with only data types of numbers", () => {
    // 1. define data inputs
    //2. invoke the functio
    // 3. assert the expected vs actual output
  });
});
