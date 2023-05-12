// 441. 排列硬币

// 你总共有 n 枚硬币，并计划将它们按阶梯状排列。对于一个由 k 行组成的阶梯，其第 i 行必须正好有 i 枚硬币。阶梯的最后一行 可能 是不完整的。

// 给你一个数字 n ，计算并返回可形成 完整阶梯行 的总行数。

// 输入：n = 5
// 输出：2
// 解释：因为第三行不完整，所以返回 2 。

// 输入：n = 8
// 输出：3
// 解释：因为第四行不完整，所以返回 3 。

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 99.10% 的用户
// 内存消耗：
// 43 MB, 在所有 JavaScript 提交中击败了 43.88% 的用户
const arrangeCoins = n => {
  let left = 1;
  let right = n;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const s = 0.5 * middle * (middle + 1);
    if (s > n) {
      right = middle - 1;
    } else if (s < n) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return right;
};

const n = 10;

console.log(arrangeCoins(n));
