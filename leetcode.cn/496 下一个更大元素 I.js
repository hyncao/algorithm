// 496. 下一个更大元素 I

// nums1 中数字 x 的 下一个更大元素 是指 x 在 nums2 中对应位置 右侧 的 第一个 比 x 大的元素。

// 给你两个 没有重复元素 的数组 nums1 和 nums2 ，下标从 0 开始计数，其中nums1 是 nums2 的子集。

// 对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j ，并且在 nums2 确定 nums2[j] 的 下一个更大元素。

// 如果不存在下一个更大元素，那么本次查询的答案是 -1 。

// 返回一个长度为 nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素 。

// 输入：nums1 = [4,1,2], nums2 = [1,3,4,2].
// 输出：[-1,3,-1]

// 输入：nums1 = [2,4], nums2 = [1,2,3,4].
// 输出：[3,-1]

// 开莽
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 82.37% 的用户
// 内存消耗：
// 46.9 MB, 在所有 JavaScript 提交中击败了 5.07% 的用户
const nextGreaterElement1 = (nums1, nums2) => {
  return nums1.map(item => {
    const index = nums2.indexOf(item);
    return nums2.slice(index + 1).find(x => x > item) || -1;
  });
};

// nums1 为数组，说明需要查询 nums1.length 次, 可以想办法先拿到 nums2 中所有元素的 更大元素映射
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 93.72% 的用户
// 内存消耗：
// 46.8 MB, 在所有 JavaScript 提交中击败了 5.07% 的用户
const nextGreaterElement2 = (nums1, nums2) => {
  const map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    const findRes = nums2.slice(i + 1).find(x => x > nums2[i]);
    map.set(nums2[i], findRes || -1);
  }
  return nums1.map(i => map.get(i));
};

// 单调递增栈
// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 99.52% 的用户
// 内存消耗：
// 43 MB, 在所有 JavaScript 提交中击败了 66.15% 的用户
const nextGreaterElement3 = (nums1, nums2) => {
  const map = new Map();
  const stack = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    if (stack[stack.length - 1] < nums2[i]) {
      while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) stack.pop();
    }
    map.set(nums2[i], stack[stack.length - 1]);
    stack.push(nums2[i]);
  }
  return nums1.map(i => map.get(i) || -1);
};

const nums1 = [1, 3, 5, 2, 4];
const nums2 = [6, 5, 4, 3, 2, 1, 7];

console.log(nextGreaterElement3(nums1, nums2));
