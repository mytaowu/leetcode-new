/**
 * https://leetcode.cn/problems/majority-element/discussion/?envType=study-plan-v2&envId=top-interview-150
 */

var majorityElement = function (nums) {
  // 使用摩尔投票法完成
  let target = nums[0];
  let cur = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === target) {
      cur++;
    } else {
      cur--;
      if (cur === 0) {
        target = nums[i];
        cur = 1;
      }
    }
  }

  return target
};