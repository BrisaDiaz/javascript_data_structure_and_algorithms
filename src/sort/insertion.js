import { Compare, compare, unsortedArray } from "../utils";
export function insertionSort(array, compareFunction = compare) {
  const { length } = array;

  for (let i = 1; i < length; i++) {
    let j = i;
    let temp = array[i];
    while (
      j > 0 &&
      compareFunction(array[j - 1], temp) === Compare.BIGGER_THAN
    ) {
      array[j] = array[j - 1];
    }
    array[j] = temp;
  }
  return array;
}

console.log(unsortedArray);
console.log(insertionSort(unsortedArray, compare));
