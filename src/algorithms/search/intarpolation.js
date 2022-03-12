import { compare, biggerOrEquals, lesserOrEquals, Compare } from "../../utils";

function interpolationSearch(
  array,
  value,
  compareFn = compare,
  equalsFn = (a, b) => a == b,
  diffFn = (a, b) => a - b
) {
  const { length } = array;
  let low = 0;
  let high = length - 1;
  let position = -1;
  let delta = -1;

  while (
    low <= high &&
    biggerOrEquals(value, array[low], compareFn) &&
    lesserOrEquals(value, array[high], compareFn)
  ) {
    delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);
    position = low + Math.floor((high - low) * delta);
    if (equalsFn(array[position], value)) {
      return position;
    }
    if (compareFn(array[position], value) === Compare.LESS_THAN) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }
  return -1;
}
