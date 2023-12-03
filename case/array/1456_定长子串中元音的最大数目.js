/**
 * https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length/?envType=study-plan-v2&envId=leetcode-75
 *  给你字符串 s 和整数 k 。
    请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数。
    英文中的 元音字母 为（a, e, i, o, u）。
 */
var maxVowels = function (s, k) {
  let maxCount = 0;
  const countArray = [];
  for (let i = 0; i < k; i++) {
    maxCount += isChart(s[i]);
  }
  countArray[0] = maxCount;
  for (let i = 1; i <= s.length - k; i++) {
    countArray[i] = countArray[i - 1] + isChart(s[i + k - 1]) - isChart(s[i - 1])
    maxCount = Math.max(countArray[i], maxCount);
  }

  return maxCount;
};

var isChart = function (char) {
  if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
    return 1;
  }
  return 0;
}