/**
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/?envType=study-plan-v2&envId=top-100-liked
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // 分为左边有序，跟右边有序
  let low = 0;
  let height = nums.length - 1;
  while (low <= height) {
    let mid = low + Math.floor((height - low) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    // 右边有序
    if (nums[mid] < nums[height]) {
      if (nums[mid] < target && target <= nums[height]) {
        low = mid + 1;
      } else {
        height = mid - 1;
      }
    } else {
      // 左边有序
      if (nums[mid] > target && target >= nums[low]) {
        height = mid - 1;

      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
};