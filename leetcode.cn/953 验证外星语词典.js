// 953. 验证外星语词典

// 某种外星语也使用英文小写字母，但可能顺序 order 不同。字母表的顺序（order）是一些小写字母的排列。

// 给定一组用外星语书写的单词 words，以及其字母表的顺序 order，只有当给定的单词在这种外星语中按字典序排列时，返回 true；否则，返回 false。

// 输入：words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// 输出：true
// 解释：在该语言的字母表中，'h' 位于 'l' 之前，所以单词序列是按字典序排列的。

// 输入：words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// 输出：false
// 解释：在该语言的字母表中，'d' 位于 'l' 之后，那么 words[0] > words[1]，因此单词序列不是按字典序排列的。

// 输入：words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// 输出：false

// 思考：
// 如何比较两个词的字母表顺序
// 1. A 是 B 的前部分，谁长谁大，B > A
// 2. A 只要有一位比 B 大，A > B

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 79.01% 的用户
// 内存消耗：
// 41.5 MB, 在所有 JavaScript 提交中击败了 49.38% 的用户
const isAlienSorted = (words, order) => {
  const len = words.length;
  if (len === 1) return true;
  const arr = Array.from({ length: 26 }, (_, i) => i);
  arr.sort((a, b) => (order[a] > order[b] ? 1 : -1));
  for (let i = 1; i < len; i++) {
    if (words[i - 1] === words[i]) continue;
    const n = Math.min(words[i - 1].length, words[i].length);
    let flag = true;
    for (let j = 0; j < n; j++) {
      if (arr[words[i][j].charCodeAt() - 97] < arr[words[i - 1][j].charCodeAt() - 97]) {
        flag = false;
        break;
      } else if (arr[words[i][j].charCodeAt() - 97] > arr[words[i - 1][j].charCodeAt() - 97]) {
        flag = true;
        break;
      }
      if (j === n - 1) flag = words[i].length > n;
    }
    if (!flag) return false;
  }
  return true;
};

const words = ['apple', 'applea'],
  order = 'abcdefghijklmnopqrstuvwxyz';

console.log(isAlienSorted(words, order));
