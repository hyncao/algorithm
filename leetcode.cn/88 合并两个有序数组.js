// 88. 合并两个有序数组

// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

// 注: 不是输出, 是改变原数组 nums1

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]

// 输入：nums1 = [1], m = 1, nums2 = [], n = 0
// 输出：[1]

// 逆向双指针 O(m + n)
// 重点: 循环结束条件为 nums2 数组被拿空
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了48.14%的用户
// 内存消耗：
// 41.1 MB, 在所有 JavaScript 提交中击败了 51.69% 的用户
const merge = (nums1, m, nums2, n) => {
  let index1 = m - 1;
  let index2 = n - 1;
  for (let index = nums1.length - 1; index2 >= 0; index--) {
    if (nums1[index1] > nums2[index2]) {
      nums1[index] = nums1[index1];
      index1--;
    } else {
      nums1[index] = nums2[index2];
      index2--;
    }
  }
};

const nums1 = [0];
const m = 0;
const nums2 = [1];
const n = 1;

merge(nums1, m, nums2, n);
console.log(nums1);
