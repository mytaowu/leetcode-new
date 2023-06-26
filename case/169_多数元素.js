// https://leetcode.cn/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150

var majorityElement = function (nums) {
    let count = 1;
    let mjr = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (mjr === nums[i]) {
            count++;
        } else {
            count--;
            if (count === 0) {
                mjr = nums[i+1];
            }
        }
    }
    return mjr;
}