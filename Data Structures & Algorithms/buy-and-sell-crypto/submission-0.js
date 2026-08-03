class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = 200;
        let profit = 0;
        for (let i = 0; i < prices.length; i++) {
            if (min > prices[i]) {
                min = prices[i];
                continue;
            }
            profit = Math.max(profit,
                prices[i] - min)

        }
        return profit
    }
}
