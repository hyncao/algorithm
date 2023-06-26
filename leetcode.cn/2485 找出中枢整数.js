// 2485. 找出中枢整数

// 给你一个正整数 n ，找出满足下述条件的 中枢整数 x ：

// 1 和 x 之间的所有元素之和等于 x 和 n 之间所有元素之和。
// 返回中枢整数 x 。如果不存在中枢整数，则返回 -1 。题目保证对于给定的输入，至多存在一个中枢整数。

// 输入：n = 8
// 输出：6
// 解释：6 是中枢整数，因为 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21 。

// 输入：n = 1
// 输出：1
// 解释：1 是中枢整数，因为 1 = 1 。

// 输入：n = 4
// 输出：-1

// O(2n) O(n)
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 52.63% 的用户
// 内存消耗：
// 42.8 MB, 在所有 JavaScript 提交中击败了 14.03% 的用户
const pivotInteger1 = n => {
  const arr = Array.from({ length: n + 1 }, (_, k) => k);
  for (let i = 1; i < n + 1; i++) {
    arr[i] += arr[i - 1];
  }
  const last = arr[n];
  for (let i = 0; i < n + 1; i++) {
    if (arr[i] - i === last - arr[i]) return i;
  }
  return -1;
};

// O(n+log(n)) O(n)
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 52.63% 的用户
// 内存消耗：
// 42.6 MB, 在所有 JavaScript 提交中击败了 14.03% 的用户
const pivotInteger2 = n => {
  const arr = Array.from({ length: n + 1 }, (_, k) => k);
  for (let i = 1; i < n + 1; i++) {
    arr[i] += arr[i - 1];
  }
  const last = arr[n];
  let left = 0;
  let right = n;
  while (left <= right) {
    const middle = (left + right) >> 1;
    const leftSum = arr[middle] - middle;
    const rightSum = last - arr[middle];
    if (leftSum === rightSum) return middle;
    if (leftSum < rightSum) left = middle + 1;
    if (leftSum > rightSum) right = middle - 1;
  }
  return -1;
};

// O(1) O(1)
// 执行用时：
// 48 ms, 在所有 JavaScript 提交中击败了 100.00% 的用户
// 内存消耗：
// 40.9 MB, 在所有 JavaScript 提交中击败了 87.72% 的用户
const pivotInteger3 = n => {
  let t = (n * n + n) / 2;
  let x = parseInt(Math.sqrt(t));
  if (x * x === t) {
    return x;
  }
  return -1;
};

const n = 1;

console.log(pivotInteger3(n));
