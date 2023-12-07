/**
 * https://leetcode.cn/problems/jump-game-ii/?envType=study-plan-v2&envId=top-100-liked
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let border = 0;
  let step = 0;
  let maxPosition = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i]);
    if (i === border) {
      border = maxPosition;
      step++;
    }
  }
  return step;
};