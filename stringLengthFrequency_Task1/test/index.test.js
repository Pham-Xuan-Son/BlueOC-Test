import stringLengthFrequency from "../src";

describe("stringLengthFrequency", () => {
  it("should return an empty array when the list is empty", () => {
    const result = stringLengthFrequency([]);
    expect(result).toEqual([]);
  });

  it("should return the correct strings with the most frequent length", () => {
    const list = ["a", "ab", "abc", "cd", "def", "gh"];
    const result = stringLengthFrequency(list);
    expect(result).toEqual(["ab", "cd", "gh"]);
  });

  it("should return the correct strings when only one string of the most frequent length", () => {
    const list = ["a", "ab", "abc", "abcd"];
    const result = stringLengthFrequency(list);
    expect(result).toEqual(["a"]);
  });
});
