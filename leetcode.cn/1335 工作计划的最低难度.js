// 1335. 工作计划的最低难度

// 你需要制定一份 d 天的工作计划表。工作之间存在依赖，要想执行第 i 项工作，你必须完成全部 j 项工作（ 0 <= j < i）。

// 你每天 至少 需要完成一项任务。工作计划的总难度是这 d 天每一天的难度之和，而一天的工作难度是当天应该完成工作的最大难度。

// 给你一个整数数组 jobDifficulty 和一个整数 d，分别代表工作难度和需要计划的天数。第 i 项工作的难度是 jobDifficulty[i]。

// 返回整个工作计划的 最小难度 。如果无法制定工作计划，则返回 -1 。

// 输入：jobDifficulty = [6,5,4,3,2,1], d = 2
// 输出：7
// 解释：第一天，您可以完成前 5 项工作，总难度 = 6.
// 第二天，您可以完成最后一项工作，总难度 = 1.
// 计划表的难度 = 6 + 1 = 7

// 输入：jobDifficulty = [9,9,9], d = 4
// 输出：-1
// 解释：就算你每天完成一项工作，仍然有一天是空闲的，你无法制定一份能够满足既定工作时间的计划表。

// 输入：jobDifficulty = [1,1,1], d = 3
// 输出：3
// 解释：工作计划为每天一项工作，总难度为 3 。

// 输入：jobDifficulty = [7,1,7,1,7,1], d = 3
// 输出：15

// 输入：jobDifficulty = [11,111,22,222,33,333,44,444], d = 6
// 输出：843

// 思考：
// 有点像分割数组
设答案为 res
如果 jobDifficulty.length = n, d = n, res = sum(jobDifficulty)
如果 jobDifficulty.length = n, d = n+1, 



const minDifficulty = (jobDifficulty, d) => {
  
};

const jobDifficulty = [11, 111, 22, 222, 33, 333, 44, 444],
  d = 6;

console.log(minDifficulty(jobDifficulty, d));
