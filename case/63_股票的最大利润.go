package _case

import "math"

func maxProfit(prices []int) int {
	minVal := math.MinInt
	maxProfit := 0
	for i := 0; i < len(prices); i++ {
		if prices[i] < minVal {
			minVal = prices[i]
		}
		if prices[i]-minVal > maxProfit {
			maxProfit = prices[i] - minVal
		}
	}
	return maxProfit
}

//func maxProfit2(prices []int) int {
//	maxProfit := 0
//	for i := 0; i < len(prices)-1; i++ {
//		if prices[i] <= prices[i+1] {
//			maxProfit += prices[i+1] - 1
//		}
//	}
//	return maxProfit
//}
