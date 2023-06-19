// https://leetcode.cn/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75

var isSubsequence = function(s, t) {
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        let pot = s[i];
        while (j < t.length) {
            if (pot === t[j]) {
                break;
            }
            j++;
        }
        if (j === t.length) {
            return false;
        }
        j++;
    }
    return true;
};