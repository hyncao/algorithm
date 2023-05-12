// 2409. 统计共同度过的日子数

// Alice 和 Bob 计划分别去罗马开会。

// 给你四个字符串 arriveAlice ，leaveAlice ，arriveBob 和 leaveBob 。

// Alice 会在日期 arriveAlice 到 leaveAlice 之间在城市里（日期为闭区间），而 Bob 在日期 arriveBob 到 leaveBob 之间在城市里（日期为闭区间）。

// 每个字符串都包含 5 个字符，格式为 "MM-DD" ，对应着一个日期的月和日。

// 请你返回 Alice和 Bob 同时在罗马的天数。

// 你可以假设所有日期都在 同一个 自然年，而且 不是 闰年。每个月份的天数分别为：[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] 。

// 输入：arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"
// 输出：3
// 解释：Alice 从 8 月 15 号到 8 月 18 号在罗马。Bob 从 8 月 16 号到 8 月 19 号在罗马，他们同时在罗马的日期为 8 月 16、17 和 18 号。所以答案为 3 。

// 输入：arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31"
// 输出：0
// 解释：Alice 和 Bob 没有同时在罗马的日子，所以我们返回 0 。

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 72.09% 的用户
// 内存消耗：
// 41 MB, 在所有 JavaScript 提交中击败了 48.84% 的用户
const countDaysTogether = (arriveAlice, leaveAlice, arriveBob, leaveBob) => {
  const map = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const arriveAliceD = new Date(`2023-${arriveAlice}`);
  const leaveAliceD = new Date(`2023-${leaveAlice}`);
  const arriveBobD = new Date(`2023-${arriveBob}`);
  const leaveBobD = new Date(`2023-${leaveBob}`);
  const delta = Math.min(leaveAliceD, leaveBobD) - Math.max(arriveAliceD, arriveBobD);
  if (delta < 0) return 0;
  return delta / 24 / 60 / 60 / 1000 + 1;
};

const arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31"

console.log(countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob));
