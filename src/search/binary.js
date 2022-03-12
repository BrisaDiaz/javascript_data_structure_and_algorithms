import { compare, Compare, unsortedArray, lesserOrEquals } from "../utils";
import { quickSort } from "../sort/quick";

function binarySearch(array, value, compareFunction = compare) {
  const sortedArray = quickSort(array);
  let low = 0;
  let high = sortedArray.length - 1;
  while (lesserOrEquals(low, high, compareFunction)) {
    const mid = Math.floor((low + high) / 2);
    const element = sortedArray[mid];
    if (compareFunction(element, value) === Compare.LESS_THAN) {
      low = mid + 1;
    } else if (compareFunction(element, value) === Compare.BIGGER_THAN) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
function recursiveBinarySearch(
  array,
  value,
  low,
  high,
  compareFunction = compare
) {
  const sortedArray = quickSort(array);

  if (lesserOrEquals(low, high)) {
    const mid = (low + high) / 2;
    const element = sortedArray[mid];
    if (compareFunction(element, value) === Compare.LESS_THAN) {
      return recursiveBinarySearch(array, value, mid + 1, high);
    } else if (compareFunction(element, value) === Compare.BIGGER_THAN) {
      return recursiveBinarySearch(array, value, low, mid - 1);
    } else {
      return mid;
    }
    return -1;
  }
}
console.log(binarySearch(unsortedArray, 15, compare));
