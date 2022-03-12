import { insertionSort } from "./insertion";
import { unsortedArray } from "../../utils";

function bucketSort(array, bucketSize) {
  if (array.length < 2) return array;

  const buckets = createBuckets(array, bucketSize);

  return sortBuckets(buckets);
}

function createBuckets(array, bucketSize) {
  let minValue = array[0];
  let maxValue = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  const bucketsCount = Math.floor((maxValue - minValue) / bucketSize) + 1;

  const buckets = new Array(bucketsCount);

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }
  let bucketIndex;
  array.forEach(function (currentVal) {
    bucketIndex = Math.floor((currentVal - minValue) / bucketSize);
    buckets[bucketIndex].push(currentVal);
  });

  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(array[i]);
  }
  return buckets;
}
function sortBuckets(buckets) {
  const sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] !== null) {
      sortedArray.push(insertionSort(buckets[i]));
    }
  }
  return sortedArray;
}

console.log(unsortedArray);
console.log(bucketSort(unsortedArray, 3));
