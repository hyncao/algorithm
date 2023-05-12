// 67. 二进制求和

// 给你两个二进制字符串，返回它们的和（用二进制表示）。

// 输入为 非空 字符串且只包含数字 1 和 0。

// 输入: a = "1010", b = "1011"
// 输出: "10101"

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 88.73% 的用户
// 内存消耗：
// 42 MB, 在所有 JavaScript 提交中击败了 70.82% 的用户
const addBinary = (a, b) => {
  const maxLen = Math.max(a.length, b.length);
  a = a.padStart(maxLen, 0);
  b = b.padStart(maxLen, 0);
  let res = Array(maxLen + 1).fill(0);
  for (let i = maxLen - 1; i >= 0; i--) {
    res[i + 1] += a[i] - 0 + (b[i] - 0);
    if (res[i + 1] >= 2) {
      res[i + 1] = res[i + 1] % 2;
      res[i]++;
    }
  }
  if (res[0] === 0) {
    res.shift();
  }
  return res.join('');
};

const a = '1';
const b = '1';

console.log(addBinary(a, b));
