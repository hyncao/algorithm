// 509. 斐波那契数

// 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1

// F(n) = F(n - 1) + F(n - 2)，其中 n > 1

// 给定 n ，请计算 F(n) 。

let count = 0;

// 递归 O(n*log(n))
// 执行用时：
// 84 ms, 在所有 JavaScript 提交中击败了 14.25% 的用户
// 内存消耗：
// 40.7 MB, 在所有 JavaScript 提交中击败了 90.70% 的用户
const fib1 = n => {
  if (n <= 1) return n;
  return fib1(n - 2) + fib1(n - 1);
};

// 动态规划 O(n)
// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 94.67% 的用户
// 内存消耗：
// 40.7 MB, 在所有 JavaScript 提交中击败了 87.30% 的用户
const fib2 = n => {
  if (n <= 1) return n;
  let pprev = 0;
  let prev = 1;
  for (let i = 2; i <= n; i++) {
    const temp = prev;
    prev = pprev + prev;
    pprev = temp;
  }
  return prev;
};

// 动态规划 O(n)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 67.38% 的用户
// 内存消耗：
// 40.8 MB, 在所有 JavaScript 提交中击败了 81.18% 的用户
const fib3 = n => {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    const temp = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = temp;
  }
  return dp[1];
};

const n = 30;

console.log(fib3(n));
console.log(count);
