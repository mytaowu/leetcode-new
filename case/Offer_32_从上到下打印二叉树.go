package _case

/*
https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/?envType=study-plan-v2&envId=coding-interviews
*/
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func levelOrder(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}
	deque := make([]*TreeNode, 0)
	deque = append(deque, root)
	res := make([]int, 0)
	for len(deque) != 0 {
		temp := deque[0]
		deque = deque[1:]
		res = append(res, temp.Val)
		if temp.Left != nil {
			deque = append(deque, temp.Left)
		}
		if temp.Right != nil {
			deque = append(deque, temp.Right)
		}
	}

	return res
}

func levelOrder2(root *TreeNode) [][]int {
	type levelTreeNode struct {
		node  *TreeNode
		level int
	}

	type levelRes struct {
		data  int
		level int
	}

	if root == nil {
		return [][]int{}
	}
	deque := make([]*levelTreeNode, 0)
	deque = append(deque, &levelTreeNode{
		node:  root,
		level: 1,
	})
	res := make([]levelRes, 0)

	for len(deque) != 0 {
		temp := deque[0]
		deque = deque[1:]
		res = append(res, levelRes{
			level: temp.level,
			data:  temp.node.Val,
		})
		if temp.node.Left != nil {
			deque = append(deque, &levelTreeNode{
				node:  temp.node.Left,
				level: temp.level + 1,
			})
		}
		if temp.node.Right != nil {
			deque = append(deque, &levelTreeNode{
				node:  temp.node.Right,
				level: temp.level + 1,
			})
		}
	}
	lastRes := res[len(res)-1]
	resArr := make([][]int, lastRes.level)
	for i := 0; i < len(res); i++ {
		if resArr[res[i].level-1] == nil {
			resArr[res[i].level-1] = []int{res[i].data}
		} else {
			resArr[res[i].level-1] = append(resArr[res[i].level-1], res[i].data)
		}
	}

	return resArr
}

func levelOrder3(root *TreeNode) [][]int {
	if root == nil {
		return [][]int{}
	}
	ans := [][]int{}
	queue := []*TreeNode{root}
	for level := 0; len(queue) > 0; level++ {
		vals := []int{}
		q := queue
		queue = nil
		for _, node := range q {
			vals = append(vals, node.Val)
			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
		if level%2 == 1 {
			for i := 0; i < len(vals)/2; i++ {
				vals[i], vals[len(vals)-1-i] = vals[len(vals)-1-i], vals[i]
			}
		}
		ans = append(ans, vals)
	}
	return ans
}
