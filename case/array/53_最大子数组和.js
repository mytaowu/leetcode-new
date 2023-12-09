/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 0) {
    return [];
  }
  const dp = [nums[0]];
  let maxValue = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    maxValue = Math.max(dp[i], maxValue);
  }
  return maxValue;
};