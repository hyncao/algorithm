// 2622. 有时间限制的缓存

// 编写一个类，它允许获取和设置键-值对，并且每个键都有一个 过期时间 。

// 该类有三个公共方法：

// set(key, value, duration) ：接收参数为整型键 key 、整型值 value 和以毫秒为单位的持续时间 duration 。一旦 duration 到期后，这个键就无法访问。

// 如果相同的未过期键已经存在，该方法将返回 true ，否则返回 false 。如果该键已经存在，则它的值和持续时间都应该被覆盖。

// get(key) ：如果存在一个未过期的键，它应该返回这个键相关的值。否则返回 -1 。

// count() ：返回未过期键的总数。

// 示例 1：

// 输入：
// ["TimeLimitedCache", "set", "get", "count", "get"]
// [[], [1, 42, 100], [1], [], [1]]
// [0, 0, 50, 50, 150]
// 输出： [null, false, 42, 1, -1]
// 解释：
// 在 t=0 时，缓存被构造。
// 在 t=0 时，添加一个键值对 (1: 42) ，过期时间为 100ms 。因为该值不存在，因此返回false。
// 在 t=50 时，请求 key=1 并返回值 42。
// 在 t=50 时，调用 count() ，缓存中有一个未过期的键。
// 在 t=100 时，key=1 到期。
// 在 t=150 时，调用 get(1) ，返回 -1，因为缓存是空的。

// 示例 2：

// 输入：
// ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
// [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
// [0, 0, 40, 50, 120, 200, 250]
// 输出： [null, false, true, 50, 50, -1]
// 解释：
// 在 t=0 时，缓存被构造。
// 在 t=0 时，添加一个键值对 (1: 42) ，过期时间为 50ms。因为该值不存在，因此返回false。
// 当 t=40 时，添加一个键值对 (1: 50) ，过期时间为 100ms。因为一个未过期的键已经存在，返回 true 并覆盖这个键的旧值。
// 在 t=50 时，调用 get(1) ，返回 50。
// 在 t=120 时，调用 get(1) ，返回 50。
// 在 t=140 时，key=1 过期。
// 在 t=200 时，调用 get(1) ，但缓存为空，因此返回 -1。
// 在 t=250 时，count() 返回0 ，因为缓存是空的，没有未过期的键。

// 思考：
// 一开始想当然的用 setTimeout ，但是很不精准，于是想到了用 Date

// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 95.45% 的用户
// 内存消耗：
// 40.9 MB, 在所有 JavaScript 提交中击败了 93.18% 的用户
class TimeLimitedCache {
  constructor() {
    this.map = new Map();
    this.timestamp = new Date().getTime();
  }

  set(key, value, duration) {
    const currentTime = new Date().getTime();
    let current = this.map.get(key);
    if (current) {
      current = current.timeout >= currentTime;
    }
    this.map.set(key, {
      value,
      timeout: currentTime + duration,
    });
    return !!current;
  }

  get(key) {
    const currentTime = new Date().getTime();
    const current = this.map.get(key);
    if (current && current.timeout >= currentTime) {
      return current.value;
    }
    return -1;
  }

  count() {
    const currentTime = new Date().getTime();
    let count = 0;
    this.map.forEach(item => {
      if (item.timeout >= currentTime) count++;
    });
    return count;
  }
}

// ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
// [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
// [0, 0, 40, 50, 120, 200, 250]
// [null,false,true,50,50,-1,0]

const cache = new TimeLimitedCache();

console.log(cache.set(1, 42, 50));
setTimeout(() => {
  console.log(cache.set(1, 50, 100));
}, 40);
setTimeout(() => {
  console.log(cache.get(1));
}, 50);
setTimeout(() => {
  console.log(cache.get(1));
}, 120);
setTimeout(() => {
  console.log(cache.get(1));
}, 200);
setTimeout(() => {
  console.log(cache.count());
}, 250);
