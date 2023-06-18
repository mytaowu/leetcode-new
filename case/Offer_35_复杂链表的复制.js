// https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof/


 // Definition for a Node.
  function Node(val, next, random) {
     this.val = val;
     this.next = next;
     this.random = random;
};


var copyRandomList = function(head, cachedNode = new WeakMap()) {
    if (head === null) {
        return null;
    }
    if (!cachedNode.has(head)) {
        cachedNode.set(head, {val: head.val})
        Object.assign(cachedNode.get(head), {next: copyRandomList(head.next, cachedNode), random: copyRandomList(head.random, cachedNode)})
    }
    return cachedNode.get(head);
}