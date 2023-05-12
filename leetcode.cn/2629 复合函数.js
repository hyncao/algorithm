// 2629. 复合函数

// 请你编写一个函数，它接收一个函数数组 [f1, f2, f3，…]， fn] ，并返回一个新的函数 fn ，它是函数数组的 复合函数 。

// [f(x)， g(x)， h(x)] 的 复合函数 为 fn(x) = f(g(h(x))) 。

// 一个空函数列表的 复合函数 是 恒等函数 f(x) = x 。

// 你可以假设数组中的每个函数接受一个整型参数作为输入，并返回一个整型作为输出。

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 95.27% 的用户
// 内存消耗：
// 42.3 MB, 在所有 JavaScript 提交中击败了 65.54% 的用户
const compose = functions => x => {
  let res = x;
  for (let i = functions.length - 1; i > -1; i--) {
    res = functions[i](res);
  }
  return res;
};

const functions = [x => x + 1, x => x * x, x => 2 * x],
  x = 4;

console.log(compose(functions)(x));
