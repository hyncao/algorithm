// 1798. 你能构造出连续值的最大数目

// 给你一个长度为 n 的整数数组 coins ，它代表你拥有的 n 个硬币。第 i 个硬币的值为 coins[i] 。如果你从这些硬币中选出一部分硬币，它们的和为 x ，那么称，你可以 构造 出 x 。

// 请返回从 0 开始（包括 0 ），你最多能 构造 出多少个连续整数。

// 你可以不选任何硬币构造出 0

// 输入：coins = [1,3]
// 输出：2

// 输入：coins = [1,1,1,4]
// 输出：8

// 一开始陷入误区了，题目要求是必须 从0开始，而不是任意位置。
const getMaximumConsecutive = coins => {
  let max = 1;
  const sorted = coins.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] > max) break;
    max += sorted[i];
  }

  return max;
};

const coins = [1, 4, 10, 3, 1];

console.log(getMaximumConsecutive(coins));
