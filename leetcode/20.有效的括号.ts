/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    const stack: string[] = [];

    const hashMap = {
        "(": ")",
        ")": "(",
        "[": "]",
        "]": "[",
        "{": "}",
        "}": "{"
    };

    const leftSign = ["(", "[", "{"];

    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0) {
            stack.push(s[i]);
            continue;
        }
        const popS = stack.pop() as string;
        // @ts-ignore
        if (hashMap[s[i]] !== popS || !leftSign.includes(popS)) {
            stack.push(popS, s[i]);
        }
    }

    return stack.length === 0;
}
// @lc code=end

console.log(isValid("(){}}{"));
console.log(isValid("(]"));
