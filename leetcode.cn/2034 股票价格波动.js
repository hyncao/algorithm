// 2034. 股票价格波动

// 给你一支股票价格的数据流。数据流中每一条记录包含一个 时间戳 和该时间点股票对应的 价格 。

// 不巧的是，由于股票市场内在的波动性，股票价格记录可能不是按时间顺序到来的。某些情况下，有的记录可能是错的。

// 如果两个有相同时间戳的记录出现在数据流中，前一条记录视为错误记录，后出现的记录 更正 前一条错误的记录。

// 请你设计一个算法，实现：

// 更新 股票在某一时间戳的股票价格，如果有之前同一时间戳的价格，这一操作将 更正 之前的错误价格。
// 找到当前记录里 最新股票价格 。最新股票价格 定义为时间戳最晚的股票价格。
// 找到当前记录里股票的 最高价格 。
// 找到当前记录里股票的 最低价格 。
// 请你实现 StockPrice 类：

// StockPrice() 初始化对象，当前无股票价格记录。
// void update(int timestamp, int price) 在时间点 timestamp 更新股票价格为 price 。
// int current() 返回股票 最新价格 。
// int maximum() 返回股票 最高价格 。
// int minimum() 返回股票 最低价格 。

// 输入：
// ["StockPrice", "update", "update", "current", "maximum", "update", "maximum", "update", "minimum"]
// [[], [1, 10], [2, 5], [], [], [1, 3], [], [4, 2], []]
// 输出：
// [null, null, null, 5, 10, null, 5, null, 2]

// 执行用时：
// 8516 ms, 在所有 JavaScript 提交中击败了 5.28% 的用户
// 内存消耗：
// 80.27 MB, 在所有 JavaScript 提交中击败了 79.23% 的用户
class StockPrice {
  constructor() {
    this.map = new Map();
    this.currentTime = -Infinity;
  }

  update(timestamp, price) {
    this.currentTime = Math.max(this.currentTime, timestamp);
    this.map.set(timestamp, price);
  }

  current() {
    return this.map.get(this.currentTime);
  }

  maximum() {
    let max = -Infinity;
    const values = this.map.values();
    for (let i of values) {
      max = Math.max(max, i);
    }
    return max;
  }

  minimum() {
    let min = Infinity;
    const values = this.map.values();
    for (let i of values) {
      min = Math.min(min, i);
    }
    return min;
  }
}

const stockPrice = new StockPrice();

console.log(stockPrice.update(1, 10));
console.log(stockPrice.update(2, 5));
console.log(stockPrice.current());
console.log(stockPrice.maximum());
console.log(stockPrice.update(1, 3));
console.log(stockPrice.maximum());
console.log(stockPrice.update(4, 2));
console.log(stockPrice.minimum());

class StockPrice {
  constructor() {
    this.maxTime = 0;
    this.timeMap = new Map();
    this.maxPrice = new PriorityQueue((a, b) => a[0] - b[0] > 0);
    this.minPrice = new PriorityQueue((a, b) => a[0] - b[0] < 0);
  }

  update(timestamp, price) {
    this.maxTime = Math.max(timestamp, this.maxTime);
    this.timeMap.set(timestamp, price);
    this.maxPrice.offer([price, timestamp]);
    this.minPrice.offer([price, timestamp]);
  }

  current() {
    return this.timeMap.get(this.maxTime);
  }

  maximum() {
    while (true) {
      const cur = this.maxPrice.peek();
      if (this.timeMap.get(cur[1]) === cur[0]) return cur[0];
      this.maxPrice.poll();
    }
  }

  minimum() {
    while (true) {
      const cur = this.minPrice.peek();
      if (this.timeMap.get(cur[1]) === cur[0]) return cur[0];
      this.minPrice.poll();
    }
  }
}

class PriorityQueue {
  constructor(compare = (a, b) => a < b) {
    this.data = [];
    this.size = 0;
    this.compare = compare;
  }

  peek() {
    return this.size === 0 ? null : this.data[0];
  }

  offer(val) {
    this.data.push(val);
    this._shifUp(this.size++);
  }

  poll() {
    if (this.size === 0) {
      return null;
    }
    this._swap(0, --this.size);
    this._shifDown(0);
    return this.data.pop();
  }

  _parent(index) {
    return (index - 1) >> 1;
  }

  _child(index) {
    return (index << 1) + 1;
  }

  _shifDown(index) {
    while (this._child(index) < this.size) {
      let child = this._child(index);
      if (child + 1 < this.size && this.compare(this.data[child + 1], this.data[child])) {
        child = child + 1;
      }
      if (this.compare(this.data[index], this.data[child])) {
        break;
      }
      this._swap(index, child);
      index = child;
    }
  }

  _shifUp(index) {
    while (this._parent(index) >= 0 && this.compare(this.data[index], this.data[this._parent(index)])) {
      this._swap(index, this._parent(index));
      index = this._parent(index);
    }
  }

  _swap(a, b) {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
  }
}
