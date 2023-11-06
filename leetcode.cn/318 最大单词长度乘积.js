// 318. 最大单词长度乘积

// 给你一个字符串数组 words ，找出并返回 length(words[i]) * length(words[j]) 的最大值，并且这两个单词不含有公共字母。如果不存在这样的两个单词，返回 0 。

// 示例 1：

// 输入：words = ["abcw","baz","foo","bar","xtfn","abcdef"]
// 输出：16
// 解释：这两个单词为 "abcw", "xtfn"。

// 示例 2：

// 输入：words = ["a","ab","abc","d","cd","bcd","abcd"]
// 输出：4
// 解释：这两个单词为 "ab", "cd"。

// 示例 3：

// 输入：words = ["a","aa","aaa","aaaa"]
// 输出：0
// 解释：不存在这样的两个单词。

// 思考：试试用二进制
// 将 26 个字母看做是长度为 26 的二进制表示，有字母则该位置置为 1
// 当两个字符串没有相同字母，则 a & b === 0

// O(n*len + n²) O(n*len)
// 执行用时：
// 96 ms, 在所有 JavaScript 提交中击败了 69.70% 的用户
// 内存消耗：
// 48.33 MB, 在所有 JavaScript 提交中击败了 25.76% 的用户
const maxProduct1 = words => {
  let res = 0;
  const len = words.length;
  const arr = [];
  for (const i of words) {
    const binary = Array(26).fill(0);
    for (const l of i) {
      binary[l.charCodeAt() - 97] = 1;
    }
    arr.push({
      len: i.length,
      binary: parseInt(binary.join(''), 2),
    });
  }
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if ((arr[i] & arr[j].binary) === 0) {
        res = Math.max(res, arr[i].len * arr[j].len);
      }
    }
  }
  return res;
};

// 执行用时：
// 84 ms, 在所有 JavaScript 提交中击败了 86.36% 的用户
// 内存消耗：
// 48.33 MB, 在所有 JavaScript 提交中击败了 25.76% 的用户
const maxProduct2 = words => {
  let res = 0;
  const len = words.length;
  const arr = [];
  for (const i of words) {
    const binary = Array(26).fill(0);
    for (const l of i) {
      binary[l.charCodeAt() - 97] = 1;
    }
    arr.push(parseInt(binary.join(''), 2));
  }
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if ((arr[i] & arr[j]) === 0) {
        res = Math.max(res, words[i].length * words[j].length);
      }
    }
  }
  return res;
};

const words = ["abcw","baz","foo","bar","xtfn","abcdef"];

console.log(maxProduct2(words));
