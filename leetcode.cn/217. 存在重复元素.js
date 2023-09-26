// 217. 存在重复元素

// 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。

// 执行用时：
// 80 ms, 在所有 JavaScript 提交中击败了 76.77% 的用户
// 内存消耗：
// 49.5 MB, 在所有 JavaScript 提交中击败了 58.77% 的用户
const containsDuplicate = nums => {
  return nums.length !== [...new Set(nums)].length;
};

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(nums));
