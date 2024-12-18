const listString = ["a", "ab", "abc", "cd", "def", "gh"];

function stringLengthFrequency(list) {
  if (list.length === 0) return [];
  const lengthFrequency = {};
  for (const string of list) {
    const length = string.length;
    if (length in lengthFrequency) {
      lengthFrequency[length] += 1;
    } else {
      lengthFrequency[length] = 1;
    }
  }
  const maxFrequency = Math.max(...Object.values(lengthFrequency));
  const mostFrequentLength = Object.keys(lengthFrequency).find(
    (length) => lengthFrequency[length] === maxFrequency
  );
  return list.filter((string) => string.length === Number(mostFrequentLength));
}

let a = stringLengthFrequency(listString);
console.log(a);
export default stringLengthFrequency;
