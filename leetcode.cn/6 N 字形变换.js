// 6. N 字形变换

// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R

// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"

// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// 开莽 O(n的m方)
// 结果力扣炸了
const convert1 = (s, numRows) => {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    const current = [];
    let index = i;
    let flag = true;
    while (index < s.length) {
      current.push(s[index]);
      if (i === 0 || i === numRows - 1) {
        // 开始 中间 最后
        index += (numRows - 1) * 2;
        continue;
      }
      if (i === (numRows - 1) / 2) {
        index += numRows - 1;
        continue;
      }
      index += flag ? (numRows - i - 1) * 2 : i * 2;
      flag = !flag;
    }
    res[i] = current;
  }
  return res.reduce((prev, current) => prev + current.join(''), '');
};

// 思考：按照这个规则，其实从一开始就可以推断出任意一个字母的位置，应该只需要遍历一次即可
// O(n)
// 执行用时：
// 88 ms, 在所有 JavaScript 提交中击败了 49.28% 的用户
// 内存消耗：
// 47.8 MB, 在所有 JavaScript 提交中击败了 33.16% 的用户
const convert2 = (s, numRows) => {
  if (numRows === 1) return s;
  const res = [];
  const point = {
    down: true,
    row: 0,
  };
  for (let i = 0; i < s.length; i++) {
    res[point.row] ? res[point.row].push(s[i]) : (res[point.row] = [s[i]]);
    if (point.down && point.row === numRows - 1) {
      point.down = false;
      point.row = point.row - 1;
    } else if (!point.down && point.row === 0) {
      point.down = true;
      point.row = point.row + 1;
    } else {
      point.row = point.down ? point.row + 1 : point.row - 1;
    }
  }
  return res.reduce((prev, current) => prev + current.join(''), '');
};

const s = 'PAYPALISHIRING';
const numRows = 4;

console.log(convert2(s, numRows));
