# Hash Tables

## Hash Function

A function that generates a value of fixed length for each input it gets. i.e. it is `idempotent`.

- It is one-way
- It always returns the same for the same input
- It is fast, with Big O notation of `O(1)`

> SHA-256 is a hash function that takes a longer time to generate a hash for a given input. It is mostly used in cryptography.

## Big O Notation

| Operations | Big O Notation | Collision |
| ---------- | -------------- | --------- |
| Lookup     | O(1)           | O(n)      |
| Search     | O(1)           |
| Insert     | O(1)           | O(n)      |
| Delete     | O(1)           |

## Problem with Hash Tables: Buckets & Collisions

Hash functions don't always store the hash for each input in a unique memory address.
Hence, sometimes the same memory address(bucket) is used to store multiple hashes. This is called a `collision`, which results to a `linked list`, slowing down our ability to access or insert information into the hash table.

## JS Hash Table Types

| Objects                           | Map                                                         | Sets                                                        |
| --------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| key-value pair                    | key-value pair                                              | Stores only key                                             |
| Only strings are allowed as keys  | Any type of data type is allowed as key                     | Any type of data type is allowed as key                     |
| Does not maintain insertion order | Maintains insertion order, making it faster to loop through | Maintains insertion order, making it faster to loop through |

## Advantages & Disadvantages

| Advantages    | Disadvantages                                         |
| ------------- | ----------------------------------------------------- |
| Fast lookups  | But at the cost of memory(scattered memory locations) |
| Fast inserts  | Unordered                                             |
| Flexible keys | Slow key iteration                                    |
