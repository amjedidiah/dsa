# Possible Interview Questions

1. Reverse a linked list
2. Which is best to implement a stack: array or linked list?
3. Which is best to implement a queue: array or linked list?
4. How does JS work?
5. What is the difference between `asynchronous` and `synchronous`?

   - Syncronous: The code is executed in the order it is written, and the next line doesn't start until the previous line is finished.

6. Explain the statement: _JS is a single threaded language that can be non-blocking_?

   - Single-threaded: only one call stack(FILO)
   - Disadvantage of multi-threaded programming: _deadlock_

7. Benefits of using either linked list or array for stacks
8. Why is BST better than Hash Table?

   - BST preserves relationships

9. What is stability in sorting algorithms and why is it important?

   - [Answer](https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important)

10. What algorithm is best to use to sort an array?

- If it is sorted, divide and conquer with _Binary Search_ which has time complexity of `O(log n)`.
- If it is not sorted:
  - If yes, same as above
  - If no, then _Linear Search_: `O(n)`
- If it's made up of text, see if the Trie data structure will help
