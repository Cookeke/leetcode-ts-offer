/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0][0];

    for (const str of strs) {
        if (!str || str[0] !== prefix) return "";
    }

    return prefix + longestCommonPrefix(strs.map(str => str.slice(1)));
}
// @lc code=end

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // 'fl'
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ''
