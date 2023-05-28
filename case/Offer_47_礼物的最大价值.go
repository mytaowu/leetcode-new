package _case

import "fmt"

/*
https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof/?envType=study-plan-v2&envId=coding-interviews
*/

func maxValue(grid [][]int) int {
	m := len(grid)
	n := len(grid[0])

	dp := make([][]int, m)
	dp[0] = make([]int, n)
	dp[0][0] = grid[0][0]
	for i := 1; i < n; i++ {
		dp[0][i] = grid[0][i] + dp[0][i-1]
	}

	for i := 1; i < m; i++ {
		dp[i] = make([]int, n)
		dp[i][0] = grid[i][0] + dp[i-1][0]
	}

	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			dp[i][j] = max(dp[i-1][j], dp[i][j-1]) + grid[i][j]
		}
	}
	fmt.Println("dp:", dp)
	return dp[m-1][n-1]
}
