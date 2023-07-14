// 2544. 交替数字和

// 给你一个正整数 n 。n 中的每一位数字都会按下述规则分配一个符号：

// 最高有效位 上的数字分配到 正 号。
// 剩余每位上数字的符号都与其相邻数字相反。
// 返回所有数字及其对应符号的和。

// 输入：n = 521
// 输出：4
// 解释：(+5) + (-2) + (+1) = 4

// 输入：n = 111
// 输出：1
// 解释：(+1) + (-1) + (+1) = 1

// 输入：n = 886996
// 输出：0
// 解释：(+8) + (-8) + (+6) + (-9) + (+9) + (-6) = 0

// 1 <= n <= 10**9

// O(10) O(1)
// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 94.19% 的用户
// 内存消耗：
// 41 MB, 在所有 JavaScript 提交中击败了 73.26% 的用户
const alternateDigitSum = n => {
  let res = 0;
  let i = 9;
  let flag = true;
  let hit = false;
  while (i >= 0) {
    const temp = Math.floor(n / 10 ** i) % 10;
    if (temp >= 1 || hit) {
      res += flag ? temp : 0 - temp;
      flag = !flag;
      hit = true;
    }
    i--;
  }
  return res;
};

const n = 521;

console.log(alternateDigitSum(n));
