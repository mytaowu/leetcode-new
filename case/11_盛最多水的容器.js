/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    h = height[left] > height[right] ? height[right] : height[left];
    area = Math.max(area, (right - left) * h);
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return area;
};