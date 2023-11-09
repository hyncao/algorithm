// 2609. 最长平衡子字符串

// 给你一个仅由 0 和 1 组成的二进制字符串 s 。

// 如果子字符串中 所有的 0 都在 1 之前 且其中 0 的数量等于 1 的数量，则认为 s 的这个子字符串是平衡子字符串。请注意，空子字符串也视作平衡子字符串。

// 返回  s 中最长的平衡子字符串长度。

// 子字符串是字符串中的一个连续字符序列。

// 示例 1：

// 输入：s = "01000111"
// 输出：6

// 示例 2：

// 输入：s = "00111"
// 输出：4

// 示例 3：

// 输入：s = "111"
// 输出：0

// 思考：
// 0 是上限，1 是下限

// 执行用时：
// 80 ms, 在所有 JavaScript 提交中击败了 94.67% 的用户
// 内存消耗：
// 43.24 MB, 在所有 JavaScript 提交中击败了 89.33% 的用户
const findTheLongestBalancedSubstring = s => {
  let res = 0;
  let zero = 0;
  let one = 0;
  const len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] === '1') {
      one++;
      res = Math.max(res, Math.min(zero, one));
    } else {
      if (s[i - 1] === '1') zero = 0;
      zero++;
      one = 0;
    }
  }
  return res * 2;
};

const s = '0110001000000011';

console.log(findTheLongestBalancedSubstring(s));
