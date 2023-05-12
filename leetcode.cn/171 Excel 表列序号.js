// 171. Excel 表列序号

// 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。

// 输入: columnTitle = "A"
// 输出: 1

// 输入: columnTitle = "AB"
// 输出: 28

// 输入: columnTitle = "ZY"
// 输出: 701

// 分析: 感觉像是一个26进制计算
// 'A'.charCodeAt() = 65
// 'Z'.charCodeAt() = 90

// 开莽 O(columnTitle.length)
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 52.19% 的用户
// 内存消耗：
// 41.6 MB, 在所有 JavaScript 提交中击败了 82.25% 的用户

const titleToNumber1 = columnTitle => {
  let sum = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    sum += (columnTitle[i].charCodeAt() - 64) * Math.pow(26, columnTitle.length - i - 1);
  }
  return sum;
};

// 预先缓存 26 个字母对应的 charCodeAt
// 事实证明, 并没有提速, 而且还增加了内存消耗, 操
const titleToNumber2 = columnTitle => {
  const letterMap = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };
  let sum = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    sum += letterMap[columnTitle[i]] * Math.pow(26, columnTitle.length - i - 1);
  }
  return sum;
};

// 用一个变量记录数量级增量, 进一步优化速度
// ===== 注: 就这么小的改动却带来了大幅提速, 挺神奇的
// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 97.87% 的用户
// 内存消耗：
// 41.7 MB, 在所有 JavaScript 提交中击败了 77.52% 的用户
const titleToNumber3 = columnTitle => {
  let sum = 0;
  let delta = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    sum += (columnTitle[i].charCodeAt() - 64) * Math.pow(26, delta);
    delta++;
  }
  return sum;
};

const columnTitle = 'ZY';

console.log(titleToNumber3(columnTitle));
