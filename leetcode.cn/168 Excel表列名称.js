// 168. Excel表列名称

// 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

// 输入：columnNumber = 1
// 输出："A"

// 输入：columnNumber = 701
// 输出："ZY"

// 输入：columnNumber = 2147483647
// 输出："FXSHRXW"

// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 94.40% 的用户
// 内存消耗：
// 40.7 MB, 在所有 JavaScript 提交中击败了 88.92% 的用户
const convertToTitle = columnNumber => {
  const sb = [];
  while (columnNumber !== 0) {
    columnNumber--;
    sb.push(String.fromCharCode((columnNumber % 26) + 'A'.charCodeAt()));
    columnNumber = Math.floor(columnNumber / 26);
  }
  return sb.reverse().join('');
};

const columnNumber = 701;

console.log(convertToTitle(columnNumber));
