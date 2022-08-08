/* eslint-disable require-jsdoc */
/**
 * @param {number[]} nums
 * @param {number} k - non negative
 * @return {number[]} - array rotated to the right by k steps
 *
 * QUESTIONS
 * - Can k be 0?
 *
 * CHECKS
 * - If k is 0, while loop solves this.
 *
 * PROCEDURE I
 * - Using a loop, add to beginning of the array the last element, while k is greater than 0.
 *
 * CONCERN I: Loop
 * - Use a for loop
 * - Use a while loop - Handles k=0
 *
 * CONCERN II: Methods
 * - Unshift & pop
 * - Splice
 *
 * PROCEDURE II
 * - Split array into 2 parts based on k value
 * - Join back the two arrays, switching their places
 *
 * CONCERNS
 * - If k === nums.length OR k === 0, return array
 */
function rotateArray(nums, k) {
  while (k > 0) {
    nums.unshift(nums.pop());
    k--;
  }
  return nums;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function rotateArray2(nums, k) {
  const size = nums.length;

  if (k === 0 || k === size) return nums;

  const dividePoint = size - k;

  nums = [...nums.slice(dividePoint, size), ...nums.slice(0, dividePoint)];

  return nums;
}

// BEST TIME
function rotateArray3(nums, k) {
  const size = nums.length;
  const remainder = k%size;
  if (k === 0 || size <= 1 || remainder === 0) return nums;

  const stack = [];
  for (let i = 0; i < remainder; i++) stack.push(nums.pop());

  if (nums.length > 1) nums.reverse();
  for (let i = 0; i < stack.length; i++) nums.push(stack[i]);
  return nums.reverse();
}

// push, pop,

rotateArray3([1, 2, 3, 4, 5, 6, 7], 3);
// rotateArray3([-1, -100, 3, 99], 2);
// rotateArray3([1, 2], 3);
// rotateArray3([1, 2], 2);
