/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dp = [[0, -prices[0]]];
    for (let i = 1; i < prices.length; i++) {
        console.log(dp);
        const val1 = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
        const val2 = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])
        dp.push([val1, val2])
    }
    return dp[dp.length - 1][0]
};