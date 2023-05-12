// 455. 分发饼干

// 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。

// 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j]。
// 如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。
// 你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

// 注：孩子的胃口必须用 一块饼干 满足，不能靠多个饼干拼凑，那就不香了，必须一口吃饱
// 输入：g = [2], s = [1,1]
// 输出：0

// 输入: g = [1,2,3], s = [1,1]
// 输出: 1

// 输入: g = [1,2], s = [1,2,3]
// 输出: 2

// O(mlog(m)+nlog(n)) 就排序慢了
// 执行用时：
// 84 ms, 在所有 JavaScript 提交中击败了 86.93% 的用户
// 内存消耗：
// 43.3 MB, 在所有 JavaScript 提交中击败了 92.98% 的用户
const findContentChildren = (g, s) => {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let res = 0;
  let children = g.length - 1;
  let cookie = s.length - 1;
  while (children >= 0 && cookie >= 0) {
    // 最大的饼干都满足不了这个娃的话，试试看下一个娃胃口有没有小一点
    if (s[cookie] >= g[children]) {
      res++;
      cookie--;
    }
    children--;
  }
  return res;
};

const g = [1, 1, 1, 1];
const s = [1, 1];

console.log(findContentChildren(g, s));
