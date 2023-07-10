// 1005. K 次取反后最大化的数组和
// 给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：

// 选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
// 重复这个过程恰好 k 次。可以多次选择同一个下标 i 。

// 以这种方式修改数组后，返回数组 可能的最大和 。

// 输入：nums = [4,2,3], k = 1
// 输出：5
// 解释：选择下标 1 ，nums 变为 [4,-2,3] 。

// 输入：nums = [3,-1,0,2], k = 3
// 输出：6
// 解释：选择下标 (1, 2, 2) ，nums 变为 [3,1,0,2] 。

// 输入：nums = [2,-3,-1,5,-4], k = 2
// 输出：13

// 思考：
// negative 为负数的个数
// 1. k <= negative
// 从小到大，将负数变为正数
// 2. k > negative
// 将所有的负数变为正数
// 2.1. k - negative 为偶数，不作任何操作
// 2.2. k - negative 为奇数，将最接近 0 的数变为负数

// O(n*log(n)) O(1)
// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 97.42% 的用户
// 内存消耗：
// 41.1 MB, 在所有 JavaScript 提交中击败了 98.89% 的用户
const largestSumAfterKNegations = (nums, k) => {
  let negative = 0;
  let closetZero = Number.MAX_SAFE_INTEGER;
  let res = 0;
  const n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    const current = nums[i];
    if (current < 0) {
      res += k > 0 ? 0 - current : current;
      k--;
    } else res += current;
    closetZero = Math.min(closetZero, Math.abs(current));
  }
  if (k > 0) {
    res -= (k & 1) === 1 ? 2 * closetZero : 0;
  }
  return res;
};

const nums = [4,2,3], k = 1;

console.log(largestSumAfterKNegations(nums, k));
