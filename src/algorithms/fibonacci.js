function fibonacci(numb) {
  let fibonacci = [];
  fibonacci[1] = 1;
  fibonacci[2] = 1;

  for (let i = 3; i < numb; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
}

function recursiveFibonacci(numb) {
  if (numb < 1) return 0;
  if (numb <= 2) return 1;
  return fibonacci(numb - 1) + fibonacci(numb - 2);
}

function fibonacciMemorization(numb) {
  const memo = [0, 1];
  if (memo[numb] !== undefined) return memo[numb];
  return fibonacci(numb - 1) + fibonacci(numb - 2);
}

console.log(recursiveFibonacci(4));
