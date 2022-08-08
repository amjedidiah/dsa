/**
 * TASK:
 * Return the largest sum of a contiguous subarray
 *
 * QUESTIONS:
 * - Are inetgers negative and positive, only negative or only positive?
 * - Are integers repeated?
 * - Is array sorted?
 * - Can array be empty or have single element?
 *
 * CHECK:
 * - If array is empty or has single element, return undefined or single element
 *
 * @param {number[]} nums - ineterger array
 * @return {number} - largest sum
 */
function maximumSubArray(nums) {
  if (nums.length < 2) return nums[0];

  let maxSoFar = nums[0];
  let maxTillNow = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxTillNow = Math.max(nums[i], maxTillNow+nums[i]);
    maxSoFar = Math.max(maxSoFar, maxTillNow);
  }

  return maxSoFar;
}

/**
 * TASK:
 * Return the indices giving the largest sum of a contiguous subarray
 *
 * QUESTIONS:
 * - Are inetgers negative and positive, only negative or only positive?
 * - Are integers repeated?
 * - Is array sorted?
 * - Can array be empty or have single element?
 *
 * CHECK:
 * - If array is empty or has single element, return undefined or single element
 *
 * @param {number[]} nums - ineterger array
 * @return {number[]} - indices giving largest sum
 */
function maximumSubArray2(nums) {
  if (nums.length < 2) return nums[0];

  let maxSoFar = nums[0];
  let maxTillNow = nums[0];
  let start = 0;
  let end = 0;
  let s = 0;

  for (let i = 1; i < nums.length; i++) {
    if (maxTillNow+nums[i] < nums[i]) {
      s = i;
    }

    maxTillNow = Math.max(nums[i], maxTillNow+nums[i]);

    if (maxSoFar < maxTillNow) {
      maxSoFar = maxTillNow;
      start = s;
      end = i;
    }
  }

  return [start, end];
}

maximumSubArray([-2, -3, 4, -1, -2, 1, 5, -3]);
maximumSubArray2([-2, -3, 4, -1, -2, 1, 5, -3]);
maximumSubArray2([-2, 1]);
