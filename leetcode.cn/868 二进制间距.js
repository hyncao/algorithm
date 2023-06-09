// 868. 二进制间距

// 给定一个正整数 n，找到并返回 n 的二进制表示中两个 相邻 1 之间的 最长距离 。如果不存在两个相邻的 1，返回 0 。

// 如果只有 0 将两个 1 分隔开（可能不存在 0 ），则认为这两个 1 彼此 相邻 。

// 两个 1 之间的距离是它们的二进制表示中位置的绝对差。例如，"1001" 中的两个 1 的距离为 3 。

// 输入：n = 22
// 输出：2
// 解释：22 的二进制是 "10110" 。
// 在 22 的二进制表示中，有三个 1，组成两对相邻的 1 。
// 第一对相邻的 1 中，两个 1 之间的距离为 2 。
// 第二对相邻的 1 中，两个 1 之间的距离为 1 。
// 答案取两个距离之中最大的，也就是 2 。

// 输入：n = 8
// 输出：0
// 解释：8 的二进制是 "1000" 。
// 在 8 的二进制表示中没有相邻的两个 1，所以返回 0 。

// 输入：n = 5
// 输出：2
// 解释：5 的二进制是 "101" 。

// 思考：
// 利用右移操作 >> 每次遍历的时候右移一位，然后判断是否为奇数

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 97.78% 的用户
// 内存消耗：
// 40.8 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
const binaryGap = n => {
  let last = null;
  let res = 0;
  for (let i = 0; n !== 0; i++) {
    if (n & (1 === 1)) {
      if (last !== null) {
        res = Math.max(res, i - last);
      }
      last = i;
    }
    n >>= 1;
  }
  return res;
};

const n = 1538058;

console.log(binaryGap(n));
