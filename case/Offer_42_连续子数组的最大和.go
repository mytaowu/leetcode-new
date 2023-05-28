package _case

func maxSubArray(nums []int) int {
	if len(nums) == 1 {
		return nums[0]
	}
	maxValue := nums[0]
	dp := make([]int, len(nums))
	dp[0] = nums[0]
	for i := 1; i < len(nums); i++ {
		dp[i] = max(dp[i-1]+nums[i], nums[i])
		maxValue = max(dp[i], maxValue)
	}
	return maxValue
}
