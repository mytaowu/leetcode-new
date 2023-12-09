/**
 * https://leetcode.cn/problems/search-a-2d-matrix-ii/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  var matrixFunc = function (matrix, col, row, target) {
  // 越界的情况
  if (matrix?.[col]?.[row] === undefined) {
    return false;
  }
  if (matrix[col][row] === target) {
    return true;
  }

  // 递增序列，直接结束
  if (matrix[col][row] > target) {
    return false;
  }
  return matrixFunc(matrix, col + 1, row, target) || matrixFunc(matrix, col, row + 1, target)
};
  return matrixFunc(matrix, 0, 0, target);
};

var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (search(matrix[i], target) !== -1) {
      return true;
    }
  }
  return false;
};

const search = (nums, target) => {
  let low = 0;
  let height = nums.length - 1;
  while (low <= height) {
    let mid = Math.floor((height - low) / 2) + low;
    const num = nums[mid];
    if (num === target) {
      return mid;
    } else if (num > target) {
      height = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1
}


var searchMatrix = function(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    let x = 0, y = n - 1;
    while (x < m && y >= 0) {
        if (matrix[x][y] === target) {
            return true;
        }
        if (matrix[x][y] > target) {
            --y;
        } else {
            ++x;
        }
    }
    return false;
};