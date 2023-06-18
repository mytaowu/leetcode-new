// https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/?envType=study-plan-v2&envId=coding-interviews


var reversePrint = function(head) {
    const res = [];
    while (head) {
        res.unshift(head.val);
        head = head.next;
    }

    return res;
};