// 1043. 分隔数组以得到最大和

// 给你一个整数数组 arr，请你将该数组分隔为长度 最多 为 k 的一些（连续）子数组。分隔完成后，每个子数组的中的所有值都会变为该子数组中的最大值。

// 返回将数组分隔变换后能够得到的元素最大和。本题所用到的测试用例会确保答案是一个 32 位整数。

// 输入：arr = [1,15,7,9,2,5,10], k = 3
// 输出：84
// 解释：数组变为 [15,15,15,9,10,10,10]

// 输入：arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4
// 输出：83

// 输入：arr = [1], k = 1
// 输出：1

// 审题：
// arr = [1,15,7,9,2,5,10], k = 3
// 理想的分割后数组为：
// [[1, 15, 7], [9], [2, 5, 10]]
// 变换后：
// [[15, 15, 15], [9], [10, 10, 10]]

// 思考：
// 动态规划的中等题
// 设答案为 dp[i], i 为 arr 的下标
// arr = [10, 20, 4, 1], k = 3;
// i < k, dp[i] = Math.max(arr.slice(0, i)) * (i+1)
// i >= k, dp[i] = Math.max(
//   dp[i-1] + arr[i],
//   dp[i-2] + Math.max(arr.slice(i-1, i+1)) * 2,
//   dp[i-3] + Math.max(arr.slice(i-2, i+1)) * 3,
// )

// O(n*k*k)
// Math.max(arr) 这个操作很费时
// 执行用时：
// 220 ms, 在所有 JavaScript 提交中击败了 7.59% 的用户
// 内存消耗：
// 47.1 MB, 在所有 JavaScript 提交中击败了 5.97% 的用户
const maxSumAfterPartitioning1 = (arr, k) => {
  const dp = [];
  const len = arr.length;
  for (let i = 0; i < k; i++) {
    dp[i] = Math.max.apply(null, arr.slice(0, i + 1)) * (i + 1);
  }
  for (let i = k; i < len; i++) {
    let max = 0;
    for (let j = 0; j < k; j++) {
      max = Math.max(dp[i - j - 1] + Math.max.apply(null, arr.slice(i - j, i + 1)) * (j + 1), max);
    }
    dp[i] = max;
  }
  return dp[len - 1];
};

// O(n*k)
// 每次遍历的时候其实都可以动态的修改 maxNum，就不用去 Math.max() 了
// 执行用时：
// 40 ms, 在所有 JavaScript 提交中击败了 100.00% 的用户
// 内存消耗：
// 41.7 MB, 在所有 JavaScript 提交中击败了 12.66% 的用户
const maxSumAfterPartitioning2 = (arr, k) => {
  const dp = [];
  const len = arr.length;
  let maxNum = 0;
  for (let i = 0; i < k; i++) {
    if (arr[i] > maxNum) maxNum = arr[i];
    dp[i] = maxNum * (i + 1);
  }
  for (let i = k; i < len; i++) {
    let max = 0;
    maxNum = 0;
    for (let j = 0; j < k; j++) {
      if (arr[i - j] > maxNum) maxNum = arr[i - j];
      max = Math.max(dp[i - j - 1] + maxNum * (j + 1), max);
    }
    dp[i] = max;
  }
  return dp[len - 1];
};

const arr = [1, 15, 7, 9, 2, 5, 10],
  k = 3;

// const arr = Array.from({ length: 100 }, () => Math.round(Math.random() * 100)),
//   k = 4;

console.log(maxSumAfterPartitioning1(arr, k));

// const { pressureTest, mockNumArr } = require('../lib/utils');
// pressureTest(
//   maxSumAfterPartitioning1,
//   () => mockNumArr(999, 1000),
//   () => 2
// ).then(t => console.log(t));
