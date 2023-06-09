// 905. 按奇偶排序数组

// 给你一个整数数组 nums，将 nums 中的的所有偶数元素移动到数组的前面，后跟所有奇数元素。

// 返回满足此条件的 任一数组 作为答案。

// 输入：nums = [3,1,2,4]
// 输出：[2,4,3,1]
// 解释：[4,2,3,1]、[2,4,1,3] 和 [4,2,1,3] 也会被视作正确答案。

// 输入：nums = [0]
// 输出：[0]

// 最差情况接近于 n²
// O(~n²) O(1)
// 执行用时：
// 108 ms, 在所有 JavaScript 提交中击败了 6.75% 的用户
// 内存消耗：
// 43.9 MB, 在所有 JavaScript 提交中击败了 26.19% 的用户
const sortArrayByParity1 = nums => {
  let oddIndex = null;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if ((nums[i] & 1) === 1 && oddIndex === null) {
      oddIndex = i;
    } else if ((nums[i] & 1) === 0 && oddIndex !== null) {
      [nums[oddIndex], nums[i]] = [nums[i], nums[oddIndex]];
      i = oddIndex;
      oddIndex = null;
    }
  }
  return nums;
};

// O(2n) O(1)
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 88.89% 的用户
// 内存消耗：
// 43.5 MB, 在所有 JavaScript 提交中击败了 56.75% 的用户
const sortArrayByParity2 = nums => {
  const res = [];
  for (const i of nums) {
    if ((i & 1) === 0) res.push(i);
  }
  for (const i of nums) {
    if ((i & 1) === 1) res.push(i);
  }
  return res;
};

// O(n) O(1)
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 79.37% 的用户
// 内存消耗：
// 43.6 MB, 在所有 JavaScript 提交中击败了 53.97% 的用户
const sortArrayByParity3 = nums => {
  const even = [];
  const odd = [];
  for (const i of nums) {
    if ((i & 1) === 0) even.push(i);
    if ((i & 1) === 1) odd.push(i);
  }
  return even.concat(odd);
};

const nums = [3, 1, 2, 4];

console.log(JSON.stringify(sortArrayByParity3(nums)));
