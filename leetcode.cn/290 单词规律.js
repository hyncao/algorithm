// 290. 单词规律

// 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。

// 示例1:

// 输入: pattern = "abba", s = "dog cat cat dog"
// 输出: true
// 示例 2:

// 输入:pattern = "abba", s = "dog cat cat fish"
// 输出: false
// 示例 3:

// 输入: pattern = "aaaa", s = "dog cat cat dog"
// 输出: false

// 最终将 pattern 和 s 变更为二维数组，对比两个二维数组是否全等
// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 84.87% 的用户
// 内存消耗：
// 41 MB, 在所有 JavaScript 提交中击败了 57.70% 的用户
const wordPattern1 = (pattern, s) => {
  const arr = s.split(' ');
  if (pattern.length !== arr.length) return false;
  let i = 0;
  const patternMap = {};
  const sMap = {};
  while (i < arr.length) {
    if (Array.isArray(patternMap[pattern[i]])) {
      patternMap[pattern[i]].push(i);
    } else {
      patternMap[pattern[i]] = [i];
    }
    if (Array.isArray(sMap[arr[i]])) {
      sMap[arr[i]].push(i);
    } else {
      sMap[arr[i]] = [i];
    }
    i++;
  }
  i = 0;
  const v1 = Object.values(patternMap);
  const v2 = Object.values(sMap);
  while (i < v1.length) {
    if (v1[i].join(',') !== v2[i].join(',')) return false;
    i++;
  }
  return true;
};

// 用两个 Map 一边遍历一边判断是否为双射
// map1 = { a: dog }, map2 = { dog: a }
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 66.11% 的用户
// 内存消耗：
// 40.9 MB, 在所有 JavaScript 提交中击败了 79.55% 的用户
const wordPattern2 = (pattern, s) => {
  const arr = s.split(' ');
  if (pattern.length !== arr.length) return false;
  const patternMap = new Map();
  const sMap = new Map();
  let i = 0;
  while (i < arr.length) {
    if (
      (patternMap.has(pattern[i]) && patternMap.get(pattern[i]) !== arr[i]) ||
      (sMap.has(arr[i]) && sMap.get(arr[i]) !== pattern[i])
    ) {
      return false;
    }
    patternMap.set(pattern[i], arr[i]);
    sMap.set(arr[i], pattern[i]);
    i++;
  }
  return true;
};

const pattern = 'abba';
const s = 'dog constructor constructor dog';

console.log(wordPattern2(pattern, s));
