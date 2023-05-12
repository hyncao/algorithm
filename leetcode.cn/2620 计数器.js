// 2620. 计数器

// 请你编写并返回一个 计数器 函数，它接收一个整型参数 n 。这个 计数器 函数最初返回 n，每次调用它时返回前一个值加 1 的值 (n ,  n + 1 ,  n + 2 ，等等)。

// 输入：
// n = 10
// ["call","call","call"]
// 输出：[10,11,12]
// 解释：
// counter() = 10 // 第一次调用 counter()，返回 n。
// counter() = 11 // 返回上次调用的值加 1。
// counter() = 12 // 返回上次调用的值加 1。

// 输入：
// n = -2
// ["call","call","call","call","call"]
// 输出：[-2,-1,0,1,2]
// 解释：counter() 最初返回 -2。然后在每个后续调用后增加 1。

// 执行用时：
// 48 ms, 在所有 JavaScript 提交中击败了 98.48% 的用户
// 内存消耗：
// 41.1 MB, 在所有 JavaScript 提交中击败了 14.77% 的用户
const createCounter = n => () => n++;

const n = -1;

const counter = createCounter(n);
console.log(counter());
console.log(counter());
console.log(counter());
