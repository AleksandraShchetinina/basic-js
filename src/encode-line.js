const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let current = '';
  let number = 0;
  let result = '';

  for (let i = 0; i <= str.length; i++) {
      if (current === str[i]) {
          number += 1;
      } else {
          if (current) { 
              result += (number > 1 ? number : '') + current;
          }
          current = str[i];
          number = 1;
      }
  }

  return result;
}

module.exports = {
  encodeLine
};
