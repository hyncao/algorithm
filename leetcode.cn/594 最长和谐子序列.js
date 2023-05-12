// 594. 最长和谐子序列

// 和谐数组是指一个数组里元素的最大值和最小值之间的差别 正好是 1 。

// 现在，给你一个整数数组 nums ，请你在所有可能的子序列中找到最长的和谐子序列的长度。

// 数组的子序列是一个由数组派生出来的序列，它可以通过删除一些元素或不删除元素、且不改变其余元素的顺序而得到。

// 输入：nums = [1,3,2,2,5,2,3,7]
// 输出：5
// 解释：最长的和谐子序列是 [3,2,2,2,3]

// 输入：nums = [1,2,3,4]
// 输出：2

// 输入：nums = [1,1,1,1]
// 输出：0

// 执行用时：
// 112 ms, 在所有 JavaScript 提交中击败了 61.65% 的用户
// 内存消耗：
// 45.9 MB, 在所有 JavaScript 提交中击败了 86.89% 的用户
const findLHS = nums => {
  nums.sort((a, b) => a - b);
  let res = 0;
  let prev = 0;
  for (let end = 0; end < nums.length; end++) {
    while (nums[end] - nums[prev] > 1) {
      prev++;
    }
    if (nums[end] - nums[prev] === 1) {
      res = Math.max(res, end - prev + 1);
    }
  }
  return res;
};

const nums = [1, 3, 2, 2, 5, 2, 3, 7];

console.log(findLHS(nums));
