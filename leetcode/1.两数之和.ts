/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const hashMap = Object.fromEntries(nums.map((v, idx) => [v, idx]));
  for (let i = 0; i < nums.length; i++) {
    const jValue = target - nums[i];
    const j = hashMap[jValue];
    if (j !== undefined && j !== i) return [i, j];
  }
  return [];
}
// @lc code=end

// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
