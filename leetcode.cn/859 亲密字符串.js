// 859. 亲密字符串

// 给你两个字符串 s 和 goal ，只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果，就返回 true ；否则返回 false 。

// 交换字母的定义是：取两个下标 i 和 j （下标从 0 开始）且满足 i != j ，接着交换 s[i] 和 s[j] 处的字符。

// 例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。

// 输入：s = "ab", goal = "ba"
// 输出：true
// 解释：你可以交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 相等。

// 输入：s = "ab", goal = "ab"
// 输出：false
// 解释：你只能交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 不相等。

// 输入：s = "aa", goal = "aa"
// 输出：true

// 注意：
// s = "aa", goal = "aa" return true
// s = "ab", goal = "ab" return false
// s = "abac", goal = "abac" return true
// s = "abcd", goal = "badc" return false

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 96.84% 的用户
// 内存消耗：
// 43.5 MB, 在所有 JavaScript 提交中击败了 12.03% 的用户
const buddyStrings1 = (s, goal) => {
  const len = s.length;
  if (goal.length !== len) return false;
  if (s === goal) return new Set(s).size < len;
  let diff1 = '';
  let diff2 = '';
  for (let i = 0; i < len; i++) {
    if (s[i] !== goal[i]) {
      if (diff1 === diff2) {
        diff1 = s[i];
        diff2 = goal[i];
      } else if (s[i] === diff2 && goal[i] === diff1) return s.substring(i + 1) === goal.substring(i + 1);
      else return false;
    }
  }
  return false;
};

const buddyStrings2 = (s, goal) => {
  const len = s.length;
  if (goal.length !== len) return false;
};

const s = 'abccd',
  goal = 'abddc';

console.log(buddyStrings2(s, goal));
