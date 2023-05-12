// 645. 错误的集合

// 集合 s 包含从 1 到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 丢失了一个数字 并且 有一个数字重复 。

// 给定一个数组 nums 代表了集合 S 发生错误后的结果。

// 请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。

// 输入：nums = [1,2,2,4]
// 输出：[2,3]

// 输入：nums = [1,1]
// 输出：[1,2]

// 注：nums 并不是有序的

// n*a1+n(n-1)/2*d

// O(n)
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 92.50% 的用户
// 内存消耗：
// 50.4 MB, 在所有 JavaScript 提交中击败了 6.25% 的用户
const findErrorNums1 = nums => {
  const sum = arr => {
    let s = 0;
    for (const i of arr) {
      s += i;
    }
    return s;
  };
  const pureSum = sum(new Set(nums));
  const repeat = sum(nums) - pureSum;
  const n = nums.length;
  const originalSum = n * 1 + ((n * (n - 1)) / 2) * 1;
  const miss = originalSum - pureSum;
  return [repeat, miss];
};

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 97.92% 的用户
// 内存消耗：
// 48.3 MB, 在所有 JavaScript 提交中击败了 32.91% 的用户
const findErrorNums2 = nums => {
  let repeat;
  let miss;
  const len = nums.length;
  const s = new Set();
  for (const i of nums) {
    if (s.has(i)) {
      repeat = i;
    }
    s.add(i);
  }
  for (let i = 1; i <= len; i++) {
    if (!s.has(i)) {
      miss = i;
    }
  }
  return [repeat, miss];
};

const nums = [2, 2];

console.log(findErrorNums2(nums));
