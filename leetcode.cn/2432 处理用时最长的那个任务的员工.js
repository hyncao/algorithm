// 2432. 处理用时最长的那个任务的员工

// 共有 n 位员工，每位员工都有一个从 0 到 n - 1 的唯一 id 。

// 给你一个二维整数数组 logs ，其中 logs[i] = [idi, leaveTimei] ：

// idi 是处理第 i 个任务的员工的 id ，且

// leaveTimei 是员工完成第 i 个任务的时刻。所有 leaveTimei 的值都是 唯一 的。

// 注意，第 i 个任务在第 (i - 1) 个任务结束后立即开始，且第 0 个任务从时刻 0 开始。

// 返回处理用时最长的那个任务的员工的 id 。如果存在两个或多个员工同时满足，则返回几人中 最小 的 id 。

// 输入：n = 10, logs = [[0,3],[2,5],[0,9],[1,15]]
// 输出：1

// 输入：n = 26, logs = [[1,1],[3,7],[2,12],[7,17]]
// 输出：3

// 输入：n = 2, logs = [[0,10],[1,20]]
// 输出：0

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 100.00% 的用户
// 内存消耗：
// 45.5 MB, 在所有 JavaScript 提交中击败了 67.50% 的用户
const hardestWorker = (n, logs) => {
  let prev = 0;
  let long = 0;
  let res;
  for (const i of logs) {
    const during = i[1] - prev;
    if (during > long) {
      res = i[0];
      long = during;
    } else if (during === long) res = Math.min(res, i[0]);
    prev = i[1];
  }
  return res;
};

const n = 70,
  logs = [
    [1, 1],
    [3, 7],
    [2, 12],
    [7, 17],
  ];

console.log(hardestWorker(n, logs));
