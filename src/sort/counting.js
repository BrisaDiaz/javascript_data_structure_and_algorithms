import { findMaxValue, unsortedArray } from "../utils";

function countingSort(array) {
  if (array.length < 2) return array;

  const maxValue = findMaxValue(array);
  const counts = new Array(maxValue + 1);
  counts.forEach((element) => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });
  let sortedIndex = 0;

  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex++] = i;
    }
  });
  return array;
}

console.log(unsortedArray);
console.log(countingSort(unsortedArray));
