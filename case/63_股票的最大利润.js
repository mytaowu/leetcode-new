/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let profit = 0;
	let minVal = Number.MAX_VALUE;
	prices.forEach((item) => {
		minVal = item < minVal ? item : minVal;
		profit = Math.max(profit, item - minVal);
	})
	return profit
};
// typescript
// function maxProfit(prices: number[]): number {
// 	let profit = 0;
// 	let minVal = Number.MAX_VALUE;
// 	prices.forEach((item) => {
// 		minVal = item < minVal ? item : minVal;
// 		profit = Math.max(profit, item - minVal);
// 	})
// 	return profit
// };