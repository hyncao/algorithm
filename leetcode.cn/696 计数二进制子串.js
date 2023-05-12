// 696. 计数二进制子串

// 给定一个字符串 s，统计并返回具有相同数量 0 和 1 的非空（连续）子字符串的数量，并且这些子字符串中的所有 0 和所有 1 都是成组连续的。

// 重复出现（不同位置）的子串也要统计它们出现的次数。

// 输入：s = "00110011"
// 输出：6
// 解释：6 个子串满足具有相同数量的连续 1 和 0 ："0011"、"01"、"1100"、"10"、"0011" 和 "01" 。
// 注意，一些重复出现的子串（不同位置）要统计它们出现的次数。
// 另外，"00110011" 不是有效的子串，因为所有的 0（还有 1 ）没有组合在一起。

// 输入：s = "10101"
// 输出：4

// 思路：
// 拿"00110011"举例来说，枚举相同字符的个数作为一个新的数组，可得：
// [2222] 2个0 2个1 2个0 2个1
// 两对个数中的小值相加即为答案
// min(2, 2) + min(2, 2) + min(2, 2) = 6

// O(n) O(n)
// 执行用时：
// 76 ms, 在所有 JavaScript 提交中击败了 56.91% 的用户
// 内存消耗：
// 48 MB, 在所有 JavaScript 提交中击败了 47.97% 的用户
const countBinarySubstrings1 = s => {
  const arr = [];
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      arr.push(count);
      count = 1;
    }
  }
  arr.push(count);
  let res = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    res += Math.min(arr[i], arr[i + 1]);
  }
  return res;
};

// 用 last 代指上一个数量，取代了原来的 count 数组
// O(n) O(1)
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 70.73% 的用户
// 内存消耗：
// 43.9 MB, 在所有 JavaScript 提交中击败了 76.42% 的用户
const countBinarySubstrings2 = s => {
  let res = 0;
  let last = 0;
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      if (last) {
        res += Math.min(last, count);
      }
      last = count;
      count = 1;
    }
  }
  res += Math.min(last, count);
  return res;
};

const s = '00110011';

console.log(countBinarySubstrings2(s));
