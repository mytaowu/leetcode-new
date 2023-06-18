// https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/?envType=study-plan-v2&envId=coding-interviews

var reverseLeftWords = function(s, n) {
    const arr = s.split("");
    while (n > 0) {
        arr.push(arr.shift())
        n--;
    }

    return arr.join("");
};