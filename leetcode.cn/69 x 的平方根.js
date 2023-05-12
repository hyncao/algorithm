// 69. x 的平方根

// 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

// 输入：x = 8
// 输出：2

const mySqrt1 = x => {
  if (x < 2) return x;
  let end = x >> 1;
  for (let start = 0; start <= end + 1; start++) {
    if (start * start > x) {
      return start - 1;
    }
  }
};

// 牛顿迭代法 O(log(n))
// 公式: (a + x / a) / 2 >= sqrt(x)
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 89.74% 的用户
// 内存消耗：
// 42.5 MB, 在所有 JavaScript 提交中击败了 40.61% 的用户
const mySqrt2 = x => {
  let a = x;
  while (a * a > x) {
    a = Math.floor((a + x / a) / 2);
  }
  return a;
};

const x = 2147483647;

console.log(mySqrt2(x));
