// 2053. 数组中第 K 个独一无二的字符串

// 独一无二的字符串 指的是在一个数组中只出现过 一次 的字符串。
// 给你一个字符串数组 arr 和一个整数 k ，请你返回 arr 中第 k 个 独一无二的字符串 。如果 少于 k 个独一无二的字符串，那么返回 空字符串 "" 。
// 注意，按照字符串在原数组中的 顺序 找到第 k 个独一无二字符串。

// 输入：arr = ["d","b","c","b","c","a"], k = 2
// 输出："a"

// 输入：arr = ["aaa","aa","a"], k = 1
// 输出："aaa"

// 开莽 O(n²)
// 执行用时：
// 84 ms, 在所有 JavaScript 提交中击败了 36.67% 的用户
// 内存消耗：
// 47.1 MB, 在所有 JavaScript 提交中击败了 8.89% 的用户
const kthDistinct1 = (arr, k) => {
  const filtered = new Set(arr);

  arr.forEach((i, index) => {
    if (index < arr.length - 1) {
      if (arr.slice(index + 1).includes(i) && filtered.has(i)) {
        filtered.delete(i);
      }
    }
  });

  return [...filtered][k - 1] || '';
};

// 哈希表快速寻找重复项 O(n)
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了93.33%的用户
// 内存消耗：
// 43.5 MB, 在所有 JavaScript 提交中击败了 72.22% 的用户
const kthDistinct2 = (arr, k) => {
  const hashMap = new Map();

  arr.forEach(i => {
    hashMap.set(i, hashMap.has(i) ? hashMap.get(i) + 1 : 1);
  });

  const fixedArr = [];
  hashMap.forEach((value, key) => {
    if (value === 1) {
      fixedArr.push(key);
    }
  });

  return fixedArr[k - 1] || '';
};

// 进一步优化哈希表 O(n)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了98%的用户
// 内存消耗：
// 43.8 MB, 在所有 JavaScript 提交中击败了 49% 的用户
const kthDistinct3 = (arr, k) => {
  const hashMap = new Map();

  // 感觉 for 循环要比 forEach 略快
  for (let i = 0; i < arr.length; i++) {
    hashMap.set(arr[i], hashMap.has(arr[i]) ? hashMap.get(arr[i]) + 1 : 1);
  }

  // 如果达到了 k 则直接 return, 不用得出全部的唯一项数组
  let count = 0;
  for (let [key, value] of hashMap) {
    if (value === 1) {
      count++;
    }
    if (count === k) {
      return key;
    }
  }
  return '';
};

const arr = ['aaa', 'aa', 'a'];
const k = 1;

console.log(kthDistinct2(arr, k));
