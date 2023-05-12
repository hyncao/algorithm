// 476. 数字的补数

// 对整数的二进制表示取反（0 变 1 ，1 变 0）后，再转换为十进制表示，可以得到这个整数的补数。

// 例如，整数 5 的二进制表示是 "101" ，取反后得到 "010" ，再转回十进制表示得到补数 2 。
// 给你一个整数 num ，输出它的补数。

// 输入：num = 5
// 输出：2

// 有点蠢的方法，找到最高位的 1，得出所有位都是 1 的异或值
// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 95.80% 的用户
// 内存消耗：
// 41.2 MB, 在所有 JavaScript 提交中击败了 21.85% 的用户
const findComplement1 = num => {
  const high = Math.floor(Math.log2(num));
  let xor = 0;
  for (let i = 0; i <= high; i++) {
    xor += 2 ** i;
  }
  return xor ^ num;
};

// 找到最高位的 1，2 ** high - 1 即可得到异或值
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 23.53% 的用户
// 内存消耗：
// 40.6 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
const findComplement2 = num => {
  const high = Math.floor(Math.log2(num)) + 1;
  return (2 ** high - 1) ^ num;
};

const num = 5;

console.log(findComplement(num));
