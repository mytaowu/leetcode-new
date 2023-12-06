/**
 * https://leetcode.cn/problems/subarray-sum-equals-k/?envType=study-plan-v2&envId=top-100-liked
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
   子数组是数组中元素的连续非空序列。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  for (let start = 0; start < nums.length; start++) {
    let sum = 0;
    for (let end = start; end >= 0; end--) {
      sum += nums[end];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
};

var subarraySum = function (nums, k) {
  let count = 0;
  let sum = 0;
  const testMap = new Map();
  testMap.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (testMap.has(sum - k)) {
      count += testMap.get(sum - k)
    }
    if (testMap.has(sum)) {
      testMap.set(sum, testMap.get(sum) + 1);
    }else {
      testMap.set(sum, 1);
    }
  }
  return count;
};