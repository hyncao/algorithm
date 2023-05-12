// 219. 存在重复元素 II

// 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。

// 输入：nums = [1,2,3,1], k = 3
// 输出：true

// 输入：nums = [1,2,3,1,2,3], k = 2
// 输出：false

// 执行用时：
// 96 ms, 在所有 JavaScript 提交中击败了74.23%的用户
// 内存消耗：
// 64.3 MB, 在所有 JavaScript 提交中击败了 33.56% 的用户
const containsNearbyDuplicate = (nums, k) => {
  const m = new Map();
  let i = 0;
  while (i < nums.length) {
    if (m.get(nums[i]) > -1) {
      if (i - m.get(nums[i]) <= k) return true;
    }
    m.set(nums[i], i);
    i++;
  }
  return false;
};

const nums = [1, 0, 1, 1];
const k = 1;

console.log(containsNearbyDuplicate(nums, k));
