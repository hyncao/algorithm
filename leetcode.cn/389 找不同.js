// 389. 找不同

// 给定两个字符串 s 和 t ，它们只包含小写字母。

// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

// 请找出在 t 中被添加的字母。

// 输入：s = "abcd", t = "abcde"
// 输出："e"
// 解释：'e' 是那个被添加的字母。
// 示例 2：

// 输入：s = "", t = "y"
// 输出："y"

// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 58.48% 的用户
// 内存消耗：
// 43.1 MB, 在所有 JavaScript 提交中击败了 23.73% 的用户
const findTheDifference1 = (s, t) => {
  const sMap = {};
  for (const i of s) {
    if (i in sMap) {
      sMap[i]++;
    } else {
      sMap[i] = 1;
    }
  }
  for (const i of t) {
    if (sMap[i]) {
      sMap[i]--;
    } else {
      return i;
    }
  }
};

// 执行用时：
// 76 ms, 在所有 JavaScript 提交中击败了 26.52% 的用户
// 内存消耗：
// 42.8 MB, 在所有 JavaScript 提交中击败了 38.56% 的用户
const findTheDifference2 = (s, t) => {
  const arrS = s.split('');
  const arrT = t.split('');
  arrS.sort((a, b) => a.charCodeAt() - b.charCodeAt());
  arrT.sort((a, b) => a.charCodeAt() - b.charCodeAt());
  for (const i in arrT) {
    if (arrS[i] !== arrT[i]) return arrT[i];
  }
};

// 两个字符串逐个字母的charCode之和相减，就是多出的字母
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 58.48% 的用户
// 内存消耗：
// 41.8 MB, 在所有 JavaScript 提交中击败了 74.80% 的用户
const findTheDifference3 = (s, t) => {
  let charCodeS = 0;
  let charCodeT = 0;
  for (const i of s) {
    charCodeS += i.charCodeAt();
  }
  for (const i of t) {
    charCodeT += i.charCodeAt();
  }
  return String.fromCharCode(charCodeT - charCodeS);
};

// 把字符串转化为纯数字数组，两个数组找唯一的不同，用异或
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 75.45% 的用户
// 内存消耗：
// 41.9 MB, 在所有 JavaScript 提交中击败了 70.02% 的用户
const findTheDifference4 = (s, t) => {
  let res = 0;
  for (const i of s) {
    res ^= i.charCodeAt();
  }
  for (const i of t) {
    res ^= i.charCodeAt();
  }
  return String.fromCharCode(res);
};

const s = 'abcd';
const t = 'abcdd';

console.log(findTheDifference4(s, t));
