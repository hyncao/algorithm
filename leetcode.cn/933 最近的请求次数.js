// 933. 最近的请求次数
// 写一个 RecentCounter 类来计算特定时间范围内最近的请求。

// 请你实现 RecentCounter 类：

// RecentCounter() 初始化计数器，请求数为 0 。
// int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
// 保证 每次对 ping 的调用都使用比之前更大的 t 值。

// 输入：
// ["RecentCounter", "ping", "ping", "ping", "ping"]
// [[], [1], [100], [3001], [3002]]
// 输出：
// [null, 1, 2, 3, 3]

// 执行用时：
// 468 ms, 在所有 JavaScript 提交中击败了 11.62% 的用户
// 内存消耗：
// 55.1 MB, 在所有 JavaScript 提交中击败了 5.10% 的用户
class RecentCounter1 {
  constructor() {
    this.queue = [];
  }

  ping(t) {
    this.queue.push(t);
    const currentQueue = [];
    for (const i of this.queue) {
      if (i >= t - 3000) {
        currentQueue.push(i);
      }
    }
    this.queue = currentQueue;
    return currentQueue.length;
  }
}

// 二分法
// 执行用时：
// 296 ms, 在所有 JavaScript 提交中击败了 19.50% 的用户
// 内存消耗：
// 55.3 MB, 在所有 JavaScript 提交中击败了 5.10% 的用户
class RecentCounter2 {
  constructor() {
    this.queue = [];
  }

  ping(t) {
    this.queue.push(t);
    const len = this.queue.length;
    let start = 0;
    let end = len - 1;
    let middle = (start + end) >> 1;
    while (start < end) {
      middle = (start + end) >> 1;
      const target = this.queue[middle];
      if (target === t - 3000 || (this.queue[middle] > t - 3000 && this.queue[middle - 1] < t - 3000)) {
        start = middle;
        break;
      }
      if (this.queue[middle] > t - 3000) {
        end = middle - 1;
      }
      if (this.queue[middle] < t - 3000) {
        start = middle + 1;
      }
    }
    this.queue = this.queue.slice(start);
    return this.queue.length;
  }
}

// 执行用时：
// 188 ms, 在所有 JavaScript 提交中击败了 52.62% 的用户
// 内存消耗：
// 50.1 MB, 在所有 JavaScript 提交中击败了 86.52% 的用户
class RecentCounter3 {
  constructor() {
    this.queue = [];
  }

  ping(t) {
    this.queue.push(t);
    while (this.queue[0] < t - 3000) {
      this.queue.shift();
    }
    return this.queue.length;
  }
}

const recentCounter = new RecentCounter3();
console.log(recentCounter.ping(1));
console.log(recentCounter.ping(100));
console.log(recentCounter.ping(3001));
console.log(recentCounter.ping(3002));
