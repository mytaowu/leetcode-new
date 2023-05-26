package _case

/**
https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/?envType=study-plan-v2&envId=coding-interviews
*/

func deleteNode(head *ListNode, val int) *ListNode {
	root := &ListNode{Next: head}
	roo2 := root
	for root != nil && root.Next != nil {
		if root.Next.Val == val {
			root.Next = root.Next.Next
		}

		root = root.Next
	}

	return roo2.Next
}
