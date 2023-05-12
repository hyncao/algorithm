// 744. 寻找比目标字母大的最小字母

// 给你一个字符数组 letters，该数组按非递减顺序排序，以及一个字符 target。letters 里至少有两个不同的字符。

// 返回 letters 中大于 target 的最小的字符。如果不存在这样的字符，则返回 letters 的第一个字符。

// 输入: letters = ["c", "f", "j"]，target = "a"
// 输出: "c"
// 解释：letters 中字典上比 'a' 大的最小字符是 'c'。

// 输入: letters = ["c","f","j"], target = "c"
// 输出: "f"
// 解释：letters 中字典顺序上大于 'c' 的最小字符是 'f'。

// 输入: letters = ["x","x","y","y"], target = "z"
// 输出: "x"
// 解释：letters 中没有一个字符在字典上大于 'z'，所以我们返回 letters[0]。

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 93.43% 的用户
// 内存消耗：
// 42.9 MB, 在所有 JavaScript 提交中击败了 21.11% 的用户
const nextGreatestLetter1 = (letters, target) => {
  const code = target.charCodeAt();
  let res = letters[0];
  for (const i of letters) {
    if (i.charCodeAt() > code) {
      res = i;
      break;
    }
  }
  return res;
};

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 86.85% 的用户
// 内存消耗：
// 42.8 MB, 在所有 JavaScript 提交中击败了 23.88% 的用户
const nextGreatestLetter2 = (letters, target) => {
  const code = target.charCodeAt();
  const s = new Set(letters);
  let res = letters[0];
  for (let i = code + 1; i < 123; i++) {
    const current = String.fromCharCode(i);
    if (s.has(current)) {
      res = current;
      break;
    }
  }
  return res;
};

const letters = ['x', 'x', 'y', 'y'],
  target = 'z';

console.log(nextGreatestLetter2(letters, target));
