/*
    https://leetcode.cn/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
 */
var merge = function(nums1, m, nums2, n) {
    let mCurrent = 0;
    let nCurrent = 0;
    const temp = [];
    while (mCurrent < m && nCurrent < n) {
        const mValue = nums1[mCurrent];
        const nValue = nums2[nCurrent];
        if (mValue < nValue) {
            temp.push(mValue);
            mCurrent++;
        } else {
            temp.push(nValue);
            nCurrent++;
        }
    }

    while (nCurrent < n) {
        temp.push(nums2[nCurrent]);
        nCurrent++;
    }
    while (mCurrent < m) {
        temp.push(nums1[mCurrent]);
        mCurrent++;
    }
    for (let i = 0; i < temp.length; i++) {
        nums1[i] = temp[i];
    }
};