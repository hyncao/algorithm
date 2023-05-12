// 7. 整数反转

// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。

// 输入：x = 123
// 输出：321

// 输入：x = 120
// 输出：21

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 87.62% 的用户
// 内存消耗：
// 42.8 MB, 在所有 JavaScript 提交中击败了 30.99% 的用户
const reverse = x => {
  const symbol = x < 0 ? '-' : '';
  const arr = `${x}`.split('').slice(x < 0 ? 1 : 0);
  arr.reverse();
  const res = `${symbol}${arr.join('')}` - 0;
  return res < -Math.pow(2, 31) || res > Math.pow(2, 31) ? 0 : res;
};

const x = 12000;

console.log(reverse(x));
