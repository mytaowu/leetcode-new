/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const maxDp = new Array(nums);
  const minDp = new Array(nums);
  maxDp[0] = nums[0];
  minDp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxDp[i] = Math.max(maxDp[i - 1] * nums[i], Math.max(nums[i], minDp[i - 1] * nums[i]));
    minDp[i] = Math.max(minDp[i - 1] * nums[i], Math.min(nums[i], maxDp[i - 1] * nums[i]));
  }
  let maxValue = maxDp[0];
  maxDp.forEach(item => {
    if (item > maxValue) {
      maxValue = item;
    }
  })
  return maxValue;
};