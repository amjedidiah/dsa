/**
 * Given an index, return the number in the fibonacci sequence at that index
 * using iteration
 * @param {number} n
 * @return {number}
 */
function fibonacciIterative(n) {
  if (n <= 1) {
    return n;
  }

  const arr = [0, 1];

  for (i = 2; i <= n; i++) {
    arr.push(arr[i-2], + arr[i-1]);
  }

  return arr[n];
}

/**
 * Given an index, return the number in the fibonacci sequence at that index
 * using recursion
 * @param {number} n
 * @return {number}
 */
function fibonacciRecursion(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}


fibonacciIterative(0);
fibonacciIterative(1);
fibonacciIterative(2);
fibonacciIterative(3);
fibonacciRecursion(4);
fibonacciRecursion(5);
fibonacciRecursion(6);
