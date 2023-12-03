/**
 * https://leetcode.cn/problems/max-consecutive-ones-iii/description/?envType=study-plan-v2&envId=leetcode-75
 * 给定一个二进制数组 nums 和一个整数 k，如果可以翻转最多 k 个 0 ，则返回 数组中连续 1 的最大个数 。
 */
var longestOnes = function(nums, k) {
  let right = 0;
  let left = 0;

  let maxCount = 0;
  while (right < nums.length) {
    if (nums[right] === 0) {
      k--;
    }
    while (k < 0) {
      if (nums[left] === 0) {
        k++;
      }
      left++;
    }
    maxCount = Math.max(maxCount, right - left + 1)
    right++;
  }
  return maxCount;
};