// 459. 重复的子字符串

// 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构

// 输入: s = "abab"
// 输出: true

// 输入: s = "aba"
// 输出: false

// 输入: s = "abacababacab"
// 输出: true

// 输入: s = "abcd"
// 输出: false
// 解释：abcd重复了1次，但是abcd并不是子串

// 粗鄙的版本，有用到 KMP 的雏形 memoryIndex
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 62.58% 的用户
// 内存消耗：
// 43 MB, 在所有 JavaScript 提交中击败了 90.34% 的用户
const repeatedSubstringPattern = s => {
  let left = 0;
  let section = 1;
  const right = left + section;
  const len = s.length;
  let res = false;
  let memoryFlag = false;
  let memoryIndex = 0;
  let memoryLetter = '';
  while (right < len) {
    if (s[right] === s[left]) {
      if (memoryFlag && memoryLetter === s[right]) {
        memoryIndex = right;
      }
      if (memoryFlag) {
        memoryLetter = s[left - 1];
      }
      memoryFlag = true;
      section = right - left;
      if (right === len - 1 && len % section === 0) {
        res = true;
      }
      left++;
      right++;
    } else {
      left = 0;
      right = memoryIndex ? memoryIndex : right + !memoryFlag;
      memoryFlag = false;
      memoryLetter = '';
      memoryIndex = 0;
    }
  }
  return res;
};

const s = 'babbabbabbabbab';

console.log(repeatedSubstringPattern(s));
