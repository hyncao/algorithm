// 20. 有效的括号

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 输入：s = "()[]{}"
// 输出：true

// 输入：s = "([)]"
// 输出：false

// 输入：s = "{[]}"
// 输出：true

// 开莽 O(n)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 82% 的用户
// 内存消耗：
// 41.9 MB, 在所有 JavaScript 提交中击败了 21.23% 的用户
const isValid = s => {
  if(s.length%2!==0){
    return false
}
  const startMap = { '(': 1, '{': 2, '[': 3 };
  const endList = { ')': 1, '}': 2, ']': 3 };
  const stackList = [];

  for (let i = 0; i < s.length; i++) {
    if (startMap[s[i]]) {
      stackList.push(startMap[s[i]]);
    } else {
      if (endList[s[i]] === stackList[stackList.length - 1]) {
        stackList.pop();
      } else {
        return false;
      }
    }
  }

  return stackList.length === 0;
};

const s = '([)]';

console.log(isValid(s));
