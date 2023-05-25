package _case

func maxProfit3(prices []int) int {
	dp := make([][]int, len(prices))
	dp[0] = make([]int, 2)
	dp[0][0] = 0
	dp[0][1] = -prices[0]

	for i := 1; i < len(prices); i++ {
		dp[i] = make([]int, 2)
		dp[i][0] = max(dp[i-1][0], dp[i-1][1]+prices[i])
		dp[i][1] = max(dp[i-1][1], dp[i-1][0]-prices[i])
	}

	return dp[len(prices)-1][0]
}
