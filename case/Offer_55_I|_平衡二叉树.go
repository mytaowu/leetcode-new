package _case

import (
	"math"
)

/*
https://leetcode.cn/problems/ping-heng-er-cha-shu-lcof/?envType=study-plan-v2&envId=coding-interviews
*/

func isBalanced(root *TreeNode) bool {
	if root == nil {
		return true
	}
	var dfs func(node *TreeNode) (int, bool)
	dfs = func(node *TreeNode) (int, bool) {
		if node == nil {
			return 0, true
		}
		heightLeft, boolLeft := dfs(node.Left)
		heightRight, boolRight := dfs(node.Right)
		if !boolLeft || !boolRight {
			return max(heightLeft, heightRight) + 1, false
		}
		return max(heightLeft, heightRight) + 1, math.Abs(float64(heightLeft-heightRight)) <= 1
	}
	_, res := dfs(root)
	return res
}
