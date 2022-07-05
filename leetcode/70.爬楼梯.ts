/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
    if ([1, 2].includes(n)) return n;

    const climbArr = [1, 2];
    for (let i = 2; i < n; i++) {
        climbArr.push(climbArr[i - 1] + climbArr[i - 2]);
    }
    return climbArr[climbArr.length - 1];
}
// @lc code=end

console.log(climbStairs(2));
console.log(climbStairs(3));
