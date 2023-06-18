// https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/?envType=study-plan-v2&envId=coding-interviews

var getKthFromEnd = function(head, k) {
    let count = 1;
    const nodeMap = new Map();
    while (head) {
        nodeMap.set(count++, head);
        head = head.next;
    }

    return nodeMap.get(count - k);
};

var getKthFromEnd2 = function(head, k) {
    let quick = head;
    let slow = head;
    while (k > 0) {
        slow = slow.next
        k--;
    }

    while (slow) {
        slow = slow.next;
        quick = quick.next;
    }

    return quick;
};