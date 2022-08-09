/*
 * @lc app=leetcode.cn id=908 lang=typescript
 *
 * [908] 最小差值 I
 */

// @lc code=start
function smallestRangeI(nums: number[], k: number): number {
    const reNum = Math.max(...nums) - Math.min(...nums) - 2 * k;
    return reNum > 0 ? reNum : 0;
}
// @lc code=end
