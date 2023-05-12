// 350. 两个数组的交集 II

// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

// 输入：nums1 = [1,2,2,2], nums2 = [2,2]
// 输出：[2,2]

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]

// 注意：题目描述有点歧义，翻译一下：返回的是交集，而且无需去重，可乱序

// 一边遍历一边摘除长数组元素 O(n)
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 73.50% 的用户
// 内存消耗：
// 41.2 MB, 在所有 JavaScript 提交中击败了 97.31% 的用户
const intersect1 = (nums1, nums2) => {
  const short = nums1.length > nums2.length ? nums2 : nums1;
  const long = nums1.length > nums2.length ? nums1 : nums2;
  const res = [];
  for (let i = 0; i < short.length; i++) {
    const index = long.indexOf(short[i]);
    if (index > -1) {
      res.push(short[i]);
      long.splice(index, 1);
    }
  }
  return res;
};

// 先排序再遍历 O(nlog(n))
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 31.35% 的用户
// 内存消耗：
// 46.9 MB, 在所有 JavaScript 提交中击败了 5.00% 的用户
const intersect2 = (nums1, nums2) => {
  const short = nums1.length > nums2.length ? nums2 : nums1;
  const long = nums1.length > nums2.length ? nums1 : nums2;
  short.sort((a, b) => a - b);
  long.sort((a, b) => a - b);
  const res = [];
  let mark = 0;
  for (let i = 0; i < short.length; i++) {
    const index = long.slice(mark).indexOf(short[i]);
    if (index > -1) {
      res.push(short[i]);
      mark += index + 1;
    }
  }
  return res;
};

const nums1 = [1, 2];
const nums2 = [2];

console.log(intersect1(nums1, nums2));
