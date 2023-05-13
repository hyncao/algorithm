// 2441. 与对应负数同时存在的最大正整数

// 给你一个 不包含 任何零的整数数组 nums ，找出自身与对应的负数都在数组中存在的最大正整数 k 。

// 返回正整数 k ，如果不存在这样的整数，返回 -1 。

// 输入：nums = [-1,2,-3,3]
// 输出：3
// 解释：3 是数组中唯一一个满足题目要求的 k 。

// 输入：nums = [-1,10,6,7,-7,1]
// 输出：7
// 解释：数组中存在 1 和 7 对应的负数，7 的值更大。

// 输入：nums = [-10,8,6,7,-2,-3]
// 输出：-1

// O(n) O(n)
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 94.05% 的用户
// 内存消耗：
// 43.8 MB, 在所有 JavaScript 提交中击败了 28.57% 的用户
const findMaxK1 = nums => {
  let max = -1;
  const s = new Set(nums);
  for (const i of s) {
    if (i > max && s.has(0 - i)) max = i;
  }
  return max;
};

// 排序有log(n)的空间复杂度
// O(n*log(n)) O(log(n))
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 84.52% 的用户
// 内存消耗：
// 43.1 MB, 在所有 JavaScript 提交中击败了 69.05% 的用户
const findMaxK2 = nums => {
  const len = nums.length;
  let left = 0;
  let right = len-1;
  nums.sort((a,b)=>a-b);
  while (nums[right] > 0) {
    const sum = nums[right] + nums[left]
    if (sum === 0) return nums[right];
    if (sum < 0) left++;
    if (sum > 0) right--;
  }
  return -1;
};
const nums = [-1, 10, 6, 7, -7, 1];

console.log(findMaxK2(nums));
