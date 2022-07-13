/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
    if (nums.length === 0) return 0;
    if (nums.length <= 2) return Math.max(...nums);

    const dp = [nums[0], nums[1], nums[0] + nums[2]];
    for (let i = 3; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[i];
    }
    return Math.max(...dp);
}
// @lc code=end

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12
