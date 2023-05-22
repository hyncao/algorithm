// 867. 转置矩阵

// 给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵。

// 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[1,4,7],[2,5,8],[3,6,9]]

// 输入：matrix = [[1,2,3],[4,5,6]]
// 输出：[[1,4],[2,5],[3,6]]

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 98.04% 的用户
// 内存消耗：
// 44.1 MB, 在所有 JavaScript 提交中击败了 29.41% 的用户
const transpose = matrix => {
  const xLen = matrix[0].length;
  const yLen = matrix.length;
  const res = Array.from({ length: xLen }, () => []);
  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      res[i][j] = matrix[j][i];
    }
  }
  return res;
};

const matrix = [
  [1, 2, 3, 4],
  [11, 22, 33, 44],
  [111, 222, 333, 444],
];

console.log(JSON.stringify(transpose(matrix)));
