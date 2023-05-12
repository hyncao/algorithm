// 1637. 两点之间不包含任何点的最宽垂直区域

// 给你 n 个二维平面上的点 points ，其中 points[i] = [xi, yi] ，请你返回两点之间内部不包含任何点的 最宽垂直区域 的宽度。

// 垂直区域 的定义是固定宽度，而 y 轴上无限延伸的一块区域（也就是高度为无穷大）。 最宽垂直区域 为宽度最大的一个垂直区域。

// 请注意，垂直区域 边上 的点 不在 区域内。

// 输入：points = [[8,7],[9,9],[7,4],[9,7]]
// 输出：1

// 输入：points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
// 输出：3

// 执行用时：
// 156 ms, 在所有 JavaScript 提交中击败了 90.32% 的用户
// 内存消耗：
// 62.9 MB, 在所有 JavaScript 提交中击败了 96.77% 的用户
const maxWidthOfVerticalArea = points => {
  points.sort((a, b) => a[0] - b[0]);
  let max = 0;
  for (let i = 1; i < points.length; i++) {
    max = Math.max(max, points[i][0] - points[i - 1][0]);
  }
  return max;
};

const points = [
  [3, 1],
  [9, 0],
  [1, 0],
  [1, 4],
  [5, 3],
  [8, 8],
];

console.log(maxWidthOfVerticalArea(points));
