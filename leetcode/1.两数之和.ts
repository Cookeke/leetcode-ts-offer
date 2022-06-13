/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const tempObj = Object.fromEntries(nums.map((i, idx) => [i, idx]));
  for (let i = 0; i < nums.length; i++) {
    const otherNum = target - nums[i];
    const oIdx = tempObj[otherNum];
    if (oIdx !== undefined && oIdx !== i) {
      return [i, oIdx];
    }
  }
  return [];
}
// @lc code=end

// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
