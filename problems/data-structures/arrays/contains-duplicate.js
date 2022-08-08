/**
 * @param {number[]} nums
 * @return {boolean} - if any value appears twice in the array
 *
 * TASK:
 * Given an array, return a boolean that denotes if any value appears twice
 *
 * QUESTIONS
 *
 * CHECKS
 * - if array length is less than 2, return array
 *
 * PROCEDURE I
 * - Create new array
 * - Loop through array
 * - Add values to new array if value isn't there already, else, return true
 * - Return false in the end
 *
 * PROCEDURE II
 * - Create object, to store value and frequency,
 * - Loop through array updating value and frequency
 * - If frequency is already 1, return true
 * - Return false in the end
 *
 */
function containsDuplicate2(nums) {
  if (nums.length < 2) return false;
  const frequencies = {};

  for (let i = 0; i < nums.length; i++) {
    if (frequencies[nums[i]]) return true;
    frequencies[nums[i]] = 1;
  }

  return false;
}

containsDuplicate2([1, 2, 3, 1]);
containsDuplicate2([1, 2, 3, 4]);
containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
