// 504. 七进制数

// 给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。

// 输入: num = 100
// 输出: "202"

// 输入: num = -7
// 输出: "-10"

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 89.09% 的用户
// 内存消耗：
// 40.8 MB, 在所有 JavaScript 提交中击败了 99.39% 的用户
const convertToBase7 = num => {
  const symbol = num >= 0;
  const fn = (num, res = '') => {
    const mol = num % 7;
    const rest = Math.floor(num / 7);
    res = mol + res;
    if (rest > 6) return fn(rest, res);
    res = (rest || '') + res;
    return res;
  };
  const res = fn(Math.abs(num));
  return symbol ? res : '-' + res;
};

const num = 100;

console.log(convertToBase7(num));
