function factorial(number) {
  if (number < 0) return undefined;
  let total = 1;
  for (let n = number; n > 1; n--) {
    total = total * n;
  }
  return total;
}

function recursiveFactorial(number) {
  if (number === 1 || number === 0) return 1;

  return number * fibonacci(number - 1);
}
