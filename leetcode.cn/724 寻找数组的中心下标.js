// 724. 寻找数组的中心下标

// 给你一个整数数组 nums ，请计算数组的 中心下标 。

// 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。

// 如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。

// 如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。

// 输入：nums = [1, 7, 3, 6, 5, 6]
// 输出：3
// 解释：
// 中心下标是 3 。
// 左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，
// 右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。

// 输入：nums = [1, 2, 3]
// 输出：-1
// 解释：
// 数组中不存在满足此条件的中心下标。

// 输入：nums = [2, 1, -1]
// 输出：0

// 前缀和
// 执行用时：
// 84 ms, 在所有 JavaScript 提交中击败了 34.71% 的用户
// 内存消耗：
// 44.8 MB, 在所有 JavaScript 提交中击败了 14.32% 的用户
const pivotIndex1 = nums => {
  const sumArr = [];
  const len = nums.length;
  for (const i of nums) {
    sumArr.push((sumArr[sumArr.length - 1] || 0) + i);
  }
  const sum = sumArr[len - 1];
  for (let i = 0; i < len; i++) {
    if (
      (i === 0 && sum - sumArr[i] === 0) ||
      (i === len - 1 && sumArr[i - 1] === 0) ||
      sumArr[i - 1] === sum - sumArr[i]
    ) {
      return i;
    }
  }
  return -1;
};

// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 72.26% 的用户
// 内存消耗：
// 43.5 MB, 在所有 JavaScript 提交中击败了 27.75% 的用户
const pivotIndex2 = nums => {
  let sum = 0;
  let prev = 0;
  const len = nums.length;
  for (const i of nums) {
    sum += i;
  }
  for (let i = 0; i < len; i++) {
    if (((i === 0 || i === len - 1) && sum - nums[i] === 0) || prev === sum - prev - nums[i]) {
      return i;
    }
    prev += nums[i];
  }
  return -1;
};

const nums = [-1, 1, -2];

console.log(pivotIndex2(nums));
