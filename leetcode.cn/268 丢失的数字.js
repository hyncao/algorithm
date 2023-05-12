// 268. 丢失的数字

// 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。

// 输入：nums = [3,0,1]
// 输出：2

// 输入：nums = [9,6,4,2,3,5,7,0,1]
// 输出：8

// 输入：nums = [0]
// 输出：1

// 利用 Set.has 快速寻找 O(n)
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 75.95% 的用户
// 内存消耗：
// 46.7 MB, 在所有 JavaScript 提交中击败了 7.81% 的用户
const missingNumber1 = nums => {
  const s = new Set(nums);
  for (let i = 0; i < nums.length + 1; i++) {
    if (!s.has(i)) return i;
  }
};

// 先排序 O(n*log(n))
// 执行用时：
// 96 ms, 在所有 JavaScript 提交中击败了 26.21% 的用户
// 内存消耗：
// 43.3 MB, 在所有 JavaScript 提交中击败了 42.45% 的用户
const missingNumber2 = nums => {
  const sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (i !== sorted[i]) return i;
  }
  return nums.length;
};

const nums = [0];

console.log(missingNumber2(nums));
