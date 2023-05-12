// 1626. 无矛盾的最佳球队

// TODO

// 假设你是球队的经理。对于即将到来的锦标赛，你想组合一支总体得分最高的球队。球队的得分是球队中所有球员的分数 总和 。

// 然而，球队中的矛盾会限制球员的发挥，所以必须选出一支 没有矛盾 的球队。

// 如果一名年龄较小球员的分数 严格大于 一名年龄较大的球员，则存在矛盾。同龄球员之间不会发生矛盾。

// 给你两个列表 scores 和 ages，其中每组 scores[i] 和 ages[i] 表示第 i 名球员的分数和年龄。请你返回 所有可能的无矛盾球队中得分最高那支的分数 。

// 输入：scores = [1,3,5,10,15], ages = [1,2,3,4,5]
// 输出：34
// 解释：你可以选中所有球员。

// 输入：scores = [4,5,6,5], ages = [2,1,2,1]
// 输出：16
// 解释：最佳的选择是后 3 名球员。注意，你可以选中多个同龄球员。

// 输入：scores = [1,2,3,5], ages = [8,9,10,1]
// 输出：6

// 输入：scores = [1,3,3,3,15], ages = [2,2,3,4,1]
// 输出：15

const bestTeamScore = (scores, ages) => {
  const data = ages.map((i, index) => ({ age: i, score: scores[index] }));
  data.sort((a, b) => a.age - b.age);
  let max = 0;
  data.forEach((item, index) => {
    const filtered = data.filter(
      i => (i.age >= item.age && i.score >= item.score) || (i.age <= item.age && i.score <= item.score)
    );
    const current = filtered.reduce((p, c) => p + c.score, 0);
    // const current = data
    //   .filter(i => (i.age >= item.age && i.score >= item.score) || (i.age <= item.age && i.score <= item.score))
    //   .reduce((p, c) => p + c.score, 0);
    max = Math.max(max, current);
  });
  return max;
};

// 期望：16
const scores = [4, 5, 6, 5],
  ages = [2, 1, 2, 1];

console.log(bestTeamScore(scores, ages));
