/**
 * https://leetcode.cn/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 */

var moveZeroes = function (nums) {
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[cur++] = nums[i];
    }
  }

  for (let i = cur; i < nums.length; i++) {
    nums[i] = 0;
  }
};