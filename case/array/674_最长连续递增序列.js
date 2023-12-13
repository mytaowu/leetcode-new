/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let dp = [];

  dp[0] = 1;
  let maxLen = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = 1;
    }
    maxLen = Math.max(dp[i], maxLen);
  }
  return maxLen;
};