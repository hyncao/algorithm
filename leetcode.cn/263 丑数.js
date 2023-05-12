// 263. 丑数

// 丑数 就是只包含质因数 2、3 和 5 的正整数。

// 给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。

// 输入：n = 6
// 输出：true

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 97.80% 的用户
// 内存消耗：
// 41.7 MB, 在所有 JavaScript 提交中击败了 44.65% 的用户
const isUgly = n => {
  if (n === 1) return true;
  if (n < 1) return false;
  if (n % 2 === 0) {
    return isUgly(n / 2);
  } else if (n % 3 === 0) {
    return isUgly(n / 3);
  } else if (n % 5 === 0) {
    return isUgly(n / 5);
  } else {
    return false;
  }
};

const n = 1;

console.log(isUgly(n));
