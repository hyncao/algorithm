// 917. 仅仅反转字母

// 给你一个字符串 s ，根据下述规则反转字符串：

// 所有非英文字母保留在原有位置。
// 所有英文字母（小写或大写）位置反转。
// 返回反转后的 s 。

// 输入：s = "ab-cd"
// 输出："dc-ba"

// 输入：s = "a-bC-dEf-ghIj"
// 输出："j-Ih-gfE-dCba"

// 输入：s = "Test1ng-Leet=code-Q!"
// 输出："Qedo1ct-eeLg=ntse-T!"

// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 94.55% 的用户
// 内存消耗：
// 41.3 MB, 在所有 JavaScript 提交中击败了 25.45% 的用户
const reverseOnlyLetters = s => {
  const len = s.length;
  let start = 0;
  let end = len - 1;
  const reg = /[a-zA-Z]/;
  s = s.split('');
  while (start < end) {
    if (reg.test(s[start]) && reg.test(s[end])) {
      [s[start], s[end]] = [s[end], s[start]];
      start++;
      end--;
    }
    if (!reg.test(s[start])) start++;
    if (!reg.test(s[end])) end--;
  }
  return s.join('');
};

const s = 'a ';

console.log(reverseOnlyLetters(s));
