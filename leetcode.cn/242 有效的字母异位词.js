// 242. 有效的字母异位词

// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

// 输入: s = "anagram", t = "nagaram"
// 输出: true

// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 77.67% 的用户
// 内存消耗：
// 42.1 MB, 在所有 JavaScript 提交中击败了 76.31% 的用户
const isAnagram = (s, t) => {
  if (s.length === 1) return s === t;
  if (s.length !== t.length) return false;
  const mapS = {};
  const mapT = {};
  for (let i = 0; i < s.length; i++) {
    s[i] in mapS ? mapS[s[i]]++ : (mapS[s[i]] = 1);
    t[i] in mapT ? mapT[t[i]]++ : (mapT[t[i]] = 1);
  }
  const keys = Object.keys(mapS);
  for (let i = 0; i < keys.length; i++) {
    if (mapS[keys[i]] !== mapT[keys[i]]) return false;
  }
  return true;
};

const s = 'anagras';
const t = 'nagaram';

console.log(isAnagram(s, t));
