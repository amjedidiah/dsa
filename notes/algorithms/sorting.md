# Sorting

- Custom sorting algorithms become important when we need to sort a large amount of data.

> The time and space complexity of language specific sorting algorithm cannot be guaranteed as it is implementation dependent. For JavaScript, the type of sorting algorithm used is dependent on the engine being used (V8, SpiderMonkey, etc).

## Sorting Algorithms

### Comparison Sorting Algorithms

#### Elementary Comparison Sorting Algorithms

##### Bubble Sort

- One of the simplest sorting algorithms.
- Iterates over a list of elements and compares each pair of adjacent elements over and over again until the desired sort is achieved.
- Time Complexity:
  -- Worst case: O(n^2)
  -- Best case: O(n)
- Space Complexity: O(1)

> Never to be used

##### Selection Sort

- Iterates over a list of elements and finds the smallest element in the list. Then, it swaps the smallest element with the ith element in the list, where i starts from 0. It goes on until the list is sorted.
- Time Complexity
  -- Worst case: O(n^2)
  -- Best case: O(n^2)
- Space Complexity: O(1)

> Never to be used

##### Insertion Sort

- Best for sorted and almost sorted arrays
- Iterates over a list of elements and inserts each element into the correct position in the list.
- Time Complexity:
  -- Worst case: O(n^2)
  -- Best case: O(n)
- Space Complexity: O(1)

> Best for small lists.

#### Complex Comparison Sorting Algorithms

##### Merge Sort

- Uses divide and conquer as well as recursion to sort a list.
- Time Complexity:
  -- Worst case: O(n log n)
  -- Best case: O(n log n)
- Space Complexity: O(n)

> Best for large lists where space is not an issue.

##### Quick Sort

- Uses divide and conquer as well as recursion to sort a list.
- Quick sort uses pivots and the pivots usually is the last item in the list. It is however best to pick a number that is around the middle of the sorted list.
- Time Complexity:
  -- Worst case: O(n^2)
  -- Best case: O(n log n)
- Space Complexity: O(log n)

> Best for large lists where space is an issue.

##### Heap Sort

- Uses a heap data structure to sort a list.
- Averagely slower than _Quick Sort_
- Time Complexity:
  -- Worst case: O(n log n)
  -- Best case: O(n log n)
- Space Complexity: O(1)

> Second best for large lists where space is an issue.

### Non-comparison Sorting Algorithms

> These are best for small list of **_integers_**, only fixed length integers, ranging between 0 and 100.

#### Radix Sort

- Sorts a list of numbers by digits.
- Time Complexity:
  -- Worst case: O(nk)
  -- Best case: O(nk)
- Space Complexity: O(n+k)

#### Counting Sort

- Sorts a list of numbers by digits.
- Time Complexity:
  -- Worst case: O(n+k)
  -- Best case: O(n+k)
- Space Complexity: O(k)

## Engines & Their Sorting Algorithms

- V8: Quick sort and insertion sort for smaller arrays
- Mozilla: Merge sort

## Resources

- [ ] [Array Sort Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

- [ ] [Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)

- [ ] [Sorting Dancing Videos](https://www.youtube.com/user/AlgoRythmics/videos)
