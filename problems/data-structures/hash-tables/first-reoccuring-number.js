/**
 * @param {number[]} nums
 * @return {number} - The first reoccuring number
 *
 * QUESTIONS
 * - Are there +ve and -ve nums?
 * - If yes, are +ve and -ve numbers the same?
 * - What time complexity are we looking for?
 *
 * EDGE CASES
 * - if nums.length < 2, return undefined
 *
 * PROCEDURE I
 * - Create freq hash table
 * - Loop through array
 *  - if num in freq hash table return num
 *  - else add value to freq hash table with key: num, value: 1
 * - return undefined at the end
 *
 * PROCEDURE II
 * - Create freq array
 * - Loop through array
 *  - if num in freq array return num
 *  - else add value to freq array
 * - return undefined at the end
 *
 * PROCEDURE III & IV
 * - Create unique array using, .filter() or [...new Set(nums)]
 * - If length is same as nums, run either PROC I or II
 *
 */
function firstReoccuringNumber(nums) {
  const frequency = {};

  if (nums.length > 1) {
    for (let i = 0; i < nums.length; i++) {
      if (frequency[nums[i]]) {
        return nums[i];
      }
      frequency[nums[i]] = 1;
    }
  }

  return undefined;
}

// firstReoccuringNumber([2, 5, 1, 2, 3, 5, 1, 2, 4]);
// firstReoccuringNumber([2, 1, 1, 2, 3, 5, 1, 2, 4]);
// firstReoccuringNumber([2, 3, 4, 5]);
firstReoccuringNumber([2]);
