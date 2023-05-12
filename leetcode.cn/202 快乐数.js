// 202. 快乐数

// 编写一个算法来判断一个数 n 是不是快乐数。

// 「快乐数」 定义为：

// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
// 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
// 如果这个过程 结果为 1，那么这个数就是快乐数。
// 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。

// 输入：n = 19
// 输出：true
// 解释：
// 1² + 9² = 82
// 8² + 2² = 68
// 6² + 8² = 100
// 1² + 0² + 0² = 1

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 74.54% 的用户
// 内存消耗：
// 41.4 MB, 在所有 JavaScript 提交中击败了 87.42% 的用户
const isHappy = n => {
  const str = `${n}`;
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    res += Math.pow(str[i], 2);
  }
  if (res < 10) {
    return res === 1 || res === 7;
  }
  return isHappy(res);
};

const n = 2;

console.log(isHappy(n));
