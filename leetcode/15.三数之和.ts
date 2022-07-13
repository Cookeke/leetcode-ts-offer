/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    const len = nums.length;
    if (len < 3) return [];

    nums.sort((a, b) => a - b);
    if (nums[0] > 0 || nums[len - 1] < 0) return [];

    const ans: number[][] = [];
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) return ans;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = len - 1;

        while (left < right) {
            const target = nums[i] + nums[left] + nums[right];
            if (target < 0) left++;
            if (target > 0) right--;
            if (target === 0) {
                ans.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }

    return ans;
}
// @lc code=end
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
