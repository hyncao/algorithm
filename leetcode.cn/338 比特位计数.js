// 338. 比特位计数

// https://leetcode.cn/problems/counting-bits/
// 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。

// 输入：n = 2
// 输出：[0,1,1]

// 输入：n = 5
// 输出：[0,1,1,2,1,2]

// 思考：
// 奇数：二进制表示中，奇数一定比前面那个偶数多一个 1，因为多的就是最低位的 1。
// 偶数：二进制表示中，偶数中 1 的个数一定和除以 2 之后的那个数一样多。因为最低位是 0，除以 2 就是右移一位，也就是把那个 0 抹掉而已，所以 1 的个数是不变的。
// 0: 0; 1: 1;

// O(n) 动态规划 DP
// 执行用时：
// 84 ms, 在所有 JavaScript 提交中击败了 53.92% 的用户
// 内存消耗：
// 48.1 MB, 在所有 JavaScript 提交中击败了 38.65% 的用户
const countBits = n => {
  const res = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      res.push(0);
      continue;
    }
    if (i % 2 === 0) {
      // 偶数
      res.push(res[i >> 1]);
    } else {
      // 奇数
      res.push(res[i - 1] + 1);
    }
  }
  return res;
};

const n = 1;

console.log(countBits(n));
