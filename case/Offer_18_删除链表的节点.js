// https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/?envType=study-plan-v2&envId=coding-interviews

var deleteNode = function(head, val) {
    const root = new ListNode();
    root.next = head;
    let cur = root
    while (cur && cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
        }
        cur = cur.next;
    }
    return root.next;
};