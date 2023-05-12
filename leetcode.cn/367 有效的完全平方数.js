// 367. 有效的完全平方数

// 给你一个正整数 num 。如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

// 完全平方数 是一个可以写成某个整数的平方的整数。换句话说，它可以写成某个整数和自身的乘积。

// 不能使用任何内置的库函数，如  sqrt 。

// 说白了，就是开平方能否得到整数

// 输入：num = 16
// 输出：true

// 输入：num = 14
// 输出：false

// 用牛顿迭代法求出近似的平方根 x2 = (x1 + num / x1) / 2
// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 84.33% 的用户
// 内存消耗：
// 41.2 MB, 在所有 JavaScript 提交中击败了 8.49% 的用户
const isPerfectSquare = num => {
  const newton = n => (n + num / n) / 2;
  let res = newton(num);
  let prev = num;
  while (prev - res > 1) {
    res = newton(res);
    prev = res;
    res = newton(res);
  }
  return Math.round(res) ** 2 === num;
};

const num = 808201;

console.log(isPerfectSquare(num));
