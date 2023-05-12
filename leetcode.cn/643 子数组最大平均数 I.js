// 643. 子数组最大平均数 I

// 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。

// 请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。

// 任何误差小于 10-5 的答案都将被视为正确答案。

// 输入：nums = [1,12,-5,-6,50,3], k = 4
// 输出：12.75
// 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75

// 输入：nums = [5], k = 1
// 输出：5.00000

const { randomNumArr } = require('../lib/utils');

// sumArr 为前缀和数组，第一项与 nums 第一项相同
// sumArr[i+k] - sumArr[i] 即为 nums[i+1] ~ nums[i+k] 的合
// sumArr[i] 即为 nums[0] ~ nums[i] 的合
// 执行用时：
// 100 ms, 在所有 JavaScript 提交中击败了 39.51% 的用户
// 内存消耗：
// 58.2 MB, 在所有 JavaScript 提交中击败了 9.72% 的用户
const findMaxAverage1 = (nums, k) => {
  if (k === 1) return Math.max(...nums);
  const sumArr = [];
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      sumArr.push(nums[i]);
    } else {
      sumArr.push(sumArr[i - 1] + nums[i]);
    }
  }
  for (let i = -1; i < sumArr.length - k; i++) {
    max = Math.max(max, sumArr[i + k] - (sumArr[i] || 0));
  }
  return max / k;
};

// 执行用时：
// 76 ms, 在所有 JavaScript 提交中击败了 98.78% 的用户
// 内存消耗：
// 52.9 MB, 在所有 JavaScript 提交中击败了 72.34% 的用户
const findMaxAverage2 = (nums, k) => {
  let sum = 0;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (i < k) {
      sum += nums[i];
    } else {
      sum = sum + nums[i] - nums[i - k];
    }
    if (i >= k - 1) {
      max = Math.max(max, sum);
    }
  }
  return max / k;
};

// const nums = randomNumArr(100);
const nums = [0, 1, 1, 3, 3];
const k = 4;

console.log(findMaxAverage2(nums, k));
