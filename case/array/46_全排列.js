/**
 * https://leetcode.cn/problems/permutations/?envType=study-plan-v2&envId=top-100-liked
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * @param {*} nums 
 * @returns 
 */

var permute = function (nums) {
  let res = [];
  allSort(nums, 0, nums.length, res);
  return res;
};

var allSort = function (arr, start, len, res) {
  for (let i = start; i < len; i++) {
    if (start === len - 1) {
      res.push([...arr]);
    } else {
      let temp = arr[i];
      arr[i] = arr[start];
      arr[start] = temp;
      allSort(arr, start + 1, len, res);
      temp = arr[i];
      arr[i] = arr[start];
      arr[start] = temp;
    }
  }
}