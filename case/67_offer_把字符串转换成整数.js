// https://leetcode.cn/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/?envType=study-plan-v2&envId=coding-interviews
var strToInt = function(str) {
    str = str.trim();
    if (str[0] !== '-' && str[0] !== '+' && !isFinite(Number(str[0]))) {
        return 0;
    }

    let i = 1;
    for (; i < str.length; i++) {
        if (!isFinite(Number(str[i])) || str[i] === " ") {
            break;
        }
    }

    const endNumber  = Number(str.substring(0, i));
    if (!isFinite(endNumber)) {
        return 0;
    }
    if (endNumber < -Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    }
    if (endNumber > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }
    return str.substring(0, i);
};

