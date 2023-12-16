/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = [[]];
  // 偷了第一间房
  dp[0][1] = nums[0];
  // 没有偷第一间房
  dp[0][0] = 0;

  for (let i = 1; i < nums.length; i++){
    dp[i] = [];
    // 偷了这间房
    dp[i][1] = dp[i - 1][0] + nums[i];
    // 未偷
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0]);
  }
  return Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1])
};