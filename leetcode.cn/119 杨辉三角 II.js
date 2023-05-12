// 119. 杨辉三角 II

// 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
// 具体思路可以看 118

// 硬撸
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 68.60% 的用户
// 内存消耗：
// 41 MB, 在所有 JavaScript 提交中击败了 76.22% 的用户
const getRow = rowIndex => {
  const res = [];
  for (let i = 0; i <= rowIndex; i++) {
    const prev = res[i - 1] || [1];
    const current = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        current.push(1);
      } else {
        current.push(prev[j - 1] + prev[j]);
      }
    }
    if (i === rowIndex) {
      return current;
    }
    res.push(current);
  }
};

const rowIndex = 3;

console.log(getRow(rowIndex));
