# Linked Lists

- A singly linked lists containes a set of nodes having:

  - a value
  - a pointer to the next node

- The first node in the linked list is called the `head` node, while the last node is called the `tail` node.

- Linked lists are null terminated, meaning that the tail node's pointer is `null`.

- A linked list could be sorted or unsorted

- A linked list could contain any data type

> JS does not have linked lists

## Benefits of Linked Lists Over Arrays

- Traversing through a linked list and an array are both `O(n)`, but it is slower in linked list because elemnets are stored in non-sequential memory addresses unlike in arrays where memories are stored in sequential memory addresses, making it possible to cache the memory address of subsequent elements

- Adding and deleting from linked lists is `O(n)`, just like in arrays, but it is faster in linked lists because with linked lists, we don't have to reassign indexes.

## Benefits of Linked Lists Over Hash Maps

- We can have sorted data, as one node points to the other

## Big O Notation

| Operations | Big O Notation |
| ---------- | -------------- |
| Lookup     | O(n)           |
| Prepend    | O(1)           |
| Append     | O(1)           |
| Insert     | O(n)           |
| Delete     | O(n)           |

> JS is garbage collected, i.e it manages memory for us, deleting unused memory.

## Compare Single Linked List vs Doubly Linked List

| Single List                         | Doubly                                          |
| ----------------------------------- | ----------------------------------------------- |
| Links only forward to the next node | Links forward and backward to surrounding nodes |
| Uses less memory                    | Uses more memory                                |
| Lookup is slower                    | Lookup is faster as can happen from both sides  |

## Advantages & Disadvantages

| Advantages      | Disadvantages            |
| --------------- | ------------------------ |
| Fast Insertions | Slow lookup              |
| Fast Deletions  | More memory              |
| Ordered         | Scattered memory storage |
| Flexible size   |

## Examples

- File system
- Browser history
