// 506. 相对名次

// 给你一个长度为 n 的整数数组 score ，其中 score[i] 是第 i 位运动员在比赛中的得分。所有得分都 互不相同 。

// 运动员将根据得分 决定名次 ，其中名次第 1 的运动员得分最高，名次第 2 的运动员得分第 2 高，依此类推。运动员的名次决定了他们的获奖情况：

// 名次第 1 的运动员获金牌 "Gold Medal" 。
// 名次第 2 的运动员获银牌 "Silver Medal" 。
// 名次第 3 的运动员获铜牌 "Bronze Medal" 。
// 从名次第 4 到第 n 的运动员，只能获得他们的名次编号（即，名次第 x 的运动员获得编号 "x"）。
// 使用长度为 n 的数组 answer 返回获奖，其中 answer[i] 是第 i 位运动员的获奖情况。

// 输入：score = [5,4,3,2,1]
// 输出：["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// 解释：名次为 [1st, 2nd, 3rd, 4th, 5th] 。

// 输入：score = [10,3,8,9,4]
// 输出：["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// 解释：名次为 [1st, 5th, 3rd, 2nd, 4th] 。

// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 94.17% 的用户
// 内存消耗：
// 44.5 MB, 在所有 JavaScript 提交中击败了 20.83% 的用户
const findRelativeRanks = score => {
  const sorted = [...score];
  sorted.sort((a, b) => b - a);
  const map = new Map();
  sorted.forEach((item, index) => {
    map.set(item, index);
  });
  return score.map(i => {
    const index = map.get(i);
    if (index === 0) return 'Gold Medal';
    if (index === 1) return 'Silver Medal';
    if (index === 2) return 'Bronze Medal';
    return `${index + 1}`;
  });
};

const score = [10, 3, 8, 9, 4];

console.log(findRelativeRanks(score));
