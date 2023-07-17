// 415. 字符串相加

// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

// 输入：num1 = "11", num2 = "123"
// 输出："134"

// 输入：num1 = "456", num2 = "77"
// 输出："533"

// 输入：num1 = "0", num2 = "0"
// 输出："0"

// O(n) O(1)
// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 99.58% 的用户
// 内存消耗：
// 43 MB, 在所有 JavaScript 提交中击败了 93.12% 的用户
const addStrings = (num1, num2) => {
  let prev = 0;
  const n1 = num1.length;
  const n2 = num2.length;
  const max = Math.max(n1, n2);
  let res = '';
  for (let i = 1; i <= max; i++) {
    let current = (num1[n1 - i] || 0) - 0 + ((num2[n2 - i] || 0) - 0) + prev;
    if (current > 9) {
      prev = 1;
      current -= 10;
    } else prev = 0;
    res = current + res;
  }
  if (prev === 1) res = prev + res;
  return res;
};

const num1 = '99999999',
  num2 = '1';

console.log(addStrings(num1, num2));
