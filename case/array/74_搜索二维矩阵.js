/**
 * https://leetcode.cn/problems/search-a-2d-matrix/description/?envType=study-plan-v2&envId=top-100-liked
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let row = 0;

  // 找到目标列
  for (let i = 0; i < m; i++) {
    if (matrix[i][n - 1] >= target) {
      row = i;
      break;
    }
  } 
  const nums = matrix[row];
  return search(nums, target);
};

var search = function (nums, target) {
  let low = 0;
  let height = nums.length - 1;
  while (low <= height) {
    let mid = Math.floor((height - low) / 2) + low
    if (nums[mid] === target) {
      return true;
    } else if (nums[mid] > target) {
      height = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return false;
}