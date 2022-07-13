/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
    let local = 0;
    let global = -Infinity;

    for (const num of nums) {
        local = Math.max(num, local + num);
        global = Math.max(global, local);
    }

    return global;
}
// @lc code=end
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
