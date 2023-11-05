/**
 * https://leetcode.cn/problems/jump-game/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      return false;
    }

    // 保存最远的位置
    k = Math.max(i + nums[i], k);
  }

  return true;
};