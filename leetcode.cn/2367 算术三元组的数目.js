// 2367. 算术三元组的数目

// 给你一个下标从 0 开始、严格递增 的整数数组 nums 和一个正整数 diff 。如果满足下述全部条件，则三元组 (i, j, k) 就是一个 算术三元组 ：

// i < j < k ，
// nums[j] - nums[i] == diff 且
// nums[k] - nums[j] == diff
// 返回不同 算术三元组 的数目。

// 输入：nums = [0,1,4,6,7,10], diff = 3
// 输出：2
// 解释：
// (1, 2, 4) 是算术三元组：7 - 4 == 3 且 4 - 1 == 3 。
// (2, 4, 5) 是算术三元组：10 - 7 == 3 且 7 - 4 == 3 。

// 输入：nums = [4,5,6,7,8,9], diff = 2
// 输出：2
// 解释：
// (0, 2, 4) 是算术三元组：8 - 6 == 2 且 6 - 4 == 2 。
// (1, 3, 5) 是算术三元组：9 - 7 == 2 且 7 - 5 == 2 。

// 注：本题目力扣的样式数量很少，nums.length < 200，所以算法的时间复杂度并没有拉开，还是 O(n) 快得多

// 由于 nums 是递增的，所以遍历的时候如果找到两个数差值大于 diff，则后面的数更大，可以直接break
// 实际上时间复杂度少于 O(n²)
// 时间复杂度：O(n²) > O > O(n)
// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 93.33% 的用户
// 内存消耗：
// 41.2 MB, 在所有 JavaScript 提交中击败了 51.11% 的用户
const arithmeticTriplets1 = (nums, diff) => {
  let res = 0;
  const len = nums.length;
  let first = 0;
  while (first < len - 2) {
    let second = first + 1;
    while (second < len - 1) {
      if (nums[first] + diff < nums[second]) {
        break;
      }
      if (nums[first] + diff === nums[second]) {
        let third = second + 1;
        while (third < len) {
          if (nums[second] + diff < nums[third]) {
            break;
          }
          if (nums[second] + diff === nums[third]) {
            res++;
            break;
          }
          if (nums[second] + diff > nums[third]) {
            third++;
          }
        }
        break;
      }
      if (nums[first] + diff > nums[second]) {
        second++;
      }
    }
    first++;
  }
  return res;
};

// 严格的时间复杂度为 O(2n)
// O(n)
// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 93.33% 的用户
// 内存消耗：
// 41.6 MB, 在所有 JavaScript 提交中击败了 24.45% 的用户
const arithmeticTriplets2 = (nums, diff) => {
  const s = new Set(nums);
  let res = 0;
  for (const i of nums) {
    if (s.has(i + diff) && s.has(i + 2 * diff)) res++;
  }
  return res;
};

const nums = [0, 1, 4, 6, 7, 10],
  diff = 3;

console.log(arithmeticTriplets2(nums, diff));
