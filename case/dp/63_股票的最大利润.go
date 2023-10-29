package _case

/*
https://leetcode.cn/problems/gu-piao-de-zui-da-li-run-lcof/
*/
import "math"

//func maxProfit(prices []int) int {
//	minVal := math.MinInt
//	maxProfit := 0
//	for i := 0; i < len(prices); i++ {
//		if prices[i] < minVal {
//			minVal = prices[i]
//		}
//		if prices[i]-minVal > maxProfit {
//			maxProfit = prices[i] - minVal
//		}
//	}
//	return maxProfit
//}

func maxProfit(prices []int) int {
	number
	profit := 0
	minValue := math.MaxInt
	for i := 0; i < len(prices); i++ {
		if minValue > prices[i] {
			minValue = prices[i]
		}
		profit = max(profit, prices[i]-minValue)
	}
	return profit
}
