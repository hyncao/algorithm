// 2437. 有效时间的数目

// 给你一个长度为 5 的字符串 time ，表示一个电子时钟当前的时间，格式为 "hh:mm" 。最早 可能的时间是 "00:00" ，最晚 可能的时间是 "23:59" 。

// 在字符串 time 中，被字符 ? 替换掉的数位是 未知的 ，被替换的数字可能是 0 到 9 中的任何一个。

// 请你返回一个整数 answer ，将每一个 ? 都用 0 到 9 中一个数字替换后，可以得到的有效时间的数目。

// 输入：time = "?5:00"
// 输出：2
// 解释：我们可以将 ? 替换成 0 或 1 ，得到 "05:00" 或者 "15:00" 。注意我们不能替换成 2 ，因为时间 "25:00" 是无效时间。所以我们有两个选择。

// 输入：time = "0?:0?"
// 输出：100
// 解释：两个 ? 都可以被 0 到 9 之间的任意数字替换，所以我们总共有 100 种选择。

// 输入：time = "??:??"
// 输出：1440

// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 93.18% 的用户
// 内存消耗：
// 40.8 MB, 在所有 JavaScript 提交中击败了 72.73% 的用户
const countTime = time => {
  let res = 1;
  if (time[4] === '?') res *= 10;
  if (time[3] === '?') res *= 6;
  if (time[1] === '?') {
    if (time[0] === '?') res *= 24;
    if (time[0] === '2') res *= 4;
    if (time[0] < 2) res *= 10;
  } else if (time[0] === '?') res *= time[1] > 3 ? 2 : 3;
  return res;
};

const time = '??:21';

console.log(countTime(time));
