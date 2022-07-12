/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        if (sum === k) {
            count++;
        }
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) {
                count++;
                continue;
            }
            if (sum > k) continue;
        }
    }

    return count;
}
// @lc code=end

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
