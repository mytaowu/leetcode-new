// https://leetcode.cn/problems/greatest-common-divisor-of-strings/comments/

var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    return str1.substring(0, gcd(str1.length, str2.length));
};

var gcd = (a, b) => b === 0 ? a : gcd(b, a % b);