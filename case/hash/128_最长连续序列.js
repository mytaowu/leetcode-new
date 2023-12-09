/**
 * 
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let maxCount = 0;
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      // 不存在最小的值了, 进行处理
      let count = 1;
      let currentNum = num;
      while (numSet.has(currentNum + 1)) {
        count++;
        currentNum++;
      }
      maxCount = Math.max(maxCount, count);
    }
  }

  return maxCount;
};