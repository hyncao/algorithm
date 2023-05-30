// 2455. 可被三整除的偶数的平均值

// 给你一个由正整数组成的整数数组 nums ，返回其中可被 3 整除的所有偶数的平均值。

// 注意：n 个元素的平均值等于 n 个元素 求和 再除以 n ，结果 向下取整 到最接近的整数。

// 输入：nums = [1,3,6,10,12,15]
// 输出：9
// 解释：6 和 12 是可以被 3 整除的偶数。(6 + 12) / 2 = 9 。

// 输入：nums = [1,2,4,7,10]
// 输出：0

// O(n) O(1)
// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 94.12% 的用户
// 内存消耗：
// 43.1 MB, 在所有 JavaScript 提交中击败了 24.71% 的用户
const averageValue1 = nums => {
  let sum = 0;
  let n = 0;
  for (const i of nums) {
    if (i % 6 === 0) {
      n++;
      sum += i;
    }
  }
  return n ? Math.floor(sum / n) : 0;
};

// 小知识： ~~操作符可以向下取整，~~Infinity == 0
// O(n) O(1)
// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 94.12% 的用户
// 内存消耗：
// 42.7 MB, 在所有 JavaScript 提交中击败了 40.00% 的用户
const averageValue2 = nums => {
  let sum = 0;
  let n = 0;
  for (const i of nums) {
    if (i % 6 === 0) {
      n++;
      sum += i;
    }
  }
  return ~~(sum / n);
};
