// 2619. 数组原型对象的最后一个元素

// 请你编写一段代码实现一个数组方法，使任何数组都可以调用 array.last() 方法，这个方法将返回数组最后一个元素。如果数组中没有元素，则返回 -1 。

// 输入：nums = [1,2,3]
// 输出：3
// 解释：调用 nums.last() 后返回最后一个元素： 3。

// 输入：nums = []
// 输出：-1
// 解释：因为此数组没有元素，所以应该返回 -1。

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 35.31% 的用户
// 内存消耗：
// 41.1 MB, 在所有 JavaScript 提交中击败了 23.19% 的用户
Array.prototype.last = function () {
  if (this.length === 0) return -1;
  return this[this.length - 1];
};
