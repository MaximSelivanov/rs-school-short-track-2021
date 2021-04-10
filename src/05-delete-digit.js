/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str1 = '';
  let str2 = '';
  str1 = n.toString();
  let max = n % 10;
  for (let i = 0; i < str1.length; i++) {
    str2 = str1;
    str2 = str2.slice(0, i) + str2.slice(i + 1);
    if (Number.parseInt(str2, 10) > max) max = Number.parseInt(str2, 10);
  }
  return max;
}

module.exports = deleteDigit;
