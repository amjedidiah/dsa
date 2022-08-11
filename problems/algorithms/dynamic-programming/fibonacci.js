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

const fib = memoize((n) => {
  if (n<2) {
    return n;
  }

  return fib(n-1) + fib(n-2);
});

fib(10);


