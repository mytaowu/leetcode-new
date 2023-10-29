var maxProfit = function (prices) {
  let profix = 0;
  let minValue = 99999;

  for (let i = 0; i < prices.length; i++) {
    if (minValue > prices[i]) {
      minValue = prices[i];
    }
    profix = Math.max(profix, prices[i] - minValue);
  }
  return profix;
};