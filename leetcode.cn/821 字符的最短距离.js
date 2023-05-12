// 821. 字符的最短距离

// 给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。

// 返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。

// 两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。

// 输入：s = "loveleetcode", c = "e"
// 输出：[3,2,1,0,1,0,0,1,2,2,1,0]

// 输入：s = "aaab", c = "b"
// 输出：[3,2,1,0]

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 94.51% 的用户
// 内存消耗：
// 43.4 MB, 在所有 JavaScript 提交中击败了 31.23% 的用户
const shortestToChar1 = (s, c) => {
  const pos = [];
  const res = [];
  const len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] === c) pos.push(i);
  }
  const posLen = pos.length;
  let posIndex = 0;
  for (let i = 0; i < len; i++) {
    let current;
    if (s[i] === c) {
      current = 0;
    } else {
      current = Math.min(
        Math.abs(pos[posIndex] - i),
        posIndex === posLen - 1 ? Infinity : Math.abs(pos[posIndex + 1] - i)
      );
    }
    res[i] = current;
    if (i > pos[posIndex + 1] && posIndex < posLen) posIndex++;
  }
  return res;
};

// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 99.58% 的用户
// 内存消耗：
// 43.1 MB, 在所有 JavaScript 提交中击败了 46.84% 的用户
const shortestToChar2 = (s, c) => {
  const res = [];
  const len = s.length;
  let prevIndex = null;
  let nextIndex = s.indexOf(c);
  for (let i = 0; i < len; i++) {
    if (s[i] === c) {
      res[i] = 0;
      if (nextIndex === i) {
        prevIndex = nextIndex;
        nextIndex += s.substring(i + 1).indexOf(c) + 1;
      }
    } else {
      if (prevIndex === null) {
        res[i] = nextIndex - i;
      } else if (nextIndex === prevIndex) {
        res[i] = i - prevIndex;
      } else {
        res[i] = Math.min(nextIndex - i, i - prevIndex);
      }
    }
  }
  return res;
};

const s = "loveleetcode", c = "e";

console.log(shortestToChar2(s, c));
