// 941. 有效的山脉数组

// 给定一个整数数组 arr，如果它是有效的山脉数组就返回 true，否则返回 false。

// 让我们回顾一下，如果 arr 满足下述条件，那么它是一个山脉数组：

// arr.length >= 3
// 在 0 < i < arr.length - 1 条件下，存在 i 使得：
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]

// 输入：arr = [2,1]
// 输出：false

// 输入：arr = [3,5,5]
// 输出：false

// 输入：arr = [0,3,2,1]
// 输出：true

// O(n) O(1)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 94.21% 的用户
// 内存消耗：
// 43.2 MB, 在所有 JavaScript 提交中击败了 94.74% 的用户
const validMountainArray1 = arr => {
  let up = true;
  let first = false;
  const len = arr.length;
  if (len < 3) return false;
  for (let i = 1; i < len; i++) {
    if (arr[i] > arr[i - 1] && (!up || i === len - 1)) return false;
    if (arr[i] < arr[i - 1]) {
      if (i === 1) return false;
      if (!first) {
        up = false;
        continue;
      }
      if (up) return false;
    }
    if (arr[i] === arr[i - 1]) return false;
  }
  return true;
};

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 78.95% 的用户
// 内存消耗：
// 43.5 MB, 在所有 JavaScript 提交中击败了 45.79% 的用户
const validMountainArray2 = arr => {
  const len = arr.length;
  if (len < 3) return false;
  let left = 0;
  let right = len - 1;
  for (let i = 1; i < len; i++) {
    if (arr[i] === arr[i - 1]) return false;
    if (arr[i] > arr[i - 1]) left = i;
    else break;
  }
  if (left === right) return false;
  for (let i = right - 1; i < len; i--) {
    if (arr[i] === arr[i + 1]) return false;
    if (arr[i] > arr[i + 1]) right = i;
    else break;
  }
  if (right === 0) return false;
  return left === right;
};

const arr = [3, 2, 1];

console.log(validMountainArray2(arr));
