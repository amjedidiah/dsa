# Recursion

- A function calling itself repeatedly

## Stack Overfllow

- A recursive function without a _base case_ or _stop point_ will cause a stack overflow

## Undefined Behavior

```js
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
  /*
    The return keyword here ensures we return the correct value.
    If we don't put it there, the function will return undefined.
    */
}

factorial(10);
```

## Advantages & Disadvantages of Recursion

| Advantages  | Disadvantages |
| ----------- | ------------- |
| DRY         | Large stack   |
| Readability |

> `Tail Call Optimization` allows Recursion to be called in a single stack frame.

## When To use Recursion

- BFS
- DFS
- Every time you are using a tree or converting something into a tree, i.e Tree/graph traversal
- Divide & Conquer
- Merge sort
- Quick sort
