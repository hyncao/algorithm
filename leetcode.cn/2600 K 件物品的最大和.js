// 2600. K 件物品的最大和

// 袋子中装有一些物品，每个物品上都标记着数字 1 、0 或 -1 。

// 给你四个非负整数 numOnes 、numZeros 、numNegOnes 和 k 。

// 袋子最初包含：

// numOnes 件标记为 1 的物品。
// numZeroes 件标记为 0 的物品。
// numNegOnes 件标记为 -1 的物品。
// 现计划从这些物品中恰好选出 k 件物品。返回所有可行方案中，物品上所标记数字之和的最大值。

// 输入：numOnes = 3, numZeros = 2, numNegOnes = 0, k = 2
// 输出：2
// 解释：袋子中的物品分别标记为 {1, 1, 1, 0, 0} 。取 2 件标记为 1 的物品，得到的数字之和为 2 。
// 可以证明 2 是所有可行方案中的最大值。

// 输入：numOnes = 3, numZeros = 2, numNegOnes = 0, k = 4
// 输出：3

// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 89.31% 的用户
// 内存消耗：
// 43.8 MB, 在所有 JavaScript 提交中击败了 8.39% 的用户
const kItemsWithMaximumSum1 = (numOnes, numZeros, numNegOnes, k) => {
  let res = 0;
  for (let i = 0; i < k; i++) {
    if (numOnes > 0) {
      res++;
      numOnes--;
    } else if (numZeros > 0) {
      numZeros--;
    } else {
      res--;
      numNegOnes--;
    }
  }
  return res;
};

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 93.13% 的用户
// 内存消耗：
// 43.1 MB, 在所有 JavaScript 提交中击败了 49.62% 的用户
const kItemsWithMaximumSum2 = (numOnes, numZeros, numNegOnes, k) => {
  let res = 0;
  res += Math.min(k, numOnes);
  k -= numOnes;
  if (k > 0) {
    k -= numZeros;
  }
  if (k > 0) {
    res -= k;
  }
  return res;
};

const numOnes = 3,
  numZeros = 2,
  numNegOnes = 0,
  k = 2;

console.log(kItemsWithMaximumSum2(numOnes, numZeros, numNegOnes, k));
