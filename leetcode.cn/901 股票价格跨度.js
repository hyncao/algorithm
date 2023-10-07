// 901. 股票价格跨度

// 设计一个算法收集某些股票的每日报价，并返回该股票当日价格的 跨度 。

// 当日股票价格的 跨度 被定义为股票价格小于或等于今天价格的最大连续日数（从今天开始往回数，包括今天）。

// 例如，如果未来 7 天股票的价格是 [100,80,60,70,60,75,85]，那么股票跨度将是 [1,1,1,2,1,4,6] 。

// 实现 StockSpanner 类：

// StockSpanner() 初始化类对象。
// int next(int price) 给出今天的股价 price ，返回该股票当日价格的 跨度 。

// 输入：
// ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
// [[], [100], [80], [60], [70], [60], [75], [85]]
// 输出：
// [null, 1, 1, 1, 2, 1, 4, 6]

// 注: 必须从当天开始倒数计数, 不能从第一天开始计数

// O(n) O(n)
// 执行用时：
// 588 ms, 在所有 JavaScript 提交中击败了 24.84% 的用户
// 内存消耗：
// 48.93 MB, 在所有 JavaScript 提交中击败了 100% 的用户
class StockSpanner {
  constructor() {
    this.list = [];
    // 使用一个变量来存储长度, 能节省 this.list.length 空间成本
    this.len = 0;
  }

  next(stock) {
    this.list.push(stock);
    this.len++;
    let spanner = 0;
    for (let i = this.len -1; i >= 0; i--) {
      if (this.list[i] <= stock) {
        spanner++;
      } else {
        break;
      }
    }
    return spanner;
  }
}

console.log(stockSpanner.next(32));
console.log(stockSpanner.next(82));
console.log(stockSpanner.next(73));
console.log(stockSpanner.next(99));
console.log(stockSpanner.next(91));
