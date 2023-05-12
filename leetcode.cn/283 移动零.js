// 283. 移动零

// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]

// 输入: nums = [0]
// 输出: [0]

// 双指针，一边遍历一边调动顺序
// 执行用时：
// 84 ms, 在所有 JavaScript 提交中击败了72.19%的用户
// 内存消耗：
// 47.4 MB, 在所有 JavaScript 提交中击败了 5.03% 的用户
const moveZeroes1 = nums => {
  let index = 0;
  let zeroIndex = '';
  while (index < nums.length) {
    if (nums[index] === 0) {
      zeroIndex = typeof zeroIndex === 'string' ? index : zeroIndex;
    } else if (typeof zeroIndex === 'number') {
      nums.splice(zeroIndex, 1, nums[index]);
      nums[index] = 0;
      zeroIndex++;
    }
    index++;
  }
};

// 单指针，遍历的时候删除 0，同时记录删除 0 的个数，最后拼上去
// 执行用时：
// 260 ms, 在所有 JavaScript 提交中击败了 19.70% 的用户
// 内存消耗：
// 45.1 MB, 在所有 JavaScript 提交中击败了 97.41% 的用户
const moveZeroes2 = nums => {
  let index = 0;
  let zeroCount = 0;
  while (index < nums.length) {
    if (nums[index] === 0) {
      zeroCount++;
      nums.splice(index, 1);
    } else {
      index++;
    }
  }
  nums.splice(nums.length, 0, ...Array(zeroCount).fill(0));
};

// 执行用时：
// 92 ms, 在所有 JavaScript 提交中击败了 43.27% 的用户
// 内存消耗：
// 45.8 MB, 在所有 JavaScript 提交中击败了 49.40% 的用户
const moveZeroes3 = nums => {
  let index = 0;
  let zeroIndex = '';
  while (index < nums.length) {
    if (nums[index] === 0) {
      zeroIndex = typeof zeroIndex === 'string' ? index : zeroIndex;
    } else if (typeof zeroIndex === 'number') {
      nums[zeroIndex] = nums[index];
      nums[index] = 0;
      zeroIndex++;
    }
    index++;
  }
};

const nums = [0, 1, 0, 3, 12];

moveZeroes3(nums);
console.log(nums);
