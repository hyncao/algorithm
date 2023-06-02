// 2559. 统计范围内的元音字符串数

// 给你一个下标从 0 开始的字符串数组 words 以及一个二维整数数组 queries 。

// 每个查询 queries[i] = [li, ri] 会要求我们统计在 words 中下标在 li 到 ri 范围内（包含 这两个值）并且以元音开头和结尾的字符串的数目。

// 返回一个整数数组，其中数组的第 i 个元素对应第 i 个查询的答案。

// 注意：元音字母是 'a'、'e'、'i'、'o' 和 'u' 。

// 输入：words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]
// 输出：[2,3,0]
// 解释：以元音开头和结尾的字符串是 "aba"、"ece"、"aa" 和 "e" 。
// 查询 [0,2] 结果为 2（字符串 "aba" 和 "ece"）。
// 查询 [1,4] 结果为 3（字符串 "ece"、"aa"、"e"）。
// 查询 [1,1] 结果为 0 。
// 返回结果 [2,3,0] 。

// 输入：words = ["a","e","i"], queries = [[0,2],[0,1],[2,2]]
// 输出：[3,2,1]

// 执行用时：
// 128 ms, 在所有 JavaScript 提交中击败了 86.96% 的用户
// 内存消耗：
// 70.4 MB, 在所有 JavaScript 提交中击败了 8.70% 的用户
const vowelStrings = (words, queries) => {
  const len = words.length;
  const isVowel = i => i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u';
  for (let i = 0; i < len; i++) {
    if (isVowel(words[i][0]) && isVowel(words[i][words[i].length - 1])) words[i] = 1;
    else words[i] = 0;
  }
  for (let i = 1; i < len; i++) {
    words[i] += words[i - 1];
  }
  return queries.map(([left, right]) => words[right] - (words[left - 1] || 0));
};

const words = ['a'],
  queries = [[0, 0]];

console.log(vowelStrings(words, queries));
