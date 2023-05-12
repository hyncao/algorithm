// 680. 验证回文串 II

// 给你一个字符串 s，最多 可以从中删除一个字符。

// 请你判断 s 是否能成为回文字符串：如果能，返回 true ；否则，返回 false 。

// 输入：s = "aba"
// 输出：true

// 输入：s = "abca"
// 输出：true
// 解释：你可以删除字符 'c' 。

// 输入：s = "abc"
// 输出：false

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 98.90% 的用户
// 内存消耗：
// 46.3 MB, 在所有 JavaScript 提交中击败了 96.16% 的用户
const validPalindrome = s => {
  let delFlag = false;
  let l = 0;
  let r = s.length - 1;
  let backL = null;
  let backR = null;
  while (l <= r) {
    if (s[r] !== s[l]) {
      if (!delFlag) {
        delFlag = true;
        backL = l;
        backR = r;
        r--;
        continue;
      } else if (backL !== null) {
        l = backL;
        r = backR;
        l++;
        backL = nul;
        continue;
      } else {
        return false;
      }
    }
    r--;
    l++;
  }
  return true;
};

const s = 'abc';

console.log(validPalindrome(s));
