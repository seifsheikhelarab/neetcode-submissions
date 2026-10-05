class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let left = 0;
        let right = 1;
        let max = 0;

        while (right <= prices.length - 1) {
            if (prices[left] >= prices[right]) {
                left = right;
                right = left + 1;
                continue;
            } else {
                max = Math.max(max, prices[right] - prices[left]);
                right++;
                continue;
            }
        }
        return max;
    }
}
