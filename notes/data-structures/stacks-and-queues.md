# Stacks & Queues

- These are built from less complex data structures like arrays and linked lists.
- They are then assigned methods that limit data access to just the top of the stack or the front of the queue and data input to the top of the stack or the end of the queue, such as push and pop.

## Stacks(LIFO)

### Example of Stacks

- A stack of plates
- Browser history
- Undoing an action in a word processor

### Methods of Stacks

| Method | Description                            | Big O Notation |
| ------ | -------------------------------------- | -------------- |
| push   | Add an element to the top of the stack | O(1)           |
| pop    | Remove the top element of the stack    | O(1)           |
| peek   | Return the top element of the stack    | O(1)           |
| lookup | Return the element at the given index  | O(n)           |

## Queues(FIFO)

### Example of Queues

- A queue of people waiting to be served
- A print queue

### Methods for Queues

| Method  | Description                            | Big O Notation |
| ------- | -------------------------------------- | -------------- |
| enqueue | Add an element to the end of the queue | O(1)           |
| dequeue | Remove the first element of the queue  | O(1)           |
| peek    | Return the first element of the queue  | O(1)           |
| lookup  | Return the element at the given index  | O(n)           |

### Why Arrays are Inefficient for Building Queues

- Arrays are inefficient for building queues because the Big O notation to remove an item from the front of an array is `O(n)`, when it should be `O(1)`, as it is with queues.

## How JS Works

### Memory Heap

- The memory heap is a data structure that stores all the data in the program.

#### Memory Leaks

Results from having unused variables in the global scope. Hence, why it is said that global variables are bad.

### Call Stack

- Reads and executes our code

#### Recursion

- A function calling itself

## Advantages & Disadvantages

| Advantages      | Disadvantages |
| --------------- | ------------- |
| Fast operations | Slow lookup   |
| Fast peeks      |
| Ordered         |
