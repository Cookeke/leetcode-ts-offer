/*
 * @lc app=leetcode.cn id=219 lang=typescript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (numsMap.get(nums[i]) !== undefined) {
            if (i - numsMap.get(nums[i]) <= k) return true;
        }
        numsMap.set(nums[i], i);
    }
    return false;
}
// @lc code=end
