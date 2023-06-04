package _case

import "fmt"

/*
https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/
*/
func isSubStructure(A *TreeNode, B *TreeNode) bool {
	data1 := beforeForEach(A)
	fmt.Println("data1:", data1)
	data2 := beforeForEach(B)
	fmt.Println("data2:", data2)
	return false
}

func beforeForEach(root *TreeNode) (data []int) {
	var inorder func(node *TreeNode)
	inorder = func(node *TreeNode) {
		if node == nil {
			return
		}
		inorder(node.Left)
		data = append(data, node.Val)
		inorder(node.Right)
	}
	inorder(root)
	return
}
