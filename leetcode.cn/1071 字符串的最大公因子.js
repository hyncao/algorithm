// 1071. 字符串的最大公因子

// 对于字符串 s 和 t，只有在 s = t + ... + t（t 自身连接 1 次或多次）时，我们才认定 “t 能除尽 s”。

// 给定两个字符串 str1 和 str2 。返回 最长字符串 x，要求满足 x 能除尽 str1 且 x 能除尽 str2 。

// 示例 1：

// 输入：str1 = "ABCABC", str2 = "ABC"
// 输出："ABC"

// 示例 2：

// 输入：str1 = "ABABAB", str2 = "ABAB"
// 输出："AB"

// 示例 3：

// 输入：str1 = "LEET", str2 = "CODE"
// 输出：""

// 思考：
// 字符串长度只有为偶数，才可能有更短的因子
// 字符串长度只有为奇数，因子只能是本身
// 更长的字符串为奇数，则没有公因子

// O(n) O(1)
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 42.56% 的用户
// 内存消耗：
// 40.32 MB, 在所有 JavaScript 提交中击败了 60.15% 的用户
const gcdOfStrings1 = (str1, str2) => {
  const len1 = str1.length;
  const len2 = str2.length;
  const longer = len1 > len2 ? str1 : str2;
  const longerLen = longer.length;
  const shorter = len1 > len2 ? str2 : str1;
  const shorterLen = shorter.length;

  if ((shorterLen & 1) === 1) {
    if (shorter.repeat(longerLen / shorterLen) === longer) return shorter;
  }

  let factor = 1;
  while (factor <= shorterLen) {
    const len = shorterLen / factor;
    factor++;
    if (Number.isInteger(len)) {
      const gcd = shorter.substr(0, len);
      if (gcd.repeat(longerLen / len) === longer && gcd.repeat(shorterLen / len) === shorter) return gcd;
    }
  }
  return '';
};

const str1 = 'LEET',
  str2 = 'CODE';

console.log(gcdOfStrings1(str1, str2));
