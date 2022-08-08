# Arrays

| JS Methods | Big O Notation | Explanation                                             |
| ---------- | -------------- | ------------------------------------------------------- |
| Push       | O(1)           | -- add to end of array                                  |
| Pop        | O(1)           | -- remove from end of array                             |
| Unshift    | O(n)           | -- add to beginning of array, and rearrange array       |
| Splice     | O(n)           | -- remove from and/or add to array, and rearrange array |

## Array Types

### Static Arrays

Memory is fixed for the set amount of elements declared when the array was created.

| Operations | Big O Notation |
| ---------- | -------------- |
| Lookup     | O(1)           |
| Push       | O(1)           |
| Insert     | O(n)           |
| Delete     | O(n)           |

### Dynamic Arrays

Memory expands as more elements are added to the array.

| Operations | Big O Notation |
| ---------- | -------------- | ------------------------------------- |
| Lookup     | O(1)           |
| Append     | O(1) or O(n)   | -- copies array before adding element |
| Insert     | O(n)           |
| Delete     | O(n)           |

## Advantages & Disadvantages

| Advantages    | Disadvantages |
| ------------- | ------------- |
| Fast lookups  | Slow inserts  |
| Fast push/pop | Slow deletes  |
| Ordered       | Fixed size\*  |

## Further Reading

[ ] [Var vs Let vs Const](https://dev.to/sethusenthil/var-vs-let-vs-const-1cgc)

[ ] Reference Types

[ ] Context vs. Scope

[ ] Instantiation
