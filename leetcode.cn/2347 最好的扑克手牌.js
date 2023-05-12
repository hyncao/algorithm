// 2347. 最好的扑克手牌

// 给你一个整数数组 ranks 和一个字符数组 suit 。你有 5 张扑克牌，第 i 张牌大小为 ranks[i] ，花色为 suits[i] 。

// 下述是从好到坏你可能持有的 手牌类型 ：

// "Flush"：同花，五张相同花色的扑克牌。
// "Three of a Kind"：三条，有 3 张大小相同的扑克牌。
// "Pair"：对子，两张大小一样的扑克牌。
// "High Card"：高牌，五张大小互不相同的扑克牌。
// 请你返回一个字符串，表示给定的 5 张牌中，你能组成的 最好手牌类型 。

// 注意：返回的字符串 大小写 需与题目描述相同。

// 输入：ranks = [13,2,3,1,9], suits = ["a","a","a","a","a"]
// 输出："Flush"

// 输入：ranks = [4,4,2,4,4], suits = ["d","a","a","b","c"]
// 输出："Three of a Kind"

// 输入：ranks = [10,10,2,12,9], suits = ["a","b","c","a","d"]
// 输出："Pair"

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 57.14% 的用户
// 内存消耗：
// 41.1 MB, 在所有 JavaScript 提交中击败了 38.09% 的用户
const bestHand = (ranks, suits) => {
  const suitsMap = {};
  const ranksMap = {};
  for (let i = 0; i < ranks.length; i++) {
    suitsMap[suits[i]] = suitsMap[suits[i]] ? suitsMap[suits[i]] + 1 : 1;
    ranksMap[ranks[i]] = ranksMap[ranks[i]] ? ranksMap[ranks[i]] + 1 : 1;
  }
  const suitsMapKey = Object.keys(suitsMap);
  const ranksMapVal = Object.values(ranksMap);
  if (suitsMapKey.length === 1) return 'Flush';
  if (ranksMapVal.find(i => i >= 3)) return 'Three of a Kind';
  if (ranksMapVal.find(i => i === 2)) return 'Pair';
  return 'High Card';
};

const ranks = [2, 10, 7, 10, 7];
const suits = ['a', 'b', 'a', 'd', 'b'];

console.log(bestHand(ranks, suits));
