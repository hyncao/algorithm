// 977. 有序数组的平方

// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 解释：平方后，数组变为 [16,1,0,9,100]
// 排序后，数组变为 [0,1,9,16,100]

// 输入：nums = [-7,-3,2,3,11]
// 输出：[4,9,9,49,121]

// O(n*log(n)) O(log(n))
// 执行用时：
// 88 ms, 在所有 JavaScript 提交中击败了 90.80% 的用户
// 内存消耗：
// 47.3 MB, 在所有 JavaScript 提交中击败了 50.00% 的用户
const sortedSquares1 = nums => {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    nums[i] *= nums[i];
  }
  return nums.sort((a, b) => a - b);
};

// 先找出所有的负数，平方后即是逆序
// 再将剩余的平方，即是正序
// 利用双指针，将小的放入结果中
// O(n) O(1)
// 执行用时：
// 80 ms, 在所有 JavaScript 提交中击败了 98.13% 的用户
// 内存消耗：
// 47.8 MB, 在所有 JavaScript 提交中击败了 7.50% 的用户
const sortedSquares2 = nums => {
  let splitIndex = -1;
  const n = nums.length;
  const res = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) splitIndex = i;
    else break;
  }
  let i = splitIndex;
  let j = i + 1;
  while (i >= 0 || j < n) {
    const valI = nums[i] ** 2;
    const valJ = nums[j] ** 2;
    if (i < 0) {
      res.push(valJ);
      j++;
    } else if (j === n) {
      res.push(valI);
      i--;
    } else {
      res.push(Math.min(valI, valJ));
      if (valI < valJ) i--;
      else j++;
    }
  }
  return res;
};

// 无论 nums 中有没有负数，平方后的最大数要么是第一个，要么是最后一个
// 利用这一点，可以设置首尾两个指针，每次取大的放到结果末尾
// O(n) O(1)
// 执行用时：
// 88 ms, 在所有 JavaScript 提交中击败了 90.80% 的用户
// 内存消耗：
// 46.9 MB, 在所有 JavaScript 提交中击败了 94.32% 的用户
const sortedSquares3 = nums => {
  const n = nums.length;
  const res = Array(n);
  let index = n - 1;
  let left = 0;
  let right = n - 1;
  while (index >= 0) {
    const valLeft = nums[left] ** 2;
    const valRight = nums[right] ** 2;
    res[index] = Math.max(valLeft, valRight);
    if (valLeft < valRight) right--;
    else left++;
    index--;
  }
  return res;
};

const nums = [-4, -1, 0, 3, 10];

console.log(sortedSquares3(nums));
