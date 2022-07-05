/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
    const pathArr: number[][] = new Array(m).fill(new Array(n).fill(1));
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            pathArr[i][j] = pathArr[i - 1][j] + pathArr[i][j - 1];
        }
    }
    return pathArr[m - 1][n - 1];
}

// @lc code=end

console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(7, 3)); // 28
console.log(uniquePaths(3, 3)); // 6
