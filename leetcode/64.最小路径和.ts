/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
    const row = grid.length;
    const column = grid[0].length;

    const dp = Array.from({ length: row }, () => Array(column).fill(0));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = grid[i][j];
                continue;
            }

            const top = i - 1 < 0 ? +Infinity : dp[i - 1][j];
            const left = j - 1 < 0 ? +Infinity : dp[i][j - 1];

            dp[i][j] = Math.min(top, left) + grid[i][j];
        }
    }

    return dp[row - 1][column - 1];
}
// @lc code=end

console.log(
    minPathSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ])
); // 7
console.log(
    minPathSum([
        [1, 2, 3],
        [4, 5, 6]
    ])
); // 12
