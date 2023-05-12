// 414. 第三大的数

// 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。

// 输入：[3, 2, 1]
// 输出：1
// 解释：第三大的数是 1 。

// 输入：[1, 2]
// 输出：2
// 解释：第三大的数不存在, 所以返回最大的数 2 。

// 输入：[2, 2, 3, 1]
// 输出：1
// 解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
// 此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。

// 提示：

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// 进阶：你能设计一个时间复杂度 O(n) 的解决方案吗？

// O(n)
// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 98.33% 的用户
// 内存消耗：
// 40.7 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
const thirdMax = nums => {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      third = second;
      second = first;
      first = nums[i];
    } else if (nums[i] > second && nums[i] < first) {
      third = second;
      second = nums[i];
    } else if (nums[i] > third && nums[i] < second) {
      third = nums[i];
    }
  }
  return third === -Infinity ? first : third;
};

const nums = [2, 3, 3, 3, 3, 2, 2, 1];

console.log(thirdMax(nums));
