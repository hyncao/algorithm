// 703. 数据流中的第 K 大元素

// 设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

// 请实现 KthLargest 类：

// KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
// int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。

// 示例：

// 输入：
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// 输出：
// [null, 4, 5, 5, 8, 8]

// 解释：
// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3);   // return 4
// kthLargest.add(5);   // return 5
// kthLargest.add(10);  // return 5
// kthLargest.add(9);   // return 8
// kthLargest.add(4);   // return 8

// 题目数据保证，在查找第 k 大元素时，数组中至少有 k 个元素

// 执行用时：
// 108 ms, 在所有 JavaScript 提交中击败了 89.67% 的用户
// 内存消耗：
// 47.8 MB, 在所有 JavaScript 提交中击败了 94.63% 的用户
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.arr = [...nums];
    this.arr.sort((a, b) => a - b);
  }

  add(val) {
    let l = 0;
    let r = this.arr.length;
    while (r - l > 0) {
      const m = (l + r) >> 1;
      if (this.arr[m] > val) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    this.arr.splice(r, 0, val);
    return this.arr[this.arr.length - this.k];
  }
}

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3));
console.log(kthLargest.add(5));
console.log(kthLargest.add(10));
console.log(kthLargest.add(9));
console.log(kthLargest.add(4));

// 期望：-2, 0, 2, 2, 4
// const kthLargest = new KthLargest(1, [-2]);
// console.log(kthLargest.add(-3));
// console.log(kthLargest.add(0));
// console.log(kthLargest.add(2));
// console.log(kthLargest.add(-1));
// console.log(kthLargest.add(4));
