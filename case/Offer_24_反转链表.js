// https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/

var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

var reverseList2 = function(head) {
    let root = null;
    while (head) {
        const temp = head.next;
        head.next = root;
        root = head;
        head = temp;
    }

    return root;
};