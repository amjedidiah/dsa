# Dynmamic Programming

This is a way of solving problem by breaking it down into sub-problems, solving those sub-problems just once and storing their solutions, incase they are needed again.

> A big concept in dynamic programming is _caching_

## Caching

- This is a method of storing values that can be used later on
- Benefits include speed of execution
- Memoization is a specific form of caching used a lot in memoization

### Memoization

- Memoization is caching the returned values for a function based on a parameter, so that if the function is run again with the same parameter, we avoid running the function again and just access and return the cached value

- Memoization uses _CLosures_ to avoid having to store the results of a function in the global scope. For instance:

```js
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn(...args);
    cache[args] = result;
    return result;
  };
};
```

- Memoization can move our time complexity calculations from `O(2^n)` to `O(n)`

> Memoize when we have recursive functions that run for the same value multiple times

## Bottom-Up Approach

- This is another way to do _dynamic programming_

```js
const fib = (n) => {
  const fibArr = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }

  return fibArr[n];
};
```
