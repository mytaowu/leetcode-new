package _case

import "math"

/*
https://leetcode.cn/problems/qiu-12n-lcof/?envType=study-plan-v2&envId=coding-interviews
*/

func sumNums(n int) int {
	// 等差数列求和
	return (int(math.Pow(float64(n), 2)) + n) >> 1
}
