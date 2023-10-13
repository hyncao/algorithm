// 1030. 距离顺序排列矩阵单元格

// 给定四个整数 rows ,   cols ,  rCenter 和 cCenter 。有一个 rows x cols 的矩阵，你在单元格上的坐标是 (rCenter, cCenter) 。

// 返回矩阵中的所有单元格的坐标，并按与 (rCenter, cCenter) 的 距离 从最小到最大的顺序排。你可以按 任何 满足此条件的顺序返回答案。

// 单元格(r1, c1) 和 (r2, c2) 之间的距离为|r1 - r2| + |c1 - c2|。

// 示例 1：

// 输入：rows = 1, cols = 2, rCenter = 0, cCenter = 0
// 输出：[[0,0],[0,1]]
// 解释：从 (r0, c0) 到其他单元格的距离为：[0,1]

// 示例 2：

// 输入：rows = 2, cols = 2, rCenter = 0, cCenter = 1
// 输出：[[0,1],[0,0],[1,1],[1,0]]
// 解释：从 (r0, c0) 到其他单元格的距离为：[0,1,1,2]
// [[0,1],[1,1],[0,0],[1,0]] 也会被视作正确答案。

// 示例 3：

// 输入：rows = 2, cols = 3, rCenter = 1, cCenter = 2
// 输出：[[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
// 解释：从 (r0, c0) 到其他单元格的距离为：[0,1,1,2,2,3]
// 其他满足题目要求的答案也会被视为正确，例如 [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]]。

// 注: 题目可能有点难懂的, 翻译一下, 要返回所有单元格的坐标, 但是要按照一定的顺序
// 1. 按照与目标点的距离从小到大排列
// 2. 如果若干个单元格距离相同, 则无所谓先后

// 桶排序
// 将所有点的距离计算一遍，放入 map 中，距离作为 key
// 执行用时：
// 116 ms, 在所有 JavaScript 提交中击败了 81.48% 的用户
// 内存消耗：
// 47.81 MB, 在所有 JavaScript 提交中击败了 85.19% 的用户
const allCellsDistOrder1 = (rows, cols, rCenter, cCenter) => {
  const res = [];
  const bucket = new Map();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const distance = Math.abs(i - rCenter) + Math.abs(j - cCenter);
      const result = bucket.get(distance);
      if (result) result.push([i, j]);
      else bucket.set(distance, [[i, j]]);
    }
  }

  for (let limit = 0; limit < rows + cols - 1; limit++) {
    const result = bucket.get(limit);
    if (result) res.push(...result);
  }
  return res;
};

// 也是桶排序，但是用数组替换了 map，用下标当 key，更快，但是却占了更多的空间
// 112 ms, 在所有 JavaScript 提交中击败了 92.59% 的用户
// 内存消耗：
// 48.50 MB, 在所有 JavaScript 提交中击败了 37.04% 的用户
const allCellsDistOrder2 = (rows, cols, rCenter, cCenter) => {
  const res = [];
  const bucket = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const distance = Math.abs(i - rCenter) + Math.abs(j - cCenter);
      const result = bucket[distance];
      if (result) result.push([i, j]);
      else bucket[distance] = [[i, j]];
    }
  }

  for (let limit = 0; limit < rows + cols - 1; limit++) {
    const result = bucket[limit];
    if (result) res.push(...result);
  }
  return res;
};

const rows = 2,
  cols = 3,
  rCenter = 1,
  cCenter = 2;

console.log(JSON.stringify(allCellsDistOrder2(rows, cols, rCenter, cCenter)));
