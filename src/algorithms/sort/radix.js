import { unsortedArray } from "../../utils";

const getNum = (num, index) => {
  const strNum = String(num);
  let end = strNum.length - 1;
  const foundNum = strNum[end - index];

  if (foundNum === undefined) return 0;
  else return foundNum;
};

const largestNum = (array) => {
  let largest = "0";

  array.forEach((num) => {
    const strNum = String(num);

    if (strNum.length > largest.length) largest = strNum;
  });

  return largest.length;
};
const radixSort = (array) => {
  let maxLength = largestNum(array);

  for (let i = 0; i < maxLength; i++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < array.length; j++) {
      let num = getNum(array[j], i);

      if (num !== undefined) buckets[num].push(array[j]);
    }

    array = buckets.flat();
  }
  return array;
};
console.log(radixSort(unsortedArray));
