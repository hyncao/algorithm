// 557. 反转字符串中的单词 III

// 给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

// 输入：s = "Let's take LeetCode contest"
// 输出："s'teL ekat edoCteeL tsetnoc"

// 输入： s = "God Ding"
// 输出："doG gniD"

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 98.18% 的用户
// 内存消耗：
// 47.3 MB, 在所有 JavaScript 提交中击败了 45.13% 的用户
const reverseWords = s => {
  let res = '';
  let i = 0;
  while (i < s.length) {
    if (s[i] === ' ') {
      res += s[i];
      i++;
      continue;
    }
    let current = '';
    while (i < s.length) {
      if (s[i] !== ' ') {
        current = s[i] + current;
        i++;
      } else break;
    }
    res += current;
  }
  return res;
};

const s = "Let's take LeetCode contest";

console.log(reverseWords(s));
