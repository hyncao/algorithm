// 387. 字符串中的第一个唯一字符

// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。

// 输入: s = "leetcode"
// 输出: 0

// 输入: s = "loveleetcode"
// 输出: 2

// 执行用时：
// 88 ms, 在所有 JavaScript 提交中击败了 86.60% 的用户
// 内存消耗：
// 44.3 MB, 在所有 JavaScript 提交中击败了 57.43% 的用户
const firstUniqChar = s => {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }
  const target = Object.keys(map).find(i => map[i] === 1);
  return s.indexOf(target);
};

const s = 'loveleetcode';

console.log(firstUniqChar(s));
