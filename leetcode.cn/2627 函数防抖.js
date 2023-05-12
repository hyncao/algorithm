// 2627. 函数防抖

// 请你编写一个函数，接收参数为另一个函数和一个以毫秒为单位的时间 t ，并返回该函数的 函数防抖 后的结果。

// 函数防抖 方法是一个函数，它的执行被延迟了 t 毫秒，如果在这个时间窗口内再次调用它，它的执行将被取消。你编写的防抖函数也应该接收传递的参数。

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 73.23% 的用户
// 内存消耗：
// 41.2 MB, 在所有 JavaScript 提交中击败了 5.05% 的用户
const debounce = (fn, t) => {
  let timer = new Date();
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
};
