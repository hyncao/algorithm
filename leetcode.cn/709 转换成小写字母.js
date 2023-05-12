// 709. 转换成小写字母

// 给你一个字符串 s ，将该字符串中的大写字母转换成相同的小写字母，返回新的字符串。

// 输入：s = "Hello"
// 输出："hello"

// 输入：s = "here"
// 输出："here"

// 输入：s = "LOVELY"
// 输出："lovely"

// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 97.19% 的用户
// 内存消耗：
// 41.3 MB, 在所有 JavaScript 提交中击败了 17.27% 的用户
const toLowerCase = s => {
  let res = '';
  for (const i of s) {
    const charCode = i.charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      res += String.fromCharCode(charCode + 32);
    } else {
      res += i;
    }
  }
  return res;
};

const s = 'LOISUweo';

console.log(toLowerCase(s));
