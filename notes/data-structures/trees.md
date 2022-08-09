# Trees

## Examples

                      1
                /     |    \
               2      3     4
                     / \
                    6   7

Root: 1
Parent: 1, 3
Child: 2|3|4, 6|7
Leaf: 2|4|6|7
Siblings: 2|3|4, 6|7

> A node can represent any value

Examples includde: DOM Tree, Abstract Syntax Tree, Linked List(tree with just one single path)

## Difference Between LinkedList & Trees

- Tree nodes don't get/have to reference their parents

## Types

### Binary Tree

- Each node can only have 0 - 2 chidren nodes
- Each child node can only have one parent

#### Perfect Binary Tree

                   1
                /     \
               2       3
              / \     / \
             4   5   6   7

- The number of nodes on one level is 2 times the number of nodes on the previous level
- The number of nodes on one level is equal to the sum of nodes on previous levels plus 1. In other words, half of our nodes is at the last level.
- For each level, the number of nodes is 2^level - 1, where level>= 1
  therefore, log n = 2^h - 1;
  : log n = 2^h

Binary notation: O (log n)

| Operation | Time Complexity |
| --------- | --------------- |
| Insert    | O(log n)        |
| Lookup    | O(log n)        |
| Delete    | O(log n)        |

##### Binary Search Tree

- As we traverse to the right, the nodes increase in value
- As we traverse to the left, the nodes decrease in value
- A node can only have up to 2 children

###### Balanced & Unbalanced Binary Search Tree

Here, a BST becomes unbalanced when as more items are added to the BST, it begins to look more like a linked list.As such, the Big O notation for the above 3 operations: _lookup_, _insert_ & _delete_ becomes `O(n)`.

Ways to balance an unbalanced tree, include:

- AVL Tree
- Red Black Tree

###### Advantages & Disadvantages of BSTs

| Advantages                        | Disadvantages      |
| --------------------------------- | ------------------ |
| Operations are better than `O(n)` | No O(1) operations |
| Flexible size                     |
| Ordered                           |

#### Full Binary Tree

                   1
                /     \
               2       3
              / \
             4   5
                / \
               6   7

- A node either has 0 or 2 children, but never one child

### Heaps

#### Binary Heaps

- 2 children to a node
- Commonly used in `priority queues`, sorting algorithms. FOr instance, the looking for people above a certain age.
- Insertion is from left to right, and as such, they are always balanced
- They can be implemented with arrays instead of linked lists(nodes)

> Memory Heap != Heap Data Structure

| Operation | Time Complexity |
| --------- | --------------- |
| Insert    | O(log n)        |
| Lookup    | O(n)            |
| Delete    | O(log n)        |

##### Max Binary Heaps

- Every child belongs to a parent node that has greater priority or value than the child.
- Hence the root node is the largest node in the heap.

##### Min Binary Heaps

- Every child belongs to a parent node that has lesser priority or value than the child
- Hence the root node is the smallest node in the heap.

###### Advantages & Disadvantages of Binary Heaps

| Advantages                        | Disadvantages |
| --------------------------------- | ------------- |
| Operations are better than `O(n)` | Slow lookup   |
| Insert is by priority             |
| Flexible size                     |
| Fast insert                       |

### Trie / Prefix Tree

- Mostly with text
- Works like auto-completion/auto-suggestion
- Good for Wordle game

#### Advantages & Disadvantages of Tries

| Advantages                                                          | Disadvantages |
| ------------------------------------------------------------------- | ------------- |
| Big O of lookup is `O(length of word)`                              |
| Major advantage for space complexity because of the use of prefixes |

## Resources

- [BST remove method](https://replit.com/@aneagoie/Data-Structures-Trees)

- [AVL Trees Animation](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
- [AVL Trees How It Works](https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7)
- [Red Black Trees Animation](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)
- [Red Black Trees How It Works](https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5)
