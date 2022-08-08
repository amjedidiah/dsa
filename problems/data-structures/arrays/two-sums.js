/**
 * TASK:
 * Return the indices of 2 elements that add up to a given
 * target from a set of numbers.
 *
 * QUESTIONS:
 * - Are the numbers sorted?
 * - Are they all positive numbers?
 * - Do numbers occur more than once?
 * - What to return if no indeices were found?
 *
 * PROCEDURE I:
 * - Sort the array in ascending order, if not sorted already
 * - Loop through array, from the first and last, moving in,
 *   till we get a sum or return false
 *
 * PROCEDURE II:
 * - Create a new complements array and a boolean variable,
 *   called found set to false
 * - Create a iterator variable to store the indixes
 * - While found is false, loop through the array and populate complements
 * - Found is true when we encounter a number in the array that is already
 *   part of the complements array
 * - We then return both their indices
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} - add up to target
 */
function twoSums(nums, target) {
  if (nums.length < 2) return [];

  const complements = [];

  for (let i =0; i< nums.length; i++) {
    const firstIndex = complements.indexOf(nums[i]);
    if (complements.length > 0 && firstIndex > -1) {
      return [firstIndex, i];
    } else complements.push(target - nums[i]);
  }

  return [];
}

/* For Sorted Arrays */
const twoSums2 = (nums, target) => {
  if (nums.length < 2) return [];

  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    const sum = nums[low] + nums[high];
    if (sum === target) {
      return [low, high];
    } else if (sum < target) {
      low++;
    } else if (sum > target) {
      high--;
    }
  }

  return [];
};

console.log(twoSums2([1, 1, 2, 3, 4, 4], 8));
console.log(twoSums([3, 2, 4], 6));
