/**
 * https://leetcode.cn/problems/search-insert-position/?envType=study-plan-v2&envId=top-100-liked
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0;
  let height = nums.length - 1;
  let mid = 0;
  while (low <= height) {
    mid = Math.floor((height - low) / 2) + low;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      height = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return height + 1;
};