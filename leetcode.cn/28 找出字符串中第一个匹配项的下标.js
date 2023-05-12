// 28. 找出字符串中第一个匹配项的下标

// 实现 strStr() 函数。

// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

// 输入：haystack = "hello", needle = "ll"
// 输出：2

// 输入：haystack = "aaaaa", needle = "bba"
// 输出：-1

// 偷鸡
// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 85.82% 的用户
// 内存消耗：
// 41.1 MB, 在所有 JavaScript 提交中击败了 47.14% 的用户
const strStr1 = (haystack, needle) => {
  const hasArr = haystack.split(needle);
  return hasArr.length === 1 ? -1 : hasArr[0].length;
};

// 合着这叫 Sunday 算法???
// https://leetcode.cn/problems/implement-strstr/solution/python3-sundayjie-fa-9996-by-tes/
// O(n)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 66.58% 的用户
// 内存消耗：
// 41.1 MB, 在所有 JavaScript 提交中击败了 47.14% 的用户
const strStr2 = (haystack, needle) => {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substr(i, needle.length) === needle) return i;
    }
  }
  return -1;
};

const haystack = 'hello';
const needle = 'lla';

console.log(strStr2(haystack, needle));
