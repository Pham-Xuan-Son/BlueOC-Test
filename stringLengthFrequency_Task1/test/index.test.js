import stringLengthFrequency from "../src/index.js";

describe("stringLengthFrequency", () => {
  it("should return an empty string when the list is empty", () => {
    const result = stringLengthFrequency([]);
    expect(result).toBe("Empty string");
  });

  it("should return the correct strings with the most frequent length", () => {
    const list = ["a", "ab", "abc", "cd", "def", "gh"];
    const result = stringLengthFrequency(list);
    expect(result).toEqual(["ab", "cd", "gh"]);
  });

  it("should filter out non-string elements", () => {
    const list = ["a", 123, "abc", true, "cd", "def", "gh"];
    const result = stringLengthFrequency(list);
    expect(result).toEqual(["cd", "gh"]);
  });

  it("should return the correct strings when only one string of the most frequent length", () => {
    const list = ["a", "ab", "abc", "abcd"];
    const result = stringLengthFrequency(list);
    expect(result).toEqual(["a"]);
  });
});
