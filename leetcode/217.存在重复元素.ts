/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    const numsMap = new Map();
    for (const num of nums) {
        if (numsMap.get(num)) return true;
        numsMap.set(num, true);
    }
    return false;
}
// @lc code=end
console.log(containsDuplicate([1, 2, 3, 1]));
