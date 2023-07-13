// 70. 爬楼梯

// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶

// 输入：n = 3
// 输出：3
// 解释：有三种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶 + 1 阶
// 2. 1 阶 + 2 阶
// 3. 2 阶 + 1 阶

// 分析:
// 先来看结果:
// n = 0 1
// n = 1 1
// n = 2 2
// n = 3 3
// n = 4 5
// n = 5 8
// 其实是一个斐波那契数列

// 递归 O(2ⁿ)
// 超时
const climbStairs1 = n => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return climbStairs1(n - 1) + climbStairs1(n - 2);
};

// 记忆功能的递归 O(n)
// 执行用时：
// 48 ms , 在所有 JavaScript 提交中击败了 98.46% 的用户
// 内存消耗：
// 40.7 MB, 在所有 JavaScript 提交中击败了 89.05% 的用户
const climbStairs2 = n => {
  const memoMap = {
    1: 1,
    2: 2,
  };
  const calc = n => {
    if (memoMap[n]) {
      return memoMap[n];
    }
    const res = calc(n - 1) + calc(n - 2);
    memoMap[n] = res;
    return res;
  };
  return calc(n);
};

// 滚动数组 O(n)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 60.21% 的用户
// 内存消耗：
// 40.8 MB, 在所有 JavaScript 提交中击败了 77.64% 的用户
const climbStairs3 = n => {
  let prev = 1;
  let next = 1;
  let res = 1;
  for (let x = 1; x < n; x++) {
    res = prev + next;
    prev = next;
    next = res;
  }
  return res;
};

// 动态规划 O(n)
// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 93.73% 的用户
// 内存消耗：
// 40.6 MB, 在所有 JavaScript 提交中击败了 95.67% 的用户
const climbStairs4 = n => {
  let dp1 = 1;
  let dp2 = 1;
  for (let i = 2; i <= n; i++) {
    const temp = dp2;
    dp2 = dp1 + dp2;
    dp1 = temp;
  }
  return dp2;
};

const n = 45;

console.log(climbStairs3(n));
