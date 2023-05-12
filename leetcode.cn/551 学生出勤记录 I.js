// 551. 学生出勤记录 I
// 给你一个字符串 s 表示一个学生的出勤记录，其中的每个字符用来标记当天的出勤情况（缺勤、迟到、到场）。记录中只含下面三种字符：

// 'A'：Absent，缺勤
// 'L'：Late，迟到
// 'P'：Present，到场
// 如果学生能够 同时 满足下面两个条件，则可以获得出勤奖励：

// 按 总出勤 计，学生缺勤（'A'）严格 少于两天。
// 学生 不会 存在 连续 3 天或 连续 3 天以上的迟到（'L'）记录。
// 如果学生可以获得出勤奖励，返回 true ；否则，返回 false 。

// 输入：s = "PPALLP"
// 输出：true
// 解释：学生缺勤次数少于 2 次，且不存在 3 天或以上的连续迟到记录。

// 输入：s = "PPALLL"
// 输出：false

// 执行用时：
// 44 ms, 在所有 JavaScript 提交中击败了 99.58% 的用户
// 内存消耗：
// 41.2 MB, 在所有 JavaScript 提交中击败了 36.25% 的用户
const checkRecord = s => {
  let res = true;
  let A = 0;
  let L = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      L++;
    } else {
      L = 0;
      if (s[i] === 'A') {
        A++;
      }
    }
    if (A > 1) {
      return false;
    }
    if (L > 2) {
      return false;
    }
  }
  return res;
};

const s = 'PPALLP';

console.log(checkRecord(s));
