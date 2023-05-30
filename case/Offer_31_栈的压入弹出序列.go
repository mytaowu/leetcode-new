package _case

import "fmt"

/*
	https://leetcode.cn/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/
*/

func validateStackSequences(pushed []int, popped []int) bool {
	stack := make([]int, 0)
	j := 0
	for i := 0; i < len(pushed); i++ {
		val := pushed[i]
		stack = append(stack, val)
		for len(stack) > 0 && peek(stack) == popped[j] {
			stack = pop(stack)
			j++
		}
	}
	fmt.Println(j)
	return j == len(popped)
}

func pop(stack []int) []int {
	return stack[:len(stack)-1]
}

func peek(stack []int) int {
	return stack[len(stack)-1]
}
