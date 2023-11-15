// 1154. 一年中的第几天

// 给你一个字符串 date ，按 YYYY-MM-DD 格式表示一个 现行公元纪年法 日期。返回该日期是当年的第几天。

// 示例 1：

// 输入：date = "2019-01-09"
// 输出：9
// 解释：给定日期是2019年的第九天。

// 示例 2：

// 输入：date = "2019-02-10"
// 输出：41

// 思考：
// 小心闰年
// (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)

// O(1) O(1)
// 执行用时：
// 160 ms, 在所有 JavaScript 提交中击败了 58.25% 的用户
// 内存消耗：
// 48.30 MB, 在所有 JavaScript 提交中击败了 79.61% 的用户
const dayOfYear = date => {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7) - 0;
  const day = date.slice(8, 10) - 0;
  const leap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  const days = [31, 28 + leap, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let res = 0;
  for (let i = 0; i < month - 1; i++) {
    res += days[i];
  }
  res += day;
  return res;
};

const date = '2016-09-10';

console.log(dayOfYear(date));
