package _case

import "fmt"

/*
https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/?envType=study-plan-v2&envId=coding-interviews
*/

func kthLargest(root *TreeNode, k int) int {
	list := make([]int, 0)
	var dfs func(root *TreeNode)
	dfs = func(root *TreeNode) {
		if len(list) > k {
			return
		}
		if root == nil {
			return
		}

		dfs(root.Right)
		list = append(list, root.Val)
		dfs(root.Left)
	}

	fmt.Println("--->list;", list, k-1)
	dfs(root)
	return list[k-1]
}
