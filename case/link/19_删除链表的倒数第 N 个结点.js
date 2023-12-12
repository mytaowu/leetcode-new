/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const root = {
    val: -1,
    next: head,
  }
  let quic = head;
  for (let i = 0; i < n; i++) {
    quic = quic.next;
  }
  let slow = root;
  while (quic !== null) {
    slow = slow.next;
    quic = quic.next;
  }
  slow.next = slow.next.next;
  return root.next;
};