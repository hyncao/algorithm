// 463. 岛屿的周长

// 给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。

// 网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

// 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

// 输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// 输出：16

// 执行用时：
// 112 ms, 在所有 JavaScript 提交中击败了 98.35% 的用户
// 内存消耗：
// 48.9 MB, 在所有 JavaScript 提交中击败了 75.76% 的用户
const islandPerimeter = grid => {
  let res = 0;
  let row = 0;
  let col = 0;
  while (col < grid.length) {
    const current = grid[col];
    row = 0;
    while (row < current.length) {
      if (current[row]) {
        if (!current[row - 1]) {
          res++;
        }
        if (!current[row + 1]) {
          res++;
        }
        if (!grid[col - 1] || !grid[col - 1][row]) {
          res++;
        }
        if (!grid[col + 1] || !grid[col + 1][row]) {
          res++;
        }
      }
      row++;
    }
    col++;
  }
  return res;
};

const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

console.log(islandPerimeter(grid));
