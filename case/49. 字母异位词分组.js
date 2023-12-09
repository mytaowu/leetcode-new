/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Object();
  for (let i = 0; i < strs.length; i++) {
    let s = strs[i];
    let count = Array(26).fill(0)
    for (let j = 0; j < s.length; j++) {
        count[s[j].charCodeAt() - 'a'.charCodeAt()]++;
    }
    map[count] ? map[count].push(s) : map[count] = [s];
  }
  return Object.values(map);
};