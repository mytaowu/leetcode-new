/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let quick = head;
  let slow = head;
  while (quick !== null && quick.next !== null) {
    quick = quick?.next?.next;
    slow = slow?.next;
    if (quick === slow) {
      return true;
    }
  }
  return false;
};

var detectCycle = function (head) {
  let quick = head;
  let slow = head;
  while (true) {
    if (quick === null || quick.next == null) {
      return null;
    }
    quick = quick?.next?.next;
    slow = slow?.next;
    if (quick === slow) {
      break;
    }
  }
  quick = head;
  while (quick != slow) {
    quick = quick.next;
    slow = slow.next;
  }
  return quick;
};