// 434. 字符串中的单词数

// 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

// 请注意，你可以假定字符串里不包括任何不可打印的字符。

// 示例:

// 输入: "Hello, my name is John"
// 输出: 5

// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 93.39% 的用户
// 内存消耗：
// 40.7 MB, 在所有 JavaScript 提交中击败了 89.11% 的用户
const countSegments = s => {
  if (s.trim().length === 0) return 0;
  return (filter = s.trim().replace(/\x20+/g, ' ').split(' ').length);
};

const s = 'Hello, my name is John';

console.log(countSegments(s));
