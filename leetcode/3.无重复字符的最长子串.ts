/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    if (s === "") return 0;

    const strArr = s.split("");
    let maxNum = 1;

    for (let i = 0; i < strArr.length; i++) {
        const hashMap = { [strArr[i]]: true };
        let currentNum = 1;
        let j = i + 1;
        while (j < strArr.length && !hashMap[strArr[j]]) {
            hashMap[strArr[j]] = true;
            currentNum += 1;
            j++;
        }
        maxNum = Math.max(maxNum, currentNum);
    }

    return maxNum;
}
// @lc code=end

console.log(lengthOfLongestSubstring("abcabcbb"));
