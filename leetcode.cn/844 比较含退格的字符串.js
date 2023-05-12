// 844. 比较含退格的字符串

// 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

// 注意：如果对空文本输入退格字符，文本继续为空。

// 输入：s = "ab#c", t = "ad#c"
// 输出：true
// 解释：s 和 t 都会变成 "ac"。

// 输入：s = "ab##", t = "c#d#"
// 输出：true
// 解释：s 和 t 都会变成 ""。

// 输入：s = "a#c", t = "b"
// 输出：false

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 93.98% 的用户
// 内存消耗：
// 42.5 MB, 在所有 JavaScript 提交中击败了 12.73% 的用户
const backspaceCompare1 = (s, t) => {
  let _s = '';
  let _t = '';
  for (const i of s) {
    if (i === '#') _s = _s.substr(0, _s.length - 1);
    else _s += i;
  }
  for (const i of t) {
    if (i === '#') _t = _t.substr(0, _t.length - 1);
    else _t += i;
  }
  return _s === _t;
};

const s = 'ab#c',
  t = 'ad#c';

console.log(backspaceCompare2(s, t));
