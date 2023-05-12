// 392. 判断子序列

// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

// 进阶：

// 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

// 输入：s = "abc", t = "ahbgdc"
// 输出：true
// 示例 2：

// 输入：s = "axc", t = "ahbgdc"
// 输出：false

// O(s*log(t)) t.substring(prev + 1).indexOf(i) 的操作中，t.length 会不断变短
// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了96.50%的用户
// 内存消耗：
// 40.8 MB, 在所有 JavaScript 提交中击败了 80.91% 的用户
const isSubsequence1 = (s, t) => {
  if (t.includes(s)) return true;
  let prev = -1;
  for (const i of s) {
    const current = t.substring(prev + 1).indexOf(i);
    if (current > -1) {
      prev += current + 1;
    } else {
      return false;
    }
  }
  return true;
};

// O(s+t)
// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 90.24% 的用户
// 内存消耗：
// 40.7 MB, 在所有 JavaScript 提交中击败了 94.59% 的用户
const isSubsequence2 = (s, t) => {
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
};

const s = 'abc';
const t = 'ahbgdc';

console.log(isSubsequence2(s, t));
