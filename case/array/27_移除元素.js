// https://leetcode.cn/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            for (let j = i; j < nums.length - 1; j++) {
                nums[j] = nums[j + 1]
            }
            nums.length = nums.length - 1;
            i--;
        }
    }
    return nums.length;
}