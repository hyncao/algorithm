// 507. 完美数

// 对于一个 正整数，如果它和除了它自身以外的所有 正因子 之和相等，我们称它为 「完美数」。

// 给定一个 整数 n， 如果是完美数，返回 true；否则返回 false。

// 输入：num = 28
// 输出：true
// 解释：28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, 和 14 是 28 的所有正因子。

// 输入：num = 7
// 输出：false

// 枚举出所有的因子 O(num)
// 执行用时：
// 2400 ms, 在所有 JavaScript 提交中击败了 6.94% 的用户
// 内存消耗：
// 41.1 MB, 在所有 JavaScript 提交中击败了 35.84% 的用户
const checkPerfectNumber1 = num => {
  if (num < 2) return false;
  const set = new Set();
  let res = 1;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      !set.has(i) && set.add(i);
      !set.has(num / i) && set.add(num / i);
    }
  }
  for (const i of set) {
    res += i;
  }
  return res === num;
};

// O(开根号num)
// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 90.17% 的用户
// 内存消耗：
// 40.9 MB, 在所有 JavaScript 提交中击败了 78.04% 的用户
const checkPerfectNumber2 = num => {
  if (num < 2) return false;
  let res = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      res += i;
      if (i * i < num) {
        res += num / i;
      }
    }
  }
  return res === num;
};

const num = 28;

const timer = new Date();
console.log(checkPerfectNumber2(num));
console.log((new Date() - timer) / 100);
