class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let lastPrice = prices[0];
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > lastPrice) {
                profit += prices[i] - lastPrice;
                lastPrice = prices[i];
            } else {
                lastPrice = prices[i];
            }
        }
        return profit;
    }
}
