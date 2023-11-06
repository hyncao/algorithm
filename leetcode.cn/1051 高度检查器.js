// 1051. 高度检查器

// 学校打算为全体学生拍一张年度纪念照。根据要求，学生需要按照 非递减 的高度顺序排成一行。

// 排序后的高度情况用整数数组 expected 表示，其中 expected[i] 是预计排在这一行中第 i 位的学生的高度（下标从 0 开始）。

// 给你一个整数数组 heights ，表示 当前学生站位 的高度情况。heights[i] 是这一行中第 i 位学生的高度（下标从 0 开始）。

// 返回满足 heights[i] != expected[i] 的 下标数量 。

// 输入：heights = [1,1,4,2,1,3]
// 输出：3

// 输入：heights = [5,1,2,3,4]
// 输出：5

// 输入：heights = [1,2,3,4,5]
// 输出：0

// 开莽，操，没想到成绩这么好
// O(n*log(n)) O(n)
// 56 ms, 在所有 JavaScript 提交中击败了 86.42% 的用户
// 内存消耗：
// 39.84 MB, 在所有 JavaScript 提交中击败了 97.53% 的用户
const heightChecker = heights => {
  const sorted = [...heights];
  sorted.sort((a, b) => a - b);
  let count = 0;
  const len = heights.length;
  for (let i = 0; i < len; i++) {
    if (heights[i] !== sorted[i]) count++;
  }
  return count;
};

const heights = [1, 1, 4, 2, 1, 3];

console.log(heightChecker(heights));
