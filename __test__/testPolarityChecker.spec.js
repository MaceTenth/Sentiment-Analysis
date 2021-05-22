// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import "babel-polyfill";

// Import the js file to test
import { getPolarity } from "../src/client/js/formHandler";

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing polarity translation functionality", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.
  test("Testing the getPolarity() function", () => {
    // Define the input for the function, if any, in the form of variables/array
    // Define the expected output, if any, in the form of variables/array
    // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
    // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
    expect(getPolarity("P+")).toBe("strong positive");
  });

  test("Testing the polarityChecker() function", () => {
    expect(getPolarity("P")).toBe("positive");
  });

  test("Testing the polarityChecker() function", () => {
    expect(getPolarity("NEW")).toBe("neutral");
  });

  test("Testing the polarityChecker() function", () => {
    expect(getPolarity("N")).toBe("negative");
  });

  test("Testing the polarityChecker() function", () => {
    expect(getPolarity("N+")).toBe("strong negative");
  });

  test("Testing the polarityChecker() function", () => {
    expect(getPolarity("NONE")).toBe("no sentiment");
  });

  test("Testing the polarityChecker() function", () => {
    expect(getPolarity).toBeDefined();
  });
});
