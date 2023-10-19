// 1046. 最后一块石头的重量

// 有一堆石头，每块石头的重量都是正整数。

// 每一回合，从中选出两块 最重的 石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：

// 如果 x == y，那么两块石头都会被完全粉碎；
// 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
// 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。

// 示例：

// 输入：[2,7,4,1,8,1]
// 输出：1

// 开莽
// 执行用时：
// O(n²) O(1)
// 64 ms, 在所有 JavaScript 提交中击败了 62.50% 的用户
// 内存消耗：
// 40.55 MB, 在所有 JavaScript 提交中击败了 79.61% 的用户
const lastStoneWeight = stones => {
  let len = stones.length;
  while (len > 1) {
    let max = -1;
    let max2 = -1;
    for (let i = 0; i < len; i++) {
      const current = stones[i];
      if (current > max) {
        max2 = max;
        max = current;
      } else if (current > max2) {
        max2 = current;
      }
    }
    const crush = max - max2;
    stones = stones.filter(i => {
      if (i !== max && i !== max2) return true;
      if (i === max) {
        max = -1;
        return false;
      }
      if (i === max2) {
        max2 = -1;
        return false;
      }
    });
    stones.push(crush);
    len--;
  }
  return stones[0] || 0;
};

const stones = [2, 7, 4, 1, 8, 1];

console.log(lastStoneWeight(stones));
