// 349. 两个数组的交集

// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4] 或者 [4,9]

// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 97.97% 的用户
// 内存消耗：
// 42.6 MB, 在所有 JavaScript 提交中击败了 40.38% 的用户
const intersection = (nums1, nums2) => {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);
  const target = s1.size > s2.size ? [...s2] : [...s1];
  const find = s1.size > s2.size ? s1 : s2;
  const res = [];
  for (let i = 0; i < target.length; i++) {
    if (find.has(target[i])) res.push(target[i]);
  }
  return res;
};

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 4, 9, 8, 4];

console.log(intersection(nums1, nums2));
