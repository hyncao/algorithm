// 1137. 第 N 个泰波那契数

// 泰波那契序列 Tn 定义如下：

// T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

// 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

// 注意：是 泰波那契数 不是 斐波那契数列

// 输入：n = 4
// 输出：4
// 解释：
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4

// 输入：n = 25
// 输出：1389537

// 思考：
// 动态规划解法：
// dp[0] = 0; dp[1] = 1;
// dp[n] = dp[n-3] + dp[n-2] + dp[n-1];

// O(n) O(1)
// 执行用时：
// 44 ms, 在所有 JavaScript 提交中击败了 99.55% 的用户
// 内存消耗：
// 40.4 MB, 在所有 JavaScript 提交中击败了 99.55% 的用户
const tribonacci1 = n => {
  if (n < 2) return n;
  if (n === 2) return 1;
  let dp0 = 0;
  let dp1 = 1;
  let dp2 = 1;
  for (let i = 3; i <= n; i++) {
    const temp1 = dp1;
    const temp2 = dp2;
    dp2 += dp0 + dp1;
    dp0 = temp1;
    dp1 = temp2;
  }
  return dp2;
};

// 普通递归算法当 n = 36 时力扣会超时，这是因为会做很多重复计算
const tribonacci2 = n => {
  if (n < 2) return n;
  if (n === 2) return 1;
  return tribonacci2(n - 3) + tribonacci2(n - 2) + tribonacci2(n - 1);
};

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 82.14% 的用户
// 内存消耗：
// 40.9 MB, 在所有 JavaScript 提交中击败了 41.74% 的用户
const map = new Map([
  [0, 0],
  [1, 1],
  [2, 1],
]);
const tribonacci3 = n => {
  const res = map.get(n);
  if (res !== undefined) return res;
  const n1 = tribonacci3(n - 1);
  map.set(n - 1, n1);
  const n2 = tribonacci3(n - 2);
  map.set(n - 2, n2);
  const n3 = tribonacci3(n - 3);
  map.set(n - 3, n3);
  return n1 + n2 + n3;
};

const n = 36;

console.log(tribonacci3(n));
