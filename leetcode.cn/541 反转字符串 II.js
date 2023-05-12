// 541. 反转字符串 II

// 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。

// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

// 输入：s = "abcdefg", k = 2
// 输出："bacdfeg"

// 输入：s = "abcd", k = 2
// 输出："bacd"

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 86.76% 的用户
// 内存消耗：
// 45.5 MB, 在所有 JavaScript 提交中击败了 8.70% 的用户
const reverseStr = (s, k) => {
  if (k === 1) return s;
  let flag = true;
  let res = '';
  for (let i = 0; i < s.length; i += k) {
    let current = '';
    let index = 0;
    while (index < k && s[i + index]) {
      if (flag) {
        current = s[i + index] + current;
      } else {
        current = current + s[i + index];
      }
      index++;
    }
    flag = !flag;
    res += current;
  }
  return res;
};

const s = 'abcdef',
  k = 2;

console.log(reverseStr(s, k));
