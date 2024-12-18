const listNumer = [1, 4, 2, 3, 5];
function sumofTopTwoIntegers(list) {
  if (list.length === 0) return 0;
  if (list.length === 1) return list[0];
  if (list.length === 2) return list[0] + list[1];
  const sortedArray = list.sort((a, b) => b - a);
  const twoBiggestNumbers = sortedArray.slice(0, 2);
  return twoBiggestNumbers[0] + twoBiggestNumbers[1];
}

let a = sumofTopTwoIntegers(listNumer);
console.log(a);

export default sumofTopTwoIntegers;
