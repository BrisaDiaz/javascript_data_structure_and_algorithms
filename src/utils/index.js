import { shuffle } from "../shuffle/fisherYates";
export const Compare = {
  LESS_THAN: -1,
  EQUALS: 0,
  BIGGER_THAN: 1,
};

export function compare(a, b) {
  return a === b
    ? Compare.EQUALS
    : a > b
    ? Compare.BIGGER_THAN
    : Compare.LESS_THAN;
}

export function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

export function findMaxValue(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

export function findMinValue(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
}
export function lesserOrEquals(a, b, compareFunction = compare) {
  const comp = compareFunction(a, b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}
export function biggerOrEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}

let length = 50;
export const sortedArray = Array.from({ length }, () => length--).reverse();
export const unsortedArray = shuffle(sortedArray);
