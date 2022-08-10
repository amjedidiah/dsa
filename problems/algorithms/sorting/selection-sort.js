const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

/**
 * Sorts a list of numbers using selection sort with recursion
 * @param {array} nums
 * @return {array} - The sorted list
 */
function selectionSort1(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const min = Math.min(...nums);
  nums.splice(nums.indexOf(min), 1);

  return [min].concat(bubbleSort2(nums));
}

/**
 * Sorts a list of numbers using selection sort with iteration
 * @param {array} nums
 * @return {array}
 */
function selectionSort2(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  let min = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j<nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }

    if (nums[min] < nums[i]) {
      const holder = nums[i];
      nums[i] = nums[min];
      nums[min] = holder;
    }
  }

  return nums;
}

selectionSort1(numbers);
selectionSort2(numbers);
