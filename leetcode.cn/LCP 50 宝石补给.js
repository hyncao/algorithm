// LCP 50. 宝石补给

// 欢迎各位勇者来到力扣新手村，在开始试炼之前，请各位勇者先进行「宝石补给」。

// 每位勇者初始都拥有一些能量宝石， gem[i] 表示第 i 位勇者的宝石数量。

// 现在这些勇者们进行了一系列的赠送，operations[j] = [x, y] 表示在第 j 次的赠送中 第 x 位勇者将自己一半的宝石（需向下取整）赠送给第 y 位勇者。

// 在完成所有的赠送后，请找到拥有最多宝石的勇者和拥有最少宝石的勇者，并返回他们二者的宝石数量之差。

// 输入：gem = [3,1,2], operations = [[0,2],[2,1],[2,0]]
// 输出：2

// 输入：gem = [100,0,50,100], operations = [[0,2],[0,1],[3,0],[3,0]]
// 输出：75

// 输入：gem = [0,0,0,0], operations = [[1,2],[3,1],[1,2]]
// 输出：0

// O(m+n) O(1)
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 50% 的用户
// 内存消耗：
// 42.56 MB, 在所有 JavaScript 提交中击败了 71.43% 的用户
const giveGem = (gem, operations) => {
  const gLen = gem.length;
  const oLen = operations.length;
  for (let i = 0; i < oLen; i++) {
    const [x, y] = operations[i];
    const num = gem[x] >> 1;
    gem[x] -= num;
    gem[y] += num;
  }
  let min = Infinity;
  let max = 0;
  for (const i of gem) {
    if (i > max) max = i;
    if (i < min) min = i;
  }
  return max - min;
};

const gem = [0,0,0,0], operations = [[1,2],[3,1],[1,2]]

console.log(giveGem(gem, operations));
