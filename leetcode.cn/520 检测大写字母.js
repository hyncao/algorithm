// 520. 检测大写字母

// 我们定义，在以下情况时，单词的大写用法是正确的：

// 全部字母都是大写，比如 "USA" 。
// 单词中所有字母都不是大写，比如 "leetcode" 。
// 如果单词不只含有一个字母，只有首字母大写， 比如 "Google" 。
// 给你一个字符串 word 。如果大写用法正确，返回 true ；否则，返回 false 。

// 输入：word = "USA"
// 输出：true

// 输入：word = "FlaG"
// 输出：false

// 'A-Z' 65-90
// 'a-z' 97-122

// DP
// true 代表大写字母，false 代表小写字母
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 84.82% 的用户
// 内存消耗：
// 41.3 MB, 在所有 JavaScript 提交中击败了 74.11% 的用户
const detectCapitalUse = word => {
  let first;
  let next;
  for (let i = 0; i < word.length; i++) {
    const code = word[i].charCodeAt();
    const isBig = code >= 65 && code <= 90;
    if (first === undefined) {
      first = isBig;
      continue;
    }
    if (!first) {
      if (isBig) return false;
      if (i === word.length - 1) return true;
    } else {
      if (next === undefined) {
        next = isBig;
      } else if (next !== isBig) return false;
    }
  }
  return true;
};

const word = 'Sds';

console.log(detectCapitalUse(word));
