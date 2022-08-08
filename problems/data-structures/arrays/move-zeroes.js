/**
 * @param {number[]} nums - inetger array
 * @return {number[]} - numbers maintinaing their
 *  order with all zeroes towards the end of the array
 *
 * Question/Clarification
 * - Don't create a copy of the array
 * - Can array be singleton?
 *
 * CHECKS:
 * - singleton array or array with 2 elements ending in zero, or array of zeroes
 *   return array unchanged
 *
 * PROCEURE I:
 * - Create new array for zeros
 * - Loop through array, wherever we see a zero, remove from main
 *   array and add to the zero array
 * - When done, join both arrays
 *
 * PROCEDURE II:
 * - Count the number of zeroes int he array
 * - Loop through array up until
 * - Using JS slice, remove and add a zero for every zero encountered
 */
function moveZeroes(nums) {
  let count = 0;

  for (let i = 0; i< nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      if (count !== i)nums[i] = 0;
      count++;
    }
  }

  return nums;
}

moveZeroes([1]);
// moveZeroes([0, 1]);
// moveZeroes([1, 0]);
// moveZeroes([0, 0, 1, 0, 3, 12]);
// moveZeroes([0, 1, 3, 4, 6, 0, 0, 0, 0, 12]);
