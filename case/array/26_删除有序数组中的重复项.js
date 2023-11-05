// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150

var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i+1]) {
            for (let j = i; j < nums.length - 1 ; j++) {
                nums[j] = nums[j + 1]
            }
            nums.length = nums.length - 1;
            i--;
        }
    }
    return nums.length;
}

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr))
console.log(arr);

var removeDuplicates2 = function (nums) {
    let i = 0;
    for (const n of nums) {
        if (i < 2 || n > nums[i - 1]) {
            nums[i++] = n;
        }
    }
    return i;
}