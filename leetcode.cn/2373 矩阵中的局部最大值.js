// 2373. 矩阵中的局部最大值
// 给你一个大小为 n x n 的整数矩阵 grid 。

// 生成一个大小为 (n - 2) x (n - 2) 的整数矩阵  maxLocal ，并满足：

// maxLocal[i][j] 等于 grid 中以 i + 1 行和 j + 1 列为中心的 3 x 3 矩阵中的 最大值 。
// 换句话说，我们希望找出 grid 中每个 3 x 3 矩阵中的最大值。

// 返回生成的矩阵。

// 输入：grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
// 输出：[[9,9],[8,6]]

// 执行用时：
// 112 ms, 在所有 JavaScript 提交中击败了 8.51% 的用户
// 内存消耗：
// 47.8 MB, 在所有 JavaScript 提交中击败了 6.38% 的用户
const largestLocal1 = grid => {
  let row = 0;
  let column = 0;
  const maxLen = grid.length - 2;
  const res = [];
  const subGridLen = 3;
  while (row < maxLen) {
    const current = [];
    while (column < maxLen) {
      const arr = Array(subGridLen)
        .fill()
        .reduce((prev, current, index) => prev.concat(grid[row + index].slice(column, column + subGridLen)), []);
      const max = Math.max.apply(null, arr);
      current.push(max);
      column++;
    }
    res[row] = current;
    row++;
    column = 0;
  }
  return res;
};

const largestLocal2 = grid => {
  const n = grid.length;
  const res = new Array(n - 2).fill(0).map(() => new Array(n - 2).fill(0));
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          res[i][j] = Math.max(res[i][j], grid[x][y]);
        }
      }
    }
  }
  return res;
};

const grid = [
  [9, 9, 8, 1],
  [5, 6, 2, 6],
  [8, 2, 6, 4],
  [6, 2, 2, 2],
];

console.log(JSON.stringify(largestLocal2(grid)));
