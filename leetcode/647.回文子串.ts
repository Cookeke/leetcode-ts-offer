/*
 * @lc app=leetcode.cn id=647 lang=typescript
 *
 * [647] 回文子串
 */

// @lc code=start
function countSubstrings(s: string): number {
    const isReverse = (str: string) => str === str.split("").reverse().join("");
    let ans = s.length;

    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 2; j < s.length + 1; j++) {
            ans += Number(isReverse(s.slice(i, j)));
        }
    }

    return ans;
}
// @lc code=end

console.log(countSubstrings("abc")); //3
console.log(countSubstrings("aaa")); //6
