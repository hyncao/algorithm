// 566. 重塑矩阵

// 在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。

// 给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。

// 重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。

// 如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。

// 输入：mat = [[1,2],[3,4]], r = 1, c = 4
// 输出：[[1,2,3,4]]

// 输入：mat = [[1,2],[3,4]], r = 2, c = 4
// 输出：[[1,2],[3,4]]

// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 95.65% 的用户
// 内存消耗：
// 43.5 MB, 在所有 JavaScript 提交中击败了 91.58% 的用户
const matrixReshape = (mat, r, c) => {
  const xLen = mat.length;
  const yLen = mat[0].length;
  if (xLen * yLen !== r * c) {
    return mat;
  }
  let index = 0;
  return Array(r)
    .fill()
    .map(() =>
      Array(c)
        .fill()
        .map(() => {
          const x = Math.floor(index / yLen);
          const y = index % yLen;
          index++;
          return mat[x][y];
        })
    );
};

const mat = [
    [1, 2],
    [3, 4],
  ],
  r = 1,
  c = 4;

console.log(matrixReshape(mat, r, c));
