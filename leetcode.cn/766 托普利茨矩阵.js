// 766. 托普利茨矩阵

// 给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。

// 如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 。

// 输入：matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
// 输出：true
// 解释：
// 在上述矩阵中, 其对角线为:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]"。
// 各条对角线上的所有元素均相同, 因此答案是 True 。

// 输入：matrix = [[1,2],[2,2]]
// 输出：false

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 72.63% 的用户
// 内存消耗：
// 42.9 MB, 在所有 JavaScript 提交中击败了 51.58% 的用户
const isToeplitzMatrix1 = matrix => {
  let prev;
  let len = matrix[0].length;
  for (let i = 0; i < matrix.length; i++) {
    if (prev) {
      const temp = matrix[i].slice(1).join(',');
      if (prev !== temp) return false;
    }
    prev = matrix[i].slice(0, len - 1).join(',');
  }
  return true;
};

// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 55.79% 的用户
// 内存消耗：
// 42.8 MB, 在所有 JavaScript 提交中击败了 75.79% 的用户
const isToeplitzMatrix2 = matrix => {
  let len = matrix[0].length;
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < len; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) return false;
    }
  }
  return true;
};

const matrix = [
  [1, 2],
  [2, 2],
];

console.log(isToeplitzMatrix2(matrix));
