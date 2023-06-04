package _case

/*
https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof/?envType=study-plan-v2&envId=coding-interviews
*/

func maxDepth(root *TreeNode) int {
	var dfs func(node *TreeNode) int
	dfs = func(node *TreeNode) int {
		if node == nil {
			return 0
		}
		return max(dfs(node.Right), dfs(node.Left)) + 1
	}
	return dfs(root)
}

func maxDepth2(root *TreeNode) int {
	if root == nil {
		return 0
	}
	height := 0
	queue := []*TreeNode{root}
	level := 1
	for len(queue) > 0 {
		tempNode := queue[0]
		queue = queue[1:]
		level--
		if tempNode.Left != nil {
			queue = append(queue, tempNode.Left)
		}
		if tempNode.Right != nil {
			queue = append(queue, tempNode.Right)
		}
		if level == 0 {
			level = len(queue)
			height++
		}
	}
	return height
}
