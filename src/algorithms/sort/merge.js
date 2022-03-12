import { Compare, compare, unsortedArray } from "../../utils";
function merge(left, right, compareFunction) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    result.push(
      compareFunction(left[i], right[j]) === Compare.LESS_THAN
        ? left[i++]
        : right[j++]
    );
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
function mergeSort(array, compareFunction = compare) {
  if (array.length > 1) {
    let middle = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, middle), compareFunction);
    let right = mergeSort(array.slice(middle), compareFunction);
    array = merge(left, right, compareFunction);
  }
  return array;
}
console.log(unsortedArray);
console.log(mergeSort(unsortedArray, compare));
