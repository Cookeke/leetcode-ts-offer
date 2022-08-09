/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
    let maxSize = 0;

    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        maxSize = Math.max(maxSize, (right - left) * Math.min(height[left], height[right]));
        height[left] < height[right] ? left++ : right--;
    }

    return maxSize;
}
// @lc code=end

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
