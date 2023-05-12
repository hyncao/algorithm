// 1590. 使数组和能被 P 整除

// TODO

// https://leetcode.cn/problems/make-sum-divisible-by-p/

// 给你一个正整数数组 nums，请你移除 最短 子数组（可以为 空），使得剩余元素的 和 能被 p 整除。 不允许 将整个数组都移除。

// 请你返回你需要移除的最短子数组的长度，如果无法满足题目要求，返回 -1 。

// 子数组 定义为原数组中连续的一组元素。

// 输入：nums = [3,1,4,2], p = 6
// 输出：1

// 输入：nums = [6,3,5,2], p = 9
// 输出：2

// O(nlog(n)) 力扣炸了
const minSubarray = (nums, p) => {
  let len = nums.length;
  let res = nums.length;
  const sum = nums.reduce((p, c) => p.concat((p[p.length - 1] || 0) + c), []);
  if (sum[len - 1] % p === 0) return 0;
  for (let i = sum.length - 1; i >= 0; i--) {
    if ((sum[len - 1] - sum[i]) % p === 0) res = Math.min(res, i + 1);
    for (let j = 0; j < i; j++) {
      if ((sum[len - 1] - sum[i] + sum[j]) % p === 0) {
        res = Math.min(res, i - j);
      }
    }
  }
  return res === len ? -1 : res;
};

const nums = [6, 3, 5, 2];
const p = 9;

console.log(minSubarray(nums, p));

["a", "a", "1", "1", "a", "1", "1", "1", "a", "a"];
