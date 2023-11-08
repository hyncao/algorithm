// 2586. 统计范围内的元音字符串数

// 给你一个下标从 0 开始的字符串数组 words 和两个整数：left 和 right 。

// 如果字符串以元音字母开头并以元音字母结尾，那么该字符串就是一个 元音字符串 ，其中元音字母是 'a','e'、'i'、'o'、'u' 。

// 返回 words[i] 是元音字符串的数目，其中 i 在闭区间 [left, right] 内。

// 示例 1：

// 输入：words = ["are","amy","u"], left = 0, right = 2
// 输出：2

// 示例 2：

// 输入：words = ["hey","aeo","mu","ooo","artro"], left = 1, right = 4
// 输出：3

// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 80.91% 的用户
// 内存消耗：
// 43.38 MB, 在所有 JavaScript 提交中击败了 20.00% 的用户
const vowelStrings1 = (words, left, right) => {
  let res = 0;
  const set = new Set(['a', 'e', 'i', 'o', 'u']);

  for (let i = left; i <= right; i++) {
    if (set.has(words[i][0]) && set.has(words[i][words[i].length - 1])) {
      res++;
    }
  }

  return res;
};

const vowelStrings2 = (words, left, right) => {
  let res = 0;
  const isVowel = l => l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u';

  for (let i = left; i <= right; i++) {
    if (isVowel(words[i][0]) && isVowel(words[i][words[i].length - 1])) {
      res++;
    }
  }

  return res;
};

const words = ['hey', 'aeo', 'mu', 'ooo', 'artro'],
  left = 1,
  right = 4;

console.log(vowelStrings1(words, left, right));
