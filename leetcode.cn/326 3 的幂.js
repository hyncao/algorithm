// 326. 3 的幂

// 给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。

// 整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3x

// 输入：n = 27
// 输出：true

// 题目中的 n <= Math.pow(2, 31) - 1, 所以可以枚举
// 执行用时：
// 204 ms, 在所有 JavaScript 提交中击败了 17.59% 的用户
// 内存消耗：
// 49.8 MB, 在所有 JavaScript 提交中击败了 56.65% 的用户
const isPowerOfThree1 = n => {
  const map = new Map();
  let i = 0;
  while (i < 20) {
    map.set(Math.pow(3, i));
    i++;
  }
  return map.has(n);
};

// n 是否是 Math.pow(3, 19) 的约数即可。
// 执行用时：
// 136 ms, 在所有 JavaScript 提交中击败了 99.39% 的用户
// 内存消耗：
// 49.7 MB, 在所有 JavaScript 提交中击败了 66.26% 的用户
const isPowerOfThree2 = n => {
  return n > 0 && Math.pow(3, 19) % n === 0;
};

const n = 441;

console.log(isPowerOfThree2(n));
