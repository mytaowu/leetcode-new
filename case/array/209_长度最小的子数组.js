var minSubArrayLen = function(target, nums) {
  let leftIndex = 0;
  let rightIndex = 0;
  let resLen = 99999999;
  let sum = 0;

  while (rightIndex < nums.length) {
    sum += nums[rightIndex];
    while (sum >= target) {
      resLen = Math.min(rightIndex - leftIndex + 1, resLen);
      sum -= nums[leftIndex];
      leftIndex++;
    }
    rightIndex++
  }
  if (resLen === 99999999) {
    return 0;
  }
  return resLen;
};

function sum(nums, left, right) {
  let res = 0;
  for (let i = left; i <= right; i++) {
    res += nums[i];
  }
  return res;
}