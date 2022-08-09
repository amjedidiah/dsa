/**
 * Returns a reversed string using recursion
 * @param {string} str
 * @return {string} - The reversed string
 */
function reversedString1(str) {
  if (str.length <= 1) {
    return str;
  }

  return str.slice(-1) + reversedString1(str.slice(0, -1));
}

/**
 * Returns a reversed string using iteration
 * @param {string} str
 * @return {string} - The reversed string
 */
function reversedString2(str) {
  if (str.length <= 1) {
    return str;
  }

  let result = '';

  while (str) {
    result += str.slice(-1);
    str = str.slice(0, -1);
  }

  return result;
}

/**
 * Returns a reversed string using arrays
 * @param {string} str
 * @return {string} - The reversed string
 */
function reversedString3(str) {
  if (str.length <= 1) {
    return str;
  }

  return str
      .split(' ')
      .reverse()
      .map((word) => [...word].reverse().join(''))
      .join(' ');
}

reversedString1('Since I fell in love...');
reversedString1('S');
reversedString2('You don sweep me off my feet...');
reversedString2('Y');
reversedString3('You don barb my moro...');
reversedString3('Y');
