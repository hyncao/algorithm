// 896. 单调数列

// 如果数组是单调递增或单调递减的，那么它是 单调 的。

// 如果对于所有 i <= j，nums[i] <= nums[j]，那么数组 nums 是单调递增的。 如果对于所有 i <= j，nums[i]> = nums[j]，那么数组 nums 是单调递减的。

// 当给定的数组 nums 是单调数组时返回 true，否则返回 false。

// 输入：nums = [1,2,2,3]
// 输出：true

// 输入：nums = [6,5,4,4]
// 输出：true

// 输入：nums = [1,3,2]
// 输出：false

// O(n) O(1)
// 执行用时：
// 76 ms, 在所有 JavaScript 提交中击败了 96.97% 的用户
// 内存消耗：
// 52.3 MB, 在所有 JavaScript 提交中击败了 70.20% 的用户
const isMonotonic = nums => {
  let direction = null;
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    if (direction === null) {
      if (nums[i] > nums[i - 1]) direction = true;
      if (nums[i] < nums[i - 1]) direction = false;
    }
    if (direction && nums[i] < nums[i - 1]) return false;
    if (!direction && nums[i] > nums[i - 1]) return false;
  }
  return true;
};

const nums = [1];

console.log(isMonotonic(nums));
