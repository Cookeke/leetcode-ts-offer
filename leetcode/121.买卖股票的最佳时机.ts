/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let minNow = prices[0];
    let maxMoney = 0;

    for (let i = 0; i < prices.length; i++) {
        minNow = Math.min(minNow, prices[i]);
        maxMoney = Math.max(maxMoney, prices[i] - minNow);
    }

    return maxMoney;
}
// @lc code=end

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
