// 2562. 找出数组的串联值

// 给你一个下标从 0 开始的整数数组 nums 。

// 现定义两个数字的 串联 是由这两个数值串联起来形成的新数字。

// 例如，15 和 49 的串联是 1549 。
// nums 的 串联值 最初等于 0 。执行下述操作直到 nums 变为空：

// 如果 nums 中存在不止一个数字，分别选中 nums 中的第一个元素和最后一个元素，

// 将二者串联得到的值加到 nums 的 串联值 上，然后从 nums 中删除第一个和最后一个元素。

// 如果仅存在一个元素，则将该元素的值加到 nums 的串联值上，然后删除这个元素。

// 返回执行完所有操作后 nums 的串联值。

// 示例 1：

// 输入：nums = [7,52,2,4]
// 输出：596

// 示例 2：

// 输入：nums = [5,14,13,8,12]
// 输出：673

// 模拟 O(n/2) O(1)
// 将所有点的距离计算一遍，放入 map 中，距离作为 key
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 63.86% 的用户
// 内存消耗：
// 40.95 MB, 在所有 JavaScript 提交中击败了 79.52% 的用户
const findTheArrayConcVal = nums => {
  const len = nums.length;
  let i = 0;
  let j = len - 1;
  let sum = 0;

  while (i <= j) {
    if (i === j) sum += nums[i];
    else sum += '' + nums[i] + nums[j] - 0;
    i++;
    j--;
  }
  return sum;
};

const nums = [5, 14, 13, 8, 12];

console.log(findTheArrayConcVal(nums));
