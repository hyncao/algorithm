// 167. 两数之和 II - 输入有序数组

// 给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。

// 以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。

// 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。

// 你所设计的解决方案必须只使用常量级的额外空间。

// 输入：numbers = [2,7,11,15], target = 9
// 输出：[1,2]
// 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。

// 输入：numbers = [2,3,4], target = 6
// 输出：[1,3]
// 解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。

// 输入：numbers = [-1,0], target = -1
// 输出：[1,2]

// O(n) O(n)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 85.89% 的用户
// 内存消耗：
// 42.1 MB, 在所有 JavaScript 提交中击败了 63.25% 的用户
const twoSum1 = (numbers, target) => {
  const map = new Set(numbers);
  const n = numbers.length;
  for (let i = 0; i < n; i++) {
    if (map.has(target - numbers[i])) {
      const next = numbers.indexOf(target - numbers[i]);
      return [i + 1, next === i ? i + 2 : next + 1];
    }
  }
};

// O(n²) O(1)
// 执行用时：
// 1280 ms, 在所有 JavaScript 提交中击败了 5.06% 的用户
// 内存消耗：
// 41.7 MB, 在所有 JavaScript 提交中击败了 97.60% 的用户
const twoSum2 = (numbers, target) => {
  const n = numbers.length;
  for (let i = 0; i < n; i++) {
    if (numbers.includes(target - numbers[i])) {
      const next = numbers.indexOf(target - numbers[i]);
      return [i + 1, next === i ? i + 2 : next + 1];
    }
  }
};

// O(n) O(1)
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 53.64% 的用户
// 内存消耗：
// 42.1 MB, 在所有 JavaScript 提交中击败了 60.21% 的用户
const twoSum3 = (numbers, target) => {
  const n = numbers.length;
  let i = 0;
  let j = n - 1;
  while (i < j) {
    const current = numbers[i] + numbers[j];
    if (current > target) j--;
    if (current < target) i++;
    if (current === target) return [i + 1, j + 1];
  }
};

const numbers = [0, 0, 2],
  target = 0;

console.log(twoSum3(numbers, target));
