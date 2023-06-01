// 883. 三维形体投影面积

// https://leetcode.cn/problems/projection-area-of-3d-shapes/

// 在 n x n 的网格 grid 中，我们放置了一些与 x，y，z 三轴对齐的 1 x 1 x 1 立方体。

// 每个值 v = grid[i][j] 表示 v 个正方体叠放在单元格 (i, j) 上。

// 现在，我们查看这些立方体在 xy 、yz 和 zx 平面上的投影。

// 投影 就像影子，将 三维 形体映射到一个 二维 平面上。从顶部、前面和侧面看立方体时，我们会看到“影子”。

// 返回 所有三个投影的总面积 。

// 输入：[[1,2],[3,4]]
// 输出：17
// 解释：这里有该形体在三个轴对齐平面上的三个投影(“阴影部分”)。

// 输入：grid = [[2]]
// 输出：5

// 输入：[[1,0],[0,2]]
// 输出：8

// 思考：
// 其实不复杂，有点脑筋急转弯的意思，看一下图示就明白了
// 底部的面积很简单，0 不管，非 0 则 +1
// 侧面1的面积 grid[i] 中找最大值，累加
// 侧面2的面积 grid[0][i] 最大值 + grid[1][i] 最大值 + grid[2][i] 最大值 + ...

// 执行用时：
// 48 ms, 在所有 JavaScript 提交中击败了 100.00% 的用户
// 内存消耗：
// 41.6 MB, 在所有 JavaScript 提交中击败了 66.04% 的用户
const projectionArea = grid => {
  const len = grid.length;
  let bottom = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < len; i++) {
    let leftMax = 0;
    let rightMax = 0;
    for (let j = 0; j < len; j++) {
      if (grid[i][j] !== 0) bottom++;
      leftMax = Math.max(leftMax, grid[i][j]);
      rightMax = Math.max(rightMax, grid[j][i]);
    }
    left += leftMax;
    right += rightMax;
  }
  return bottom + left + right;
};

const grid = [
  [1, 2],
  [3, 4],
];

console.log(projectionArea(grid));
