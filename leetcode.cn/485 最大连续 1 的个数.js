// 485. 最大连续 1 的个数

// 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。

// 输入：nums = [1,1,0,1,1,1]
// 输出：3

// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 45.64% 的用户
// 内存消耗：
// 45 MB, 在所有 JavaScript 提交中击败了 16.91% 的用户
const findMaxConsecutiveOnes1 = nums => {
  const arr = nums.join('').split('0');
  return arr.reduce((prev, current) => Math.max(prev, current.length), 0);
};

// DP 直接操作原数组，省空间，当前项和后一项都是不为 0 的时候，将后一项累加当前项
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 83.64% 的用户
// 内存消耗：
// 43.5 MB, 在所有 JavaScript 提交中击败了 60.18% 的用户
const findMaxConsecutiveOnes2 = nums => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] && nums[i + 1]) {
      nums[i + 1] += nums[i];
    }
  }
  return Math.max(...nums);
};

const nums = [1, 1, 0, 1, 1, 1];

console.log(findMaxConsecutiveOnes2(nums));
