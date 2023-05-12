// 728. 自除数

// 自除数 是指可以被它包含的每一位数整除的数。

// 例如，128 是一个 自除数 ，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
// 自除数 不允许包含 0 。

// 给定两个整数 left 和 right ，返回一个列表，列表的元素是范围 [left, right] 内所有的 自除数 。

// 输入：left = 1, right = 22
// 输出：[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

// 输入：left = 47, right = 85
// 输出：[48,55,66,77]

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 96.67% 的用户
// 内存消耗：
// 41 MB, 在所有 JavaScript 提交中击败了 90.00% 的用户
const selfDividingNumbers = (left, right) => {
  const res = [];
  for (let i = left; i <= right; i++) {
    let current = true;
    let item = i;
    while (item > 0) {
      if (i % (item % 10) !== 0) {
        current = false;
        break;
      }
      item = Math.floor(item / 10);
    }
    if (current) res.push(i);
  }
  return res;
};

const left = 71,
  right = 72;

console.log(JSON.stringify(selfDividingNumbers(left, right)));
