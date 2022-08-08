/**
 * Takes in a string and returns the reversed string
 * CHECKS:
 * - If string exists
 *
 * PROCEDURE I:
 * - Create a new variable, the result to return
 * - Loop through the string from the last item, and add each character
 *   to the new variable
 * - Return the result
 *
 * PROCEDURE II:
 * - Convert string to array using JS spread operator
 * - Reverse array using JS reverse array method
 * - Convert array to string using JS join method
 * @param {string} str
 * @return {string} reverse
 */
// function reverseString(str) {
//  if (str.length < 2) return str;
//   let result = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }

//   return result;
// }

const reverseString2 = (str) => [...str].reverse().join('');

reverseString2('I am a pretty boy');
