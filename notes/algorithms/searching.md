# Searching

## Types of Search

### Linear/Sequential Search

- A method of finding a targeted value in a list sequentially
- Time Complexity
  -- Worst case: O(n)
  -- Best case: O(1)
- Space Complexity: O(1)

- Example methods: `indexOf`, `find`, `findIndex`, `includes`

### Binary Search

- Divide or conquer search algorithm
- Continuously splits list in half until target is found
- Time Complexity
  -- Worst case: O(log n)
  -- Best case: O(1)
- Space Complexity: O(1)

> Best for sorted lists

### Breadth First Search (BFS)

- Explores each node in a graph layer by layer, from the root to the leaves, from left to right.
- Uses extra memory cause it track children node of all the nodes on a given level while searching that level.

```js
/**
 *        9
 *   4          20
 * 1   6     15    170
 * BFS[9, 4, 20, 1, 6, 15, 170]
 */
```

> Best to use when the value we're looking for is the towards the top of the tree/graph

#### Advantages & Disadvantages of BFS

| Advantages                                             | Disadvantages |
| ------------------------------------------------------ | ------------- |
| Shortest path for non-weighted graphs.e,g: Google Maps | More memory   |
| Closer nodes                                           |

### Depth First Search (DFS)

- Follows one branch of the tree down to as many levels as possible until target node is found or end is reached. If end is reached, it backtracks, to continue at the nearest ancestor with an unexplored branch.
- Uses less memory than BFS, because it is not necessary to track children node of all the nodes on a given level while searching that level.

```js
/**
 *        9
 *   4          20
 * 1   6     15    170
 * DFS[9, 4, 1, 6, 20, 15, 170]
 */
```

> Best to use when the value we're looking for is the towards the bottom of the tree/graph. Backtracking in DFS makes it suitable to use to solve mazes

#### Advantages & Disadvantages of DFS

| Advantages                               | Disadvantages                     |
| ---------------------------------------- | --------------------------------- |
| Lesser memory                            | Can get slow as graph gets deeper |
| Best to use to answer _Does Path Exist?_ |

### Dijkstra & Bellman-Ford Algorithms

- Best to determine shortest path for weighted graphs

> Bellman-Ford's is better because it can calculate also for negative weigths while Dijkstra can't. However, Dijkstra's has better time complexity than Bellman-Ford's

## Resources

- [ ] [Space & Time Complexity of DFS & BFS](https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr)

- [ ] [Finding The Shortest Path With A Little Help From Dijkstra](https://medium.com/basecs/finding-the-shortest-path-with-a-little-help-from-dijkstra-613149fbdc8e)
