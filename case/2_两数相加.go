package _case

/**
https://leetcode.cn/problems/add-two-numbers/comments/
*/

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	res := &ListNode{}
	cursor := res
	carry := 0

	for l1 != nil || l2 != nil || carry != 0 {
		l1Val := 0
		l2Val := 0
		if l1 != nil {
			l1Val = l1.Val
		}
		if l2 != nil {
			l2Val = l2.Val
		}

		sum := l1Val + l2Val + carry
		carry = sum / 10

		cursor.Next = &ListNode{Val: sum % 10}
		cursor = cursor.Next

		if l1 != nil {
			l1 = l1.Next
		}

		if l2 != nil {
			l2 = l2.Next
		}
	}

	return res.Next
}

func reverseList(l *ListNode) *ListNode {
	if l == nil {
		return nil
	}

	var slow *ListNode
	fast := l
	for l != nil {
		fast = l.Next
		l.Next = slow
		slow = l
		l = fast
	}
	return slow
}
