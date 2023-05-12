// 771. 宝石与石头

// 给你一个字符串 jewels 代表石头中宝石的类型，另有一个字符串 stones 代表你拥有的石头。 stones 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

// 字母区分大小写，因此 "a" 和 "A" 是不同类型的石头。

// 输入：jewels = "aA", stones = "aAAbbbb"
// 输出：3

// 输入：jewels = "z", stones = "ZZ"
// 输出：0

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 93.16% 的用户
// 内存消耗：
// 41.4 MB, 在所有 JavaScript 提交中击败了 46.15% 的用户
const numJewelsInStones = (jewels, stones)=> {
  const s = new Set(Array.from(jewels));
  let res = 0;
  for (const i of stones) {
    if (s.has(i)) res++
  }
  return res;
};

const jewels = "aA", stones = "aAAbbbb";

console.log(numJewelsInStones(jewels, stones));
