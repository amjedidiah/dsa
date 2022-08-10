const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

/**
 * Returns a sorted array using bubble sort
 * @param {array} nums
 * @return {array} - Sorted array using bubble sort
 */
function bubbleSort(nums) {
  if (nums.length > 1) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] > nums[j]) {
          const holder = nums[j];
          nums[j] = nums[i];
          nums[i] = holder;
        }
      }
    }
  }

  return nums;
}

bubbleSort(numbers);
