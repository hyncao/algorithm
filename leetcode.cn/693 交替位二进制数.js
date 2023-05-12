// 693. 交替位二进制数

// 给定一个正整数，检查它的二进制表示是否总是 0、1 交替出现：换句话说，就是二进制表示中相邻两位的数字永不相同。

// 输入：n = 5
// 输出：true
// 解释：5 的二进制表示是：101

// 输入：n = 7
// 输出：false
// 解释：7 的二进制表示是：111.

// 输入：n = 11
// 输出：false
// 解释：11 的二进制表示是：1011.

// 执行用时：
// 48 ms, 在所有 JavaScript 提交中击败了 98.84% 的用户
// 内存消耗：
// 40.9 MB, 在所有 JavaScript 提交中击败了 95.35% 的用户
const hasAlternatingBits1 = n => {
  let start = 1 - (n & 1);
  while (n > 0) {
    const next = n & (n - 1);
    if (n - next === 2 ** start) {
      n = next;
      start += 2;
    } else {
      return false;
    }
  }
  return true;
};

const hasAlternatingBits2 = n => {
  const tail = 1 - (n & 1);
  const and = ((n << 1) + tail) & n;
  return (and & (and - 1)) === 0;
};

const n = 340;

console.log(hasAlternatingBits2(n));
