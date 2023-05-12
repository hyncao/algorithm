// 136. 只出现一次的数字

// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 输入: [4,1,2,1,2]
// 输出: 4

// 知识点:
// 异或满足交换律
// 0 ^ X == X
// X ^ X == 0

// 异或 O(n)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 88.40% 的用户
// 内存消耗：
// 42.2 MB, 在所有 JavaScript 提交中击败了 67.71% 的用户
const singleNumber = nums => {
  return nums.reduce((prev, current) => prev ^ current);
};

const nums = [4, 1, 2, 1, 2];

console.log(singleNumber(nums));
