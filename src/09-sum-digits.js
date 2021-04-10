/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  let str = '';
  let sum = 0;
  str = n.toString();
  for (let i = 0; i < str.length; i++) {
    sum += Number.parseInt(str[i], 10);
  }
  if (Math.ceil(sum / 10) !== 0) {
    str = sum.toString();
    sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += Number.parseInt(str[i], 10);
    }
  }
  return sum;
}

module.exports = getSumOfDigits;
