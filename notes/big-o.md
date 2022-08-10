# Notes

> Basically describes how well a program solves a problem.
> [Big O Cheatsheet](https://zerotomastery.io/cheatsheets/big-o-cheat-sheet?utm_source=udemy&utm_medium=coursecontent)

## What Is Good Code?

1. Readable
2. Scalable: **_speed_**(time complexity) and **_memory_**(space complexity)

## Big O and Scalability

1. Use `performance.now()` to measure how long it takes to run a function in milliseconds. This is not as efficient as Big O though, given different hardware, the operations they are currently running and the fact that the result is never constant.

> Big O notation is the language used to talk about how long a program takes to run. With increasing elements, how many operations does it take to complete a program?

## Big O Notations

### O(1) - Constant Time - excellent

Plotting a graph of `operations` against `elements` results in a constant graph, meaning as more elements are added, the number of operations remains the same, whether 1 or 100, resulting in `O(1)`.

### O(log n) - Logarithmic Time - good

For each level of a Perfect Binary Tree, the number of nodes is 2^level - 1, where level>= 1
therefore, n = 2^h - 1;
: n = 2^h ... 1 is insignificant
: Log n = h ... to base 2

Resulting to O(log n). This is `divide and conquer`

### O(n) - Linear Time - fair

Plotting a graph of `operations` against `elements` results in a linear graph, meaning as more elements are added, the number of operations increases, resulting in `O(n)`.

### O(n log n) - Logarithmic Time - fair

### O(n^2) - Quadratic Time - poor

Plotting a graph of `operations` against `elements` results in a quadratic graph, meaning as more elements are added, the number of operations equals the sqaure of the elements, resulting in `O(n^2)`.

```js
//log all the pairs in an array
const pairs = [1, 2, 3, 4, 5];

pairs.forEach((pair) => pairs.forEach((pair2) => console.log(pair, pair2)));
```

### O(2^n) - Exponential Time - horrible

Plotting a graph of `operations` against `elements` results in an exponential graph, meaning as more elements are added, the number of operations increases exponentially, resulting in `O(2^n)`. This is common in algorithms that are based on recursion.

### O(n!) - Factorial Time / Oh no! - terrible

Adds a nested loop for every input element resulting in `O(n!)`.

## Big O Rules

### Rule 1: Best & Worst case

> We always care about the worst case scenario when counting operations

```js
const names = ["John", "Jane", "Nemo", "Mary", "Bob", "Tom"];

const findingNemo = () => {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === "Nemo") {
      return "Found Nemo";
    }
  }
};

// Worst case here is that Nemo is the last element in the array, and as such takes 6 iterations to find Nemo. As such the Big O notation is O(n)
```

### Rule 2: Remove constants

```js
function compressBoxes(boxes) {
  boxes.forEach((box) => console.log(box)); // O(n)
  boxes.forEach((box) => console.log(box)); // O(n)
}

// O(n \* 100000000000) = O(n);
// O(n + 100000000000) = O(n);
//  As such, the big O notation for the above is is O(n + n) = O(2n) = O(n)
```

### Rule 3: Different terms for inputs

```js
function compressBoxes(boxes1, boxes2) {
  boxes1.forEach((box) => console.log(box)); // O(m)
  boxes2.forEach((box) => console.log(box)); // O(n)
}

//  As such, the big O notation for the above is is O(m + n)
```

```js
function compressBoxes(boxes1, boxes2) {
  boxes1.forEach((box) => console.log(box)); // O(m)
  boxes2.forEach((box) => console.log(box)); // O(n)
}

function compressBoxes(boxes1, boxes2) {
  boxes1.forEach((box) =>
    boxes2.forEach((boxAgain) => console.log(box, boxAgain))
  );
}

//  As such, the big O notation for the above is is O(m * n)
```

### Rule 4: Drop Non-dominant terms

For a function that has a Big O of `O(n^2 + 999999n + 534832909n)`, the resolute Big O notation becomes `O(n^2)`, because when n is a very large number, the other terms are insignificant.

## Resources

[ ] [Big O Omega & Theta Notations](https://www.quora.com/What-is-the-difference-between-big-oh-big-omega-and-big-theta-notations)

[ ][big o cheatsheet](/big-o/big-o-cheatsheet.pdf)

[ ][ztm big o cheatsheet](/big-o/big-o-cheatsheet_ztm.pdf)
