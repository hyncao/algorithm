// 118. 杨辉三角

// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

// 输入: numRows = 5
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// 输入: numRows = 6
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1]]

// 输入: numRows = 7
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],[1,6,15,20,15,6,1]]

// 输入: numRows = 8
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],[1,6,15,20,15,6,1],[1,7,21,35,35,21,7,1]]

// 输入: numRows = 9
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],[1,6,15,20,15,6,1],[1,7,21,35,35,21,7,1],[1,8,28,56,70,56,28,8,1]]

// 输入: numRows = 10
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],[1,6,15,20,15,6,1],[1,7,21,35,35,21,7,1],[1,8,28,56,70,56,28,8,1],[1,9,36,84,126,126,84,36,9,1]]

// 输入: numRows = 11
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],[1,6,15,20,15,6,1],[1,7,21,35,35,21,7,1],[1,8,28,56,70,56,28,8,1],[1,9,36,84,126,126,84,36,9,1],[1,10,45,120,210,252,210,120,45,10,1]]

// 分析: 从结果来看, 每一纵项是有规律的, 如下
// 0:   1   1    1    1    1     1    1
// 1:   1   2    3    4    5     6    7
// 2:   1   3    6   10   15    21   28
// 3:   1   4   10   20   35    56   84
// 4:   1   5   15   35   70   126  210
// 5:   1   6   21   56  126   252
// 所以我们可以预先将每一项都计算好预存, 之后遍历 numRows 即可
// 特点: numRows 越大则越快, numRows 越小则越慢, 因为时间都耗在了获得 rowMap 上面
// 相比于 generate2 rowMap.get 比从数组中读取可能更快
// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 82.11% 的用户
// 内存消耗：
// 43.1 MB, 在所有 JavaScript 提交中击败了 5.04% 的用户
const generate1 = numRows => {
  const rowMap = new Map();
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      let value = (rowMap.get(`${i}+${j - 1}`) || 0) + (rowMap.get(`${i - 1}+${j}`) || 0);
      if (i === 0) {
        value = 1;
      }
      rowMap.set(`${i}+${j}`, value);
    }
  }

  const res = [];
  for (let i = 0; i < numRows; i++) {
    const current = [];
    for (let j = 0; j <= i; j++) {
      current.push(rowMap.get(`${j}+${i - j}`));
    }
    res.push(current);
  }
  return res;
};

// 硬撸
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 61.54% 的用户
// 内存消耗：
// 40.9 MB, 在所有 JavaScript 提交中击败了 90.86% 的用户
const generate2 = numRows => {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    const prev = res[i - 1] || [1];
    const current = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        current.push(1);
      } else {
        current.push(prev[j - 1] + prev[j]);
      }
    }
    res.push(current);
  }
  return res;
};

const numRows = 11;

console.log(generate2(numRows));
