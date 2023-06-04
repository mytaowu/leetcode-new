package _case

import "sort"

/*
https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
*/

func verifyPostorder(postorder []int) bool {
	// 获取中序排列
	popList := make([]int, len(postorder))
	copy(popList, postorder)

	sort.Ints(postorder)
	pushList := make([]int, len(postorder))
	copy(pushList, postorder)

	j := 0

	stack := make([]int, 0)
	for i := 0; i < len(pushList); i++ {
		temp := pushList[i]
		stack = append(stack, temp)
		for len(stack) > 0 && peek2(stack) == popList[j] {
			pop2(&stack)
			j++
		}
	}

	return j == len(postorder)
}

func peek2(list []int) int {
	return list[len(list)-1]
}

func pop2(list *[]int) {
	*list = (*list)[:len(*list)-1]
}
