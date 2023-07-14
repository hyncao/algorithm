// 1013. 将数组分成和相等的三个部分

// 给你一个整数数组 arr，只有可以将其划分为三个和相等的 非空 部分时才返回 true，否则返回 false。

// 形式上，如果可以找出索引 i + 1 < j 且满足 (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1]) 就可以将数组三等分。

// 输入：arr = [0,2,1,-6,6,-7,9,1,2,0,1]
// 输出：true
// 解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1

// 输入：arr = [0,2,1,-6,6,7,9,-1,2,0,1]
// 输出：false

// 输入：arr = [3,3,6,5,-2,2,5,1,-9,4]
// 输出：true

// O(n) O(n)
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 64.10% 的用户
// 内存消耗：
// 48.7 MB, 在所有 JavaScript 提交中击败了 11.11% 的用户
const canThreePartsEqualSum1 = arr => {
  const n = arr.length;
  let prev = 0;
  const sum = [];
  for (const i of arr) {
    sum.push((prev += i));
  }
  const res = sum[n - 1];
  if (res % 3 !== 0) return false;
  let first = false;
  let second = false;
  for (let i = 0; i < n - 1; i++) {
    if (!first && sum[i] === res / 3) {
      first = true;
    } else if (!second && sum[i] === (res / 3) * 2) {
      second = first;
    }
  }
  return first && second;
};

// O(n) O(1)
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了94.02%的用户
// 内存消耗：
// 44.9 MB, 在所有 JavaScript 提交中击败了 91.45% 的用户
const canThreePartsEqualSum2 = arr => {
  const n = arr.length;
  let prev = 0;
  let sum = 0;
  for (const i of arr) {
    sum += i;
  }
  if (sum % 3 !== 0) return false;
  let first = false;
  let second = false;
  let third = false;
  for (let i = 0; i < n; i++) {
    prev += arr[i];
    if (!first && prev === sum / 3) {
      first = true;
      prev = 0;
    } else if (!second && prev === sum / 3) {
      second = first;
      prev = 0;
    } else if (i === n - 1 && prev === sum / 3) {
      third = true;
    }
  }
  return first && second && third;
};

const arr = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];

console.log(canThreePartsEqualSum2(arr));
