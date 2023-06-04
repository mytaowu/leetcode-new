package _case

/*
https://leetcode.cn/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/?envType=study-plan-v2&envId=coding-interviews
*/

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	parent := make(map[int]*TreeNode)
	vis := make(map[int]bool)
	var dfs func(node *TreeNode)
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}
		if node.Left != nil {
			parent[node.Left.Val] = node
			dfs(node.Left)
		}
		if node.Right != nil {
			parent[node.Right.Val] = node
			dfs(node.Right)
		}
	}

	dfs(root)
	for p != nil {
		pNode := parent[p.Val]
		vis[p.Val] = true
		p = pNode
	}
	for q != nil {
		if vis[q.Val] {
			return &TreeNode{
				Val: q.Val,
			}
		}
		pNode := parent[q.Val]
		q = pNode
	}
	return nil
}
