// 704. 二分查找

// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4

// 输入: nums = [-1,0,3,5,9,12], target = 2
// 输出: -1
// 解释: 2 不存在 nums 中因此返回 -1

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 68.26% 的用户
// 内存消耗：
// 43.8 MB, 在所有 JavaScript 提交中击败了 82.09% 的用户
const search = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const m = (l + r) >> 1;
    if (target > nums[m]) {
      l = m + 1;
    } else if (target < nums[m]) {
      r = m - 1;
    } else {
      return m;
    }
  }
  return l === r ? l : -1;
};

const nums = [-1,0,3,5,9,12],
  target = 4;

console.log(search(nums, target));
