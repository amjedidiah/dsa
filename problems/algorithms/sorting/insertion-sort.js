const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

/**
 * Sorts a list using insertion sort
 * @param {array} nums
 * @return {array} - The sorted list
 */
function insertionSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }


  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[0]) {
      nums.unshift(nums.splice(i, 1)[0]);
    } else if (nums[i] < nums[i-1]) {
      const num = nums.splice(i, 1);
      for (let j = 0; j < i; j++) {
        if (num[0] < nums[j]) {
          nums.splice(j, 0, num[0]);
          break;
        }
      }
    }
  }

  return nums;
}

insertionSort(numbers);
