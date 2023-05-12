// 231. 2 的幂

// 给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。

// 如果存在一个整数 x 使得 n == 2x ，则认为 n 是 2 的幂次方。

// 进阶：你能够不使用循环/递归解决此问题吗？

// 递归
const isPowerOfTwo1 = n => {
  if (n === 1) return true;
  if (n < 1) return false;
  return isPowerOfTwo1(n / 2);
};

// 先拿到一个极限数, 判断 n 是否为这个数的约数就行了
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 94.49% 的用户
// 内存消耗：
// 42.2 MB, 在所有 JavaScript 提交中击败了 49.53% 的用户
const isPowerOfTwo2 = n => {
  if (n < 1) return false;
  const big = Math.pow(2, 31);
  return big % n === 0;
};

const n = 16;

console.log(isPowerOfTwo2(n));
