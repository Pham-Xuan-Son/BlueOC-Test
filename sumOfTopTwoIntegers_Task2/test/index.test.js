import sumofTopTwoIntegers from "../src";

describe("sumofTopTwoIntegers", () => {
  it("should return 0 for an empty array", () => {
    expect(sumofTopTwoIntegers([])).toBe(0);
  });

  it("should return the only number for an array with one number", () => {
    expect(sumofTopTwoIntegers([5])).toBe(5);
  });

  it("should return the sum of the two numbers from an array with two number", () => {
    expect(sumofTopTwoIntegers([5, 6])).toBe(11);
  });

  it("should return the sum of the top two numbers from an array", () => {
    const list = [1, 4, 2, 3, 5];
    expect(sumofTopTwoIntegers(list)).toBe(9);
  });
  it("should return the sum of the top two biggest same numbers from an array", () => {
    const list = [1, 4, 5, 2, 3, 5];
    expect(sumofTopTwoIntegers(list)).toBe(10);
  });
});
