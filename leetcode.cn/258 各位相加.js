// 258. 各位相加

// 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。

// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 74.52% 的用户
// 内存消耗：
// 42.8 MB, 在所有 JavaScript 提交中击败了 34.29% 的用户
const addDigits1 = num => {
  if (num < 10) return num;
  const sum = Array.from(num.toString()).reduce((prev, current) => prev + (current - 0), 0);
  return addDigits1(sum);
};

const num = 38;

console.log(addDigits1(num));
