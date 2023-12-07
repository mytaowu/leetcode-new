/**
 * https://leetcode.cn/problems/longest-increasing-subsequence/description/?envType=study-plan-v2&envId=top-100-liked
 * @param {*} nums 
 * @returns 
 */

var lengthOfLIS = function (nums) {
  let maxLen = 0;
  let dp = [];
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    maxLen = Math.max(dp[i], maxLen);
  }
  return maxLen;
};