// 2679. 矩阵中的和

// 给你一个下标从 0 开始的二维整数数组 nums 。一开始你的分数为 0 。你需要执行以下操作直到矩阵变为空：

// 矩阵中每一行选取最大的一个数，并删除它。如果一行中有多个最大的数，选择任意一个并删除。
// 在步骤 1 删除的所有数字中找到最大的一个数字，将它添加到你的 分数 中。
// 请你返回最后的 分数 。

// 输入：nums = [[7,2,1],[6,4,2],[6,5,3],[3,2,1]]
// 输出：15
// 解释：第一步操作中，我们删除 7 ，6 ，6 和 3 ，将分数增加 7 。下一步操作中，删除 2 ，4 ，5 和 2 ，将分数增加 5 。最后删除 1 ，2 ，3 和 1 ，将分数增加 3 。所以总得分为 7 + 5 + 3 = 15 。

// 输入：nums = [[1]]
// 输出：1

// O(y * x * log(x) + x * y) O(y*log(x))
// 执行用时：
// 140 ms, 在所有 JavaScript 提交中击败了 85.60% 的用户
// 内存消耗：
// 50.8 MB, 在所有 JavaScript 提交中击败了 52.00% 的用户
const matrixSum = nums => {
  let res = 0;
  for (const i of nums) {
    i.sort((a, b) => b - a);
  }
  let xMax = nums[0].length;
  let yMax = nums.length;
  for (let x = 0; x < xMax; x++) {
    let max = 0;
    for (let y = 0; y < yMax; y++) {
      if (nums[y][x] > max) max = nums[y][x];
    }
    res += max;
  }
  return res;
};

const nums = [[1]];

console.log(matrixSum(nums));
