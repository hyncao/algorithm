// 58. 最后一个单词的长度

// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

// 输入：s = "Hello World"
// 输出：5
// 解释：最后一个单词是“World”，长度为5。

// 输入：s = "   fly me   to   the moon  "
// 输出：4
// 解释：最后一个单词是“moon”，长度为4。

// 反向遍历
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了37.98%的用户
// 内存消耗：
// 41.2 MB, 在所有 JavaScript 提交中击败了 29.81% 的用户
const lengthOfLastWord1 = s => {
  if (s.length === 1) return 1;
  let end = s.length - 1;
  for (let i = end - 1; i >= -1; i--) {
    if (s[end] === ' ') {
      end--;
      continue;
    }
    if (s[i] && s[i] !== ' ') {
      continue;
    }
    if (s[i] === ' ' || i <= 0) {
      return end - i;
    }
  }
};

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 83.18% 的用户
// 内存消耗：
// 41 MB, 在所有 JavaScript 提交中击败了 71.53% 的用户
const lengthOfLastWord2 = s => {
  const arr = s.split(' ');
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i]) {
      return arr[i].length;
    }
  }
};

const s = 'd ';

console.log(lengthOfLastWord2(s));
