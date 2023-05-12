// 819. 最常见的单词

// 给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。

// 题目保证至少有一个词不在禁用列表中，而且答案唯一。

// 禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。

// 输入:
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// 输出: "ball"

// 1 <= 段落长度 <= 1000
// 0 <= 禁用单词个数 <= 100
// 1 <= 禁用单词长度 <= 10

// 思考：
// 因为禁用单词个数不多于 100, 可以考虑直接用 includes, 否则需要牺牲空间用 Set

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 79.65% 的用户
// 内存消耗：
// 41.9 MB, 在所有 JavaScript 提交中击败了 97.34% 的用户
const mostCommonWord1 = (paragraph, banned) => {
  const len = paragraph.length;
  const map = new Map();
  let max = 0;
  let res = '';
  let letter = '';
  for (const i of paragraph) {
    const item = i.toLocaleLowerCase();
    const code = item.charCodeAt();
    if (code >= 97 && code <= 122) {
      letter += item;
    } else if (letter && !banned.includes(letter)) {
      map.set(letter, (map.get(letter) || 0) + 1);
      if (map.get(letter) > max) {
        max = map.get(letter);
        res = letter;
      }
      letter = '';
    } else letter = '';
  }
  if (letter && !banned.includes(letter)) {
    map.set(letter, (map.get(letter) || 0) + 1);
    if (map.get(letter) > max) {
      max = map.get(letter);
      res = letter;
    }
  }
  return res;
};

const paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.',
  banned = ['hit'];

console.log(mostCommonWord1(paragraph, banned));
