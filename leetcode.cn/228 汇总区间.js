// 228. 汇总区间

// 给定一个  无重复元素 的 有序 整数数组 nums 。
// 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。
// 其实就是连续段

// 输入：nums = [0,1,2,4,5,7]
// 输出：["0->2","4->5","7"]

// 输入：nums = [0,2,3,4,6,8,9]
// 输出：["0","2->4","6","8->9"]

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了61.28%的用户
// 内存消耗：
// 41.2 MB, 在所有 JavaScript 提交中击败了 20.05% 的用户
const summaryRanges1 = nums => {
  if (nums.length === 0) return nums;
  if (nums.length === 1) return [`${nums[0]}`];
  const res = [];
  let prev = nums[0];
  let linear = false; // 是否线性
  for (let i = 1; i < nums.length; i++) {
    if (i === nums.length - 1) {
      // 最后一项
      if (nums[i] - nums[i - 1] === 1) {
        res.push(`${prev}->${nums[i]}`);
      } else {
        if (linear) {
          res.push(`${prev}->${nums[i - 1]}`);
        } else {
          res.push(`${prev}`);
        }
        res.push(`${nums[i]}`);
      }
    } else {
      if (nums[i] - nums[i - 1] !== 1) {
        if (linear) {
          res.push(`${prev}->${nums[i - 1]}`);
        } else {
          res.push(`${prev}`);
        }
        prev = nums[i];
        linear = false;
      } else {
        linear = true;
      }
    }
  }

  return res;
};

// 双指针
const summaryRanges2 = nums => {

};

const nums = [0, 2, 3, 4, 6, 8, 9];

console.log(summaryRanges2(nums));
