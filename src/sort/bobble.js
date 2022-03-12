import { Compare, compare, swap, unsortedArray } from "../utils";
function bobbleSort(array, compareFunction) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFunction(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

console.log(unsortedArray);
console.log(bobbleSort(unsortedArray, compare));
