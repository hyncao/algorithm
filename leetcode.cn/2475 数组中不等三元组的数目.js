// 2475. 数组中不等三元组的数目

// 给你一个下标从 0 开始的正整数数组 nums 。请你找出并统计满足下述条件的三元组 (i, j, k) 的数目：

// 0 <= i < j < k < nums.length
// nums[i]、nums[j] 和 nums[k] 两两不同 。
// 换句话说：nums[i] != nums[j]、nums[i] != nums[k] 且 nums[j] != nums[k] 。
// 返回满足上述条件三元组的数目。

// 输入：nums = [4,4,2,4,3]
// 输出：3
// 解释：下面列出的三元组均满足题目条件：
// - (0, 2, 4) 因为 4 != 2 != 3
// - (1, 2, 4) 因为 4 != 2 != 3
// - (2, 3, 4) 因为 2 != 4 != 3
// 共计 3 个三元组，返回 3 。
// 注意 (2, 0, 4) 不是有效的三元组，因为 2 > 0 。

// 输入：nums = [1,1,1,1,1]
// 输出：0

// O(n³) O(1)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 87.10% 的用户
// 内存消耗：
// 41.1 MB, 在所有 JavaScript 提交中击败了 62.90% 的用户
const unequalTriplets1 = nums => {
  let res = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[j] === nums[i]) continue;
      for (let k = j + 1; k < len; k++) {
        if (nums[k] === nums[i] || nums[k] === nums[j]) continue;
        res++;
      }
    }
  }
  return res;
};

// O(n) O(n)
// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 95.16% 的用户
// 内存消耗：
// 42.5 MB, 在所有 JavaScript 提交中击败了 17.74% 的用户
const unequalTriplets2 = nums => {
  const map = {};
  const len = nums.length;
  for (const i of nums) {
    map[i] = (map[i] || 0) + 1;
  }
  let res = 0;
  let prev = 0;
  for (const i in map) {
    res += map[i] * prev * (len - prev - map[i]);
    prev += map[i];
  }
  return res;
};

const nums = [4, 4, 2, 4, 3];

console.log(unequalTriplets2(nums));
