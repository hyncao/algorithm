// 面试题 16.25. LRU 缓存

// https://leetcode.cn/problems/lru-cache-lcci/

// 设计和构建一个“最近最少使用”缓存，该缓存会删除最近最少使用的项目。缓存应该从键映射到值(允许你插入和检索特定键对应的值)，并在初始化时指定最大容量。当缓存被填满时，它应该删除最近最少使用的项目。

// 它应该支持以下操作： 获取数据 get 和 写入数据 put 。

// 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
// 写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

// LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // 返回  1
// cache.put(3, 3);    // 该操作会使得密钥 2 作废
// cache.get(2);       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得密钥 1 作废
// cache.get(1);       // 返回 -1 (未找到)
// cache.get(3);       // 返回  3
// cache.get(4);       // 返回  4

// 开莽
// 执行用时：
// 400 ms, 在所有 JavaScript 提交中击败了 5.43%的用户
// 内存消耗：
// 55.9 MB, 在所有 JavaScript 提交中击败了 15.76% 的用户
class LRUCache {
  constructor(size) {
    this.storage = {};
    this.size = size;
    this.rank = [];
  }

  put(key, value) {
    if (this.storage[key]) {
      const currentIndex = this.rank.indexOf(key);
      this.rank.splice(currentIndex, 1);
    } else {
      if (Object.keys(this.storage).length === this.size) {
        delete this.storage[this.rank[this.size - 1]];
        this.rank.splice(this.size - 1, 1);
      }
    }
    this.rank.unshift(key);
    this.storage[key] = value;
  }

  get(key) {
    let res = -1;
    if (this.storage[key]) {
      const currentIndex = this.rank.indexOf(key);
      this.rank.splice(currentIndex, 1);
      this.rank.unshift(key);
      res = this.storage[key];
    }
    return res;
  }
}

// 用 hashMap 存储
// keys() 返回一个引用的 Iterator 对象。它包含按照顺序插入 Map 对象中每个元素的 key 值。
// 执行用时：
// 188 ms, 在所有 JavaScript 提交中击败了 48.91% 的用户
// 内存消耗：
// 54.9 MB, 在所有 JavaScript 提交中击败了 53.80% 的用户
class LRUCache2 {
  constructor(size) {
    this.storage = new Map();
    this.size = size;
  }

  put(key, value) {
    if (this.storage.has(key)) this.storage.delete(key);
    this.storage.set(key, value);
    if (this.storage.size > this.size) {
      this.storage.delete(this.storage.keys().next().value);
    }
  }

  get(key) {
    let res = -1;
    if (this.storage.has(key)) {
      res = this.storage.get(key);
      this.storage.delete(key);
      // 如此这般可以将 key 更新为最新
      this.storage.set(key, res);
    }
    return res;
  }
}

const cache = new LRUCache2(2 /* 缓存容量 */);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // 返回  1
cache.put(3, 3); // 该操作会使得密钥 2 作废
cache.get(2); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得密钥 1 作废
cache.get(1); // 返回 -1 (未找到)
cache.get(3); // 返回  3
cache.get(4); // 返回  4
