// 2341. 数组能形成多少数对

// 给你一个下标从 0 开始的整数数组 nums 。在一步操作中，你可以执行以下步骤：

// 从 nums 选出 两个 相等的 整数
// 从 nums 中移除这两个整数，形成一个 数对
// 请你在 nums 上多次执行此操作直到无法继续执行。

// 返回一个下标从 0 开始、长度为 2 的整数数组 answer 作为答案，其中 answer[0] 是形成的数对数目，answer[1] 是对 nums 尽可能执行上述操作后剩下的整数数目。

// 输入：nums = [1,3,2,1,3,2,2]
// 输出：[3,1]

// 输入：nums = [1,1]
// 输出：[1,0]

// 输入：nums = [0]
// 输出：[0,1]

// 先排序再遍历 O(n*log(n)) 排序比较费时，但是省空间
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 27.27% 的用户
// 内存消耗：
// 40.9 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
const numberOfPairs1 = nums => {
  const sorted = nums.sort((a, b) => a - b);
  let len = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      len++;
      i++;
    }
  }
  return [len, nums.length - len * 2];
};

// 只遍历一次 O(n)
// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 95.45% 的用户
// 内存消耗：
// 41.1 MB, 在所有 JavaScript 提交中击败了 90.91% 的用户
const numberOfPairs2 = nums => {
  const map = {}
  let len = 0;
  for (let i = 0; i < nums.length; i++){
    if (nums[i] in map) {
      delete map[nums[i]];
      len++;
    } else {
      map[nums[i]] = true;
    }
  }
  return [len, nums.length - len * 2];
};

const nums = [1, 3, 2, 1, 3, 2, 2];

console.log(numberOfPairs2(nums));
