// 121. 买卖股票的最佳时机

// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

// 输入：[7,1,5,3,6,4]
// 输出：5

// 开莽 O(n²)
// 超时了
const maxProfit1 = prices => {
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    res = Math.max(Math.max.apply(null, prices.slice(i)) - prices[i], res);
  }
  return res;
};

// 分析:
// 假如我们找到了最低点 X, 和符合条件的最高点 Y
// 那么 X 的 index 一定小于 Y 的 index
// 所以其实我们只用遍历一次就够了
// 如果找到了新的最低点, 替换之接着遍历之后的数找最高点即可
// O(n)
// 执行用时：
// 76 ms, 在所有 JavaScript 提交中击败了 83.65% 的用户
// 内存消耗：
// 50.7 MB, 在所有 JavaScript 提交中击败了 54.83% 的用户
const maxProfit2 = prices => {
  let min = Infinity;
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      // 替换最低点
      min = prices[i];
    } else if (prices[i] - min > res) {
      // 寻找最高点并且替换差值
      res = prices[i] - min;
    }
  }
  return res;
};

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit2(prices));
