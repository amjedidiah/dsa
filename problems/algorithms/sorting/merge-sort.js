const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

/**
 * Returns a sorted list using merge sort
 * @param {array} nums
 * @return {array}
 */
function mergeSort(nums) {
  const length = nums.length;

  if (length <= 1) {
    return nums;
  }

  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merges 2 unsorted lists into a sorted list
 * @param {array} left
 * @param {array} right
 * @return {array}
 */
function merge(left, right) {
  const arr = [];

  while (left.length || right.length) {
    const numToPush =
      left[0] < right[0] || right[0] === undefined ?
        left.shift() :
        right.shift();
    arr.push(numToPush);
  }

  return arr;
}

mergeSort(numbers);
