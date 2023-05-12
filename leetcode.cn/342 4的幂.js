// 342. 4的幂

// 给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；否则，返回 false 。

// 整数 n 是 4 的幂次方需满足：存在整数 x 使得 n == 4x

// -Math.pow(2, 31) <= n <= Math.pow(2, 31) - 1

// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 61.93% 的用户
// 内存消耗：
// 41.7 MB, 在所有 JavaScript 提交中击败了 45.87% 的用户
const isPowerOfFour1 = n => {
  return n > 0 && Math.log2(n) % 2 === 0;
};

// 先判断是否是 2 的幂次方 n & (n - 1) === 0
// 再判断是否是 4 的幂次方，4 的幂次方除以 3 的余数一定是1
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 41.74% 的用户
// 内存消耗：
// 41.6 MB, 在所有 JavaScript 提交中击败了 69.95% 的用户
const isPowerOfFour2 = n => {
  return n > 0 && (n & (n - 1)) === 0 && n % 3 == 1;
};

const n = 16;

console.log(isPowerOfFour2(n));
