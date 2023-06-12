// 925. 长按键入

// 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。

// 你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。

// 输入：name = "alex", typed = "aaleex"
// 输出：true
// 解释：'alex' 中的 'a' 和 'e' 被长按。

// 输入：name = "saeed", typed = "ssaaedd"
// 输出：false

// O(m + n) O(1)
// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 97.28% 的用户
// 内存消耗：
// 40.8 MB, 在所有 JavaScript 提交中击败了 98.64% 的用户
const isLongPressedName = (name, typed) => {
  const nameLen = name.length;
  const typedLen = typed.length;
  if (typedLen < nameLen || name[0] !== typed[0]) return false;
  let nameIndex = 1;
  let typedIndex = 1;
  while (nameIndex < nameLen || typedIndex < typedLen) {
    if (typed[typedIndex] !== name[nameIndex]) {
      if (typed[typedIndex] === typed[typedIndex - 1]) {
        typedIndex++;
      } else return false;
    } else {
      nameIndex++;
      typedIndex++;
    }
  }
  return true;
};

const name = 'aleex',
  typed = 'aalex';

console.log(isLongPressedName(name, typed));
