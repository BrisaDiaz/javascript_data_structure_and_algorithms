import { Compare, compare, swap, unsortedArray } from "../utils";
function selectionSort(array, compareFunction) {
  const { length } = array;
  let indexMin = 0;

  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (compareFunction(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin);
    }
  }
  return array;
}

console.log(unsortedArray);
console.log(selectionSort(unsortedArray, compare));
