// 830. 较大分组的位置

// 在一个由小写字母构成的字符串 s 中，包含由一些连续的相同字符所构成的分组。

// 例如，在字符串 s = "abbxxxxzyy" 中，就含有 "a", "bb", "xxxx", "z" 和 "yy" 这样的一些分组。

// 分组可以用区间 [start, end] 表示，其中 start 和 end 分别表示该分组的起始和终止位置的下标。上例中的 "xxxx" 分组用区间表示为 [3,6] 。

// 我们称所有包含大于或等于三个连续字符的分组为 较大分组 。

// 找到每一个 较大分组 的区间，按起始位置下标递增顺序排序后，返回结果。

// 输入：s = "abbxxxxzzy"
// 输出：[[3,6]]
// 解释："xxxx" 是一个起始于 3 且终止于 6 的较大分组。

// 输入：s = "abc"
// 输出：[]
// 解释："a","b" 和 "c" 均不是符合要求的较大分组。

// 输入：s = "abcdddeeeeaabbbcd"
// 输出：[[3,5],[6,9],[12,14]]

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 93.83% 的用户
// 内存消耗：
// 43.9 MB, 在所有 JavaScript 提交中击败了 55.55% 的用户
const largeGroupPositions = s => {
  const res = [];
  const len = s.length;
  let start = 0;
  let letter;
  for (let i = 0; i < len; i++) {
    if (letter !== s[i] && i - 1 - start >= 2) res.push([start, i - 1]);
    if (letter !== s[i]) {
      start = i;
      letter = s[i];
    }
    if (i === len - 1 && i - start >= 2) {
      res.push([start, i]);
    }
  }
  return res;
};

const s = 'abcdddeeeeaabbbcddd';

console.log(JSON.stringify(largeGroupPositions(s)));
