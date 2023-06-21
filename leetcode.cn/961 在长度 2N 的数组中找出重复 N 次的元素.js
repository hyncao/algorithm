// 961. 在长度 2N 的数组中找出重复 N 次的元素

// 给你一个整数数组 nums ，该数组具有以下属性：

// nums.length == 2 * n.
// nums 包含 n + 1 个 不同的 元素
// nums 中恰有一个元素重复 n 次
// 找出并返回重复了 n 次的那个元素。

// 输入：nums = [1,2,3,3]
// 输出：3

// 输入：nums = [2,1,2,5,3,2]
// 输出：2

// 输入：nums = [5,1,5,2,5,3,5,4]
// 输出：5

// 思考：
// 重要提示：nums 包含 n + 1 个 不同的 元素

// 其实只要找到两个相同的数，就行了
// O(n) O(n)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 94.68% 的用户
// 内存消耗：
// 43.6 MB, 在所有 JavaScript 提交中击败了 82.98% 的用户
const repeatedNTimes1 = nums => {
  const map = new Set();
  for (const i of nums) {
    if (map.has(i)) return i;
    map.add(i);
  }
};

// 随机法
// (n / 2n) * (n-1 / 2n) 约等于 1/4，期望值为 4，4 次就能拿到答案
// O(1) O(1)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 94.68% 的用户
// 内存消耗：
// 43.6 MB, 在所有 JavaScript 提交中击败了 84.04% 的用户
const repeatedNTimes2 = nums => {
  const len = nums.length;
  while (true) {
    const a = Math.floor(Math.random() * len);
    const b = Math.floor(Math.random() * len);
    if (a !== b && nums[a] === nums[b]) return nums[a];
  }
};

const nums = [5, 1, 5, 2, 5, 3, 5, 4];

console.log(repeatedNTimes2(nums));
