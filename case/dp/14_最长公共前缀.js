/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let index = 0;

  let minLen = 9999;
  strs.forEach(str => {
    minLen = str.length < minLen ? str.length : minLen;
  })

  for (; index < minLen; index++) {
    const char = strs[0][index];
    let flag = true;
    for (let j = 1; j < strs.length; j++) {
      if (char !== strs[j][index]) {
        flag = false;
        break;
      }
    }
    if (!flag) {
      break;
    }
  }

  return strs[0].substring(0, index);
};