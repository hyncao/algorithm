// 796. 旋转字符串

// 给定两个字符串, s 和 goal。如果在若干次旋转操作之后，s 能变成 goal ，那么返回 true 。

// s 的 旋转操作 就是将 s 最左边的字符移动到最右边。

// 例如, 若 s = 'abcde'，在旋转一次之后结果就是'bcdea' 。

// 输入: s = "abcde", goal = "cdeab"
// 输出: true

// 输入: s = "abcde", goal = "abced"
// 输出: false

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 66.96% 的用户
// 内存消耗：
// 40.8 MB, 在所有 JavaScript 提交中击败了 84.82% 的用户
const rotateString1 = (s, goal) => {
  if (s.length !== goal.length) return false;
  const len = s.length;
  let start = 0;
  for (let i = 0; i < goal.length; ) {
    const sIndex = start + i >= len ? start + i - len : start + i;
    if (goal[i] !== s[sIndex]) {
      i = 0;
      start++;
      if (start === len) {
        return false;
      }
    } else {
      i++;
    }
  }
  return true;
};

// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 94.64% 的用户
// 内存消耗：
// 40.9 MB, 在所有 JavaScript 提交中击败了 61.16% 的用户
const rotateString2 = (s, goal) => {
  if (s.length !== goal.length) return false;
  return (s + s).includes(goal);
};

const s = 'abcde',
  goal = 'cdeab';

console.log(rotateString2(s, goal));
