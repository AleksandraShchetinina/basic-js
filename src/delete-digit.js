const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = [];
  let str = String(n);
  for (i = 0; i < str.length; i++){
   let num = Number(str.slice(0, i) + str.slice(i + 1));
   arr.push(num);
  }
  return Math.max(...arr)
 }

module.exports = {
  deleteDigit
};
