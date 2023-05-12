// 747. 至少是其他数字两倍的最大数

// 给你一个整数数组 nums ，其中总是存在 唯一的 一个最大整数 。

// 请你找出数组中的最大元素并检查它是否 至少是数组中每个其他数字的两倍 。如果是，则返回 最大元素的下标 ，否则返回 -1 。

// 输入：nums = [3,6,1,0]
// 输出：1
// 解释：6 是最大的整数，对于数组中的其他整数，6 至少是数组中其他元素的两倍。6 的下标是 1 ，所以返回 1 。

// 输入：nums = [1,2,3,4]
// 输出：-1
// 解释：4 没有超过 3 的两倍大，所以返回 -1 。

// 输入：nums = [1]
// 输出：0

// 思考：只要看最大数和第二大数能否满足大两倍就行

// O(n) O(1)
// 执行用时：
// 48 ms, 在所有 JavaScript 提交中击败了 98.88% 的用户
// 内存消耗：
// 41 MB, 在所有 JavaScript 提交中击败了 84.83% 的用户
const dominantIndex = nums => {
  const len = nums.length;
  if (len === 1) return 0;
  let res = 0;
  let first = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < len; i++) {
    const current = nums[i];
    if (current > first) {
      second = first;
      first = current;
      res = i;
    } else if (current > second) {
      second = current;
    }
  }
  return first >= second * 2 ? res : -1;
};

const nums = [
  437, 619, 493, 370, 224, 320, 159, 603, 792, 596, 817, 12, 8, 608, 51, 828, 895, 510, 28, 49, 465, 613, 587, 342, 635,
  741, 357, 147, 361, 632, 491, 359, 4830, 976, 79, 285, 945, 365, 335, 89, 74, 83, 122, 833, 336, 272, 90, 956, 532, 77,
];

console.log(dominantIndex(nums));
