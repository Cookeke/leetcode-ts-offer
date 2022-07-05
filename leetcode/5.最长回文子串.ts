/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  const judgeStr = (str: string) => {
    let z1 = 0;
    let z2 = str.length - 1;

    while (z1 < z2) {
      if (str[z1] !== str[z2]) {
        break;
      }
      z1 += 1;
      z2 -= 1;
    }

    if ((Math.abs(z1 - z2) === 1 || z1 === z2) && str[z1] === str[z2]) {
      return true;
    }

    return false;
  };

  let maxLength = 1;
  let maxStr = s[0];
  const slen = s.length;

  for (let i = 0; i < slen; i++) {
    for (let j = i + 1; j < slen + 1; j++) {
      const currStr = s.slice(i, j);
      if (currStr.length > maxLength) {
        if (judgeStr(currStr)) {
          maxStr = currStr;
          maxLength = currStr.length;
        }
      }
    }
  }

  return maxStr;
}
// @lc code=end

// console.log(longestPalindrome("babad"));
console.log(longestPalindrome("bb"));
