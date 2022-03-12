import { Compare, compare, swap, unsortedArray } from "../utils";

function partition(array, left, right, compareFunction) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (compareFunction(array[i], pivot) === Compare.LESS_THAN) {
      i++;
    }
    while (compareFunction(array[j], pivot) === Compare.BIGGER_THAN) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quick(array, left, right, compareFunction) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right, compareFunction);
    if (left < index - 1) {
      quick(array, left, index - 1, compareFunction);
    }
    if (index < right) {
      quick(array, index, right, compareFunction);
    }
  }
  return array;
}

export function quickSort(array, compareFunction = compare) {
  return quick(array, 0, array.length - 1, compareFunction);
}
