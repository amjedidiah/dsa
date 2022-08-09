/**
 * Returns the factorial of a number using recursion
 * @param {number} num
 * @return {number}
 */
function factorialRecursive(num) {
  if (num === 2) {
    return 2;
  }
  return num * factorialRecursive(num - 1);
}

/**
 * Returns the factorial of a number using iteration
 * @param {number} num
 * @return {number}
 */
function factorialIterative(num) {
  let result = num;

  if (num === 2) {
    return 2;
  }

  while (num > 2) {
    result = result * (num - 1);
    num--;
  }

  return result;
}

factorialRecursive(10);
factorialIterative(5);
