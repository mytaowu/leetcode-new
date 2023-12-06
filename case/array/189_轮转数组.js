/**
 * https://leetcode.cn/problems/rotate-array/
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  nums.unshift(...nums.splice(nums.length - k, k))
  return nums;
};

var rotate = function (nums, k) {
  const copy = [...nums, ...nums];
  k = k % nums.length;
  const abc = copy.slice(nums.length - k, nums.length - k + nums.length);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = abc[i];
  }
};