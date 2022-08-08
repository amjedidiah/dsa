/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
/**
 * @param {string} sen
 * @return {string} - longest word in sen void of puntuations
 *
 * QUESTIONS
 * - If 2 or more longest words, return first longest word
 * - Ignore punctuations
 * - `sen` is never empty
 * - Words contain numbers
 *
 * EDGE CASES
 * - No space, return sen, without punctuations
 *
 * PROCEDURE I
 * - Set variables, for current and longest words
 * - Loop through `sen`
 *  - if space, reset:
 *      - update longest word if length of current is greater
 *      - set current word to empty
 *  - if string/number
 *      - update current word
 *
 * PROCEDURE II
 * - Filter for punctuations before loop in PROCEDURE I
 *
 * PROCEDURE III
 * - Split words into array at " ";
 * - Set longest variable
 * - For each word:
 *  - get length and update longest only if current is greater than longest
 * - Return longest word in array
 */
function longestWord(sen) {
  const isStringOrNumber = (char) => char.match(/[0-9A-Za-z]/);

  if (!sen.includes(' ')) return [...sen].filter(isStringOrNumber).join('');

  let current = '';
  let longest = '';

  for (let i = 0; i < sen.length; i++) {
    const char = sen[i];

    if (isStringOrNumber(char)) current += char;

    if (char === ' ' || i === sen.length - 1) {
      if (longest.length < current.length) longest = current;
      current = '';
    }
  }

  return longest;
}
const longestWord3 = (sen) =>
  sen.split(' ').reduce((acc, item) => {
    const filtered = [...item]
        .filter((char) => char.match(/[0-9A-Za-z]/))
        .join('');
    return filtered.length > acc.length ? filtered : acc;
  }, '');

longestWord3('fun&!!');
longestWord3('fun&!! time');
longestWord3('I love dogs');
