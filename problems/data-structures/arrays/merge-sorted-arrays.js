/**
 * TASK:
 * Takes in two sorted arrays and returns 1 array that is a
 * combination of the 2 arrays and is still sorted.
 *
 * QUESTIONS:
 * - Array of strings or numbers?
 * - Sorted in ascendin gor descending order?
 * - Result should be sorted in ascending or descending order?
 * - What should happen for duplicate values, should they appear only once
 *   in result or same as they are in params?
 *
 * CHECKS:
 * - If either array is empty
 *
 * PROCEDURE 1:
 * - Combine arrays using JS spread operator
 * - Sort in ascending order using JS array sort method
 *
 * PROCEDURE 2:
 * - Create a new array to store the results
 * - Starting with the first values in the 2 arrays, compare and add
 *   them to resulting array using sub procedure
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// function mergeSortedArrays(arr1, arr2) {
//   if (arr1.length === 0) return arr2;
//   if (arr2.length === 0) return arr1;

//   const resultArr = [];

//   let arr1Item = arr1[0];
//   let arr2Item = arr2[0];
//   let i = 1;
//   let j = 1;


//   const addToResultArr = () => {
//     if (!arr2Item || arr1Item < arr2Item) {
//       resultArr.push(arr1Item);
//       arr1Item = arr1[i];
//       i++;
//     } else {
//       resultArr.push(arr2Item);
//       arr2Item = arr2[j];
//       j++;
//     }
//   };

//   while (arr1Item || arr2Item) addToResultArr();

//   return resultArr;
// }

const mergeSortedArrays2 = (arr1, arr2) =>
  [...arr1, ...arr2].sort((a, b) => a - b);

mergeSortedArrays2([0, 1, 2, 4, 7], [1, 3, 6, 7, 9]);
