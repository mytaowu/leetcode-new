/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  return spiltLink(head, null);
};

// 切分链表
var spiltLink = function (head, tail) {
  if (head === null) {
    return head;
  }
  if (head.next === tail) {
    head.next = null;
    return head;
  }
  // 通过快慢指针，获取对应的中间节点
  let slow = head;
  let quick = head;

  while (quick !== tail) {
    slow = slow.next;
    quick = quick.next;
    if (quick !== tail) {
      quick = quick.next;
    }
  }
  let mid = slow;
  return merge(spiltLink(head, mid), spiltLink(mid, tail));
}

var merge = function (link1, link2) {
  let root = {
    val: -1,
    next: null,
  }
  let temp = root;
  while (link1 !== null && link2 !== null) {
    if (link1.val < link2.val) {
      temp.next = link1;
      link1 = link1.next;
    } else {
      temp.next = link2;
      link2 = link2.next;
    }
    temp = temp.next;
  }

  if (link1 !== null) {
    temp.next = link1;
  } else if (link2 !== null) {
    temp.next = link2;
  }
  return root.next;
}