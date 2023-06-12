// 914. 卡牌分组

// 给定一副牌，每张牌上都写着一个整数。

// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。

// 输入：deck = [1,2,3,4,4,3,2,1]
// 输出：true
// 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]

// 输入：deck = [1,1,1,2,2,2,3,3]
// 输出：false

// 1 <= deck.length <= 10**4
// 0 <= deck[i] < 10**4

// 思考：
// 当某一个数字只出现一次，false
// 不同数字出现的次数，都能找到相同的约数，true

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 93.02% 的用户
// 内存消耗：
// 43.5 MB, 在所有 JavaScript 提交中击败了 38.37% 的用户
const hasGroupsSizeX1 = deck => {
  const map = new Map();
  for (const i of deck) {
    map.set(i, (map.get(i) || 0) + 1);
  }
  const count = [...new Set(map.values())];
  const len = count.length;
  const min = Math.min.apply(null, count);
  if (min === 1) return false;
  for (let num = 2; num <= min; num++) {
    let flag = true;
    for (const i of count) {
      if (i % num !== 0) {
        flag = false;
        break;
      }
    }

    if (flag) return true;
  }
  return false;
};

// 思考，因为我们只需要拿到数字出现的次数，所以考虑不用 Map，也不用 Set，减少空间复杂度

// 因为我们已经悲观的认定 deck 中的最大数是 10**4，所以导致了糟糕的时间和空间复杂度
// 执行用时：
// 76 ms, 在所有 JavaScript 提交中击败了 27.91% 的用户
// 内存消耗：
// 48.4 MB, 在所有 JavaScript 提交中击败了 5.81% 的用户
const hasGroupsSizeX2 = deck => {
  let count = Array(10 ** 4).fill(0);
  for (const i of deck) {
    count[i]++;
  }
  count = count.filter(i => i);
  const len = count.length;
  const min = Math.min.apply(null, count);
  if (min === 1) return false;
  for (let num = 2; num <= min; num++) {
    let flag = true;
    for (const i of count) {
      if (i % num !== 0) {
        flag = false;
        break;
      }
    }

    if (flag) return true;
  }
  return false;
};

// 确实优化了方法2，但是效果仍然不好，deck 中的数字跨度越大，越浪费
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 46.51% 的用户
// 内存消耗：
// 44.1 MB, 在所有 JavaScript 提交中击败了 13.95% 的用户
const hasGroupsSizeX3 = deck => {
  const max = Math.max.apply(null, deck);
  let count = Array(max + 1).fill(0);
  for (const i of deck) {
    count[i]++;
  }
  count = count.filter(i => i);
  const len = count.length;
  const min = Math.min.apply(null, count);
  if (min === 1) return false;
  for (let num = 2; num <= min; num++) {
    let flag = true;
    for (const i of count) {
      if (i % num !== 0) {
        flag = false;
        break;
      }
    }

    if (flag) return true;
  }
  return false;
};

// 思考：如果能找到 deck 所有数字的最大公约数，判断公约数是否大于 1 即可

// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 100.00% 的用户
// 内存消耗：
// 43.6 MB, 在所有 JavaScript 提交中击败了 31.39% 的用户
const hasGroupsSizeX4 = deck => {
  const gcd = (a, b) => (a === 0 ? b : gcd(b % a, a));
  const map = new Map();
  for (const i of deck) {
    map.set(i, (map.get(i) || 0) + 1);
  }
  const count = [...new Set(map.values())];
  let allGcd = count[0];
  for (const i of count) {
    allGcd = gcd(allGcd, i);
  }
  return allGcd > 1;
};

const deck = [1, 1, 1, 2, 2, 2, 2, 2, 2];

console.log(hasGroupsSizeX4(deck));
