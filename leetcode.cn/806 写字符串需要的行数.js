// 806. 写字符串需要的行数

// 我们要把给定的字符串 S 从左到右写到每一行上，每一行的最大宽度为 100 个单位，如果我们在写某个字母的时候会使这行超过了 100 个单位，那么我们应该把这个字母写到下一行。

// 我们给定了一个数组 widths ，这个数组 widths[0] 代表 'a' 需要的单位， widths[1] 代表 'b' 需要的单位，...， widths[25] 代表 'z' 需要的单位。

// 现在回答两个问题：至少多少行能放下S，以及最后一行使用的宽度是多少个单位？将你的答案作为长度为2的整数列表返回。

// 示例 1:
// 输入:
// widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
// S = "abcdefghijklmnopqrstuvwxyz"
// 输出: [3, 60]
// 。
// 示例 2:
// 输入:
// widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
// S = "bbbcccdddaaa"
// 输出: [2, 4]

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 95.10% 的用户
// 内存消耗：
// 41.7 MB, 在所有 JavaScript 提交中击败了 30.39% 的用户
const numberOfLines1 = (widths, s) => {
  let line = 1;
  let current = 0;
  for (const i of s) {
    const width = widths[i.charCodeAt() - 97];
    current += width;
    if (current === 100) {
      line++;
      current = 0;
    }
    if (current > 100) {
      line++;
      current = width;
    }
  }
  if (current === 0) {
    line--;
    current = 100;
  }
  return [line, current];
};

// 其实根本不用考虑 === 100 的情况，只需要考虑 > 100
// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 100.00% 的用户
// 内存消耗：
// 41.5 MB, 在所有 JavaScript 提交中击败了 48.04% 的用户
const numberOfLines2 = (widths, s) => {
  let line = 1;
  let current = 0;
  for (const i of s) {
    const width = widths[i.charCodeAt() - 97];
    current += width;
    if (current > 100) {
      line++;
      current = width;
    }
  }
  return [line, current];
};

const widths = [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  s = 'bbbcccdddaaa';

console.log(numberOfLines2(widths, s));
