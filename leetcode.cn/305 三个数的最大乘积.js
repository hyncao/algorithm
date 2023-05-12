// 628. 三个数的最大乘积

// 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

// 输入：nums = [1,2,3]
// 输出：6

// 输入：nums = [1,2,3,4]
// 输出：24

// 输入：nums = [-1,-2,-3]
// 输出：-6

// 执行用时：
// 96 ms, 在所有 JavaScript 提交中击败了 87.43% 的用户
// 内存消耗：
// 45.7 MB, 在所有 JavaScript 提交中击败了 65.64% 的用户
const maximumProduct1 = nums => {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  if (nums[1] < 0 && nums[len - 1] >= 0) {
    return Math.max(nums[0] * nums[1], nums[len - 2] * nums[len - 3]) * nums[len - 1];
  }
  return nums[len - 1] * nums[len - 2] * nums[len - 3];
};

// 改写方法1
const maximumProduct2 = nums => {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  return Math.max(nums[len - 1] * nums[0] * nums[1], nums[len - 1] * nums[len - 2] * nums[len - 3]);
};

// 观察得知，我们只需要拿到最大的三个数和最小的两个数即可，那么试试一次遍历
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 96.93% 的用户
// 内存消耗：
// 43.7 MB, 在所有 JavaScript 提交中击败了 94.13% 的用户
const maximumProduct3 = nums => {
  let max1 = -Infinity; // 第一大
  let max2 = -Infinity; // 第二大
  let max3 = -Infinity; // 第三大
  let min1 = Infinity; // 第一小
  let min2 = Infinity; // 第二小
  for (const i of nums) {
    if (i > max1) {
      max3 = max2;
      max2 = max1;
      max1 = i;
    } else if (i > max2) {
      max3 = max2;
      max2 = i;
    } else if (i > max3) {
      max3 = i;
    }
    if (i < min1) {
      min2 = min1;
      min1 = i;
    } else if (i < min2) {
      min2 = i;
    }
  }
  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};

const nums = [-1, -2, -3, -4];

console.log(maximumProduct3(nums));
