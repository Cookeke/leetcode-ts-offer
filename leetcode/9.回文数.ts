/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    const strX = x + "";
    let left = 0;
    let right = strX.length - 1;
    while (left < right) {
        if (strX[left] !== strX[right]) return false;
        left++;
        right--;
    }
    return true;
}
// @lc code=end
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
