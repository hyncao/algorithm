// 1021. 删除最外层的括号

// 有效括号字符串为空 ""、"(" + A + ")" 或 A + B ，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。

// 例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。
// 如果有效字符串 s 非空，且不存在将其拆分为 s = A + B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。

// 给出一个非空有效字符串 s，考虑将其进行原语化分解，使得：s = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。

// 对 s 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 s 。

// 输入：s = "(()())(())"
// 输出："()()()"
// 解释：
// 输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
// 删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。

// 输入：s = "(()())(())(()(()))"
// 输出："()()()()(())"
// 解释：
// 输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
// 删除每个部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。

// 输入：s = "()()"
// 输出：""

// 极其丑陋的代码，我自己都看不太懂
// O(n) O(n)
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 36.59% 的用户
// 内存消耗：
// 41.78 MB, 在所有 JavaScript 提交中击败了 51.22% 的用户
const removeOuterParentheses1 = s => {
  let res = '';
  let n = s.length;
  let start = true;
  let left = 0;
  for (let i = 0; i < n; i++) {
    const current = s[i];
    if (start) {
      if (current === '(') start = false;
      continue;
    } else {
      if (current === '(') left++;
      else left--;
      if (left < 0) {
        left = 0;
        start = true;
        continue;
      }
      res += current;
      if (left === 0 && s[i + 1] === ')') {
        start = true;
        i++;
      }
    }
  }
  return res;
};

// 梳理了一下方法1，通过 addFlag 判断是否添加 current
// O(n) O(n)
// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 97.56% 的用户
// 内存消耗：
// 41.81 MB, 在所有 JavaScript 提交中击败了 51.22% 的用户
const removeOuterParentheses2 = s => {
  let res = '';
  let n = s.length;
  let left = 0;
  let addFlag = false;
  for (let i = 0; i < n; i++) {
    const current = s[i];
    if (current === '(') left++;
    else left--;
    if (left === 0) {
      addFlag = false;
      continue;
    }
    if (left > 0 && i > 0 && addFlag) {
      res += current;
    }
    if (!addFlag) addFlag = true;
  }
  return res;
};

// 修改 if 的顺序，先执行 left++，在加到 res中
// O(n) O(n)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 91.46% 的用户
// 内存消耗：
// 41.71 MB, 在所有 JavaScript 提交中击败了 59.76% 的用户
const removeOuterParentheses3 = s => {
  let res = '';
  let n = s.length;
  let left = 0;
  for (let i = 0; i < n; i++) {
    const current = s[i];
    if (current === ')') left--;
    if (left > 0) res += current;
    if (current === '(') left++;
  }
  return res;
};

const s = '(()())(())';

console.log(removeOuterParentheses3(s));
