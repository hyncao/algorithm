// 35. 搜索插入位置

// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

// nums 为 无重复元素 的 升序 排列数组

// 输入: nums = [1,3,5,6], target = 5
// 输出: 2

// 输入: nums = [1,3,5,6], target = 2
// 输出: 1

// 输入: nums = [1,3,5,6], target = 7
// 输出: 4

// 二分法
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 66.72% 的用户
// 内存消耗：
// 41.5 MB, 在所有 JavaScript 提交中击败了 9.55% 的用户
const searchInsert1 = (nums, target, start = 0) => {
  if (nums[0] === target) {
    return 0 + start;
  }
  if (nums[nums.length - 1] === target) {
    return nums.length - 1 + start;
  }
  if (nums[nums.length - 1] < target) {
    return nums.length + start;
  }
  if (nums[0] > target) {
    return 0;
  }
  if (nums.length === 2) {
    return 1 + start;
  }
  const middle = Math.floor(nums.length / 2);
  if (nums.slice(0, middle)[middle - 1] >= target) {
    return searchInsert1(nums.slice(0, middle), target, 0 + start);
  } else if (nums.slice(middle)[0] <= target) {
    return searchInsert1(nums.slice(middle), target, middle + start);
  } else {
    return middle + start;
  }
};

// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 95.11% 的用户
// 内存消耗：
// 41.2 MB, 在所有 JavaScript 提交中击败了 38.88% 的用户
const searchInsert2 = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = ((right - left) >> 1) + left;
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
};

const nums = [1, 3, 5, 7, 9];
const target = 6;

console.log(searchInsert2(nums, target));
