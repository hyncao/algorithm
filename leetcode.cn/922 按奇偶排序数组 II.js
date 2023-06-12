// 922. 按奇偶排序数组 II

// 给定一个非负整数数组 nums，  nums 中一半整数是 奇数 ，一半整数是 偶数 。

// 对数组进行排序，以便当 nums[i] 为奇数时，i 也是 奇数 ；当 nums[i] 为偶数时， i 也是 偶数 。

// 你可以返回 任何满足上述条件的数组作为答案 。

// 输入：nums = [4,2,5,7]
// 输出：[4,5,2,7]
// 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。

// 输入：nums = [2,3]
// 输出：[2,3]

// O(n) O(1)
// 执行用时：
// 80 ms, 在所有 JavaScript 提交中击败了 88.14% 的用户
// 内存消耗：
// 46.8 MB, 在所有 JavaScript 提交中击败了 46.24% 的用户
const sortArrayByParityII = nums => {
  let even = 0;
  let odd = 1;
  const len = nums.length;
  const res = Array(len);
  for (const i of nums) {
    if (i & (1 === 1)) {
      res[odd] = i;
      odd += 2;
    } else {
      res[even] = i;
      even += 2;
    }
  }
  return res;
};

const nums = [4, 2, 5, 7];

console.log(sortArrayByParityII(nums));
