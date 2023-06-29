// 989. 数组形式的整数加法

// 整数的 数组形式  num 是按照从左到右的顺序表示其数字的数组。

// 例如，对于 num = 1321 ，数组形式是 [1,3,2,1] 。
// 给定 num ，整数的 数组形式 ，和整数 k ，返回 整数 num + k 的 数组形式 。

// 输入：num = [1,2,0,0], k = 34
// 输出：[1,2,3,4]
// 解释：1200 + 34 = 1234

// 输入：num = [2,7,4], k = 181
// 输出：[4,5,5]
// 解释：274 + 181 = 455

// 输入：num = [2,1,5], k = 806
// 输出：[1,0,2,1]

// (num.join('') - 0 + k + '').split('') 这种方法不行
// num 很长的时候会丢精度

// O(n) O(1)
// 执行用时：
// 108 ms, 在所有 JavaScript 提交中击败了 49.51% 的用户
// 内存消耗：
// 46.4 MB, 在所有 JavaScript 提交中击败了 88.35% 的用户
const addToArrayForm = (num, k) => {
  k += '';
  const n = num.length;
  const kn = k.length;
  const max = Math.max(n, kn);
  let prev = 0;
  for (let i = 0; i < max; i++) {
    const target = (k[kn - i - 1] || 0) - 0 + prev;
    const targetNum = num[num.length - i - 1];
    if (targetNum === undefined) {
      num.unshift(target);
    } else {
      num[num.length - i - 1] += target;
    }
    if (num[num.length - i - 1] >= 10) {
      prev = 1;
      num[num.length - i - 1] -= 10;
    } else prev = 0;
  }
  if (prev === 1) num.unshift(1);
  return num;
};

const num = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  k = 1;

console.log(addToArrayForm(num, k));
