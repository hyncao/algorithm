// 448. 找到所有数组中消失的数字

// 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。

// 输入：nums = [4,3,2,7,8,2,3,1]
// 输出：[5,6]

// 输入：nums = [1,1]
// 输出：[2]

// 提示：

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
// 进阶：你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。

// 执行用时：
// 108 ms, 在所有 JavaScript 提交中击败了 54.03% 的用户
// 内存消耗：
// 54.7 MB, 在所有 JavaScript 提交中击败了 17.46% 的用户
const findDisappearedNumbers = nums => {
  const res = new Set(
    Array(nums.length)
      .fill()
      .map((_, index) => index + 1)
  );
  for (const i of nums) {
    res.delete(i);
  }
  return [...res];
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(findDisappearedNumbers(nums));
