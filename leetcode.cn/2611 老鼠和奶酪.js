// 2611. 老鼠和奶酪

// 有两只老鼠和 n 块不同类型的奶酪，每块奶酪都只能被其中一只老鼠吃掉。

// 下标为 i 处的奶酪被吃掉的得分为：

// 如果第一只老鼠吃掉，则得分为 reward1[i] 。
// 如果第二只老鼠吃掉，则得分为 reward2[i] 。
// 给你一个正整数数组 reward1 ，一个正整数数组 reward2 ，和一个非负整数 k 。

// 请你返回第一只老鼠恰好吃掉 k 块奶酪的情况下，最大 得分为多少。

// 输入：reward1 = [1,1,3,4], reward2 = [4,4,1,1], k = 2
// 输出：15
// 解释：这个例子中，第一只老鼠吃掉第 2 和 3 块奶酪（下标从 0 开始），第二只老鼠吃掉第 0 和 1 块奶酪。
// 总得分为 4 + 4 + 3 + 4 = 15 。
// 15 是最高得分。

// 输入：reward1 = [1,1], reward2 = [1,1], k = 2
// 输出：2

// 思考：
// 并不是要找到两个数组中的较大值，而是要找到两个数组相同位置的差值较大值
// 弄一个差值数组 diff
// diff[i] 为正数，则表示 reward1[i] > reward2[i]
// 那么我们要找到前 k 大的 i 作为第一只老鼠的选择，剩下的累加

// O(nlog(n)) O(n)
// 执行用时：
// 172 ms, 在所有 JavaScript 提交中击败了 60.14% 的用户
// 内存消耗：
// 55.7 MB, 在所有 JavaScript 提交中击败了 78.32% 的用户
const miceAndCheese1 = (reward1, reward2, k) => {
  const len = reward1.length;
  const diff = [];
  let res = 0;
  for (let i = 0; i < len; i++) {
    diff.push(reward1[i] - reward2[i]);
  }
  const indexList = Array.from({ length: len }, (_, i) => i);
  indexList.sort((a, b) => diff[b] - diff[a]);
  for (let i = 0; i < len; i++) {
    if (i < k) res += reward1[indexList[i]];
    else res += reward2[indexList[i]];
  }
  return res;
};

// 思考：
// 接着方法 1 优化
// 方法 1 为了找到前 k 大的差值，引入了一个下标数组 indexList，我们尝试把这个拿掉
// 先把 reward2 全部累加一遍
// 然后再取前 k 大的 diff 再累加就行了
// reward2[i] + (reward1[i] - reward2[2]) 相当于就是 reward1[i]

// O(nlog(n)) O(n)
// 执行用时：
// 136 ms, 在所有 JavaScript 提交中击败了 95.10% 的用户
// 内存消耗：
// 56.3 MB, 在所有 JavaScript 提交中击败了 68.53% 的用户
const miceAndCheese2 = (reward1, reward2, k) => {
  const len = reward1.length;
  const diff = [];
  let res = 0;
  for (let i = 0; i < len; i++) {
    res += reward2[i];
    diff.push(reward1[i] - reward2[i]);
  }
  diff.sort((a, b) => b - a);
  for (let i = 0; i < k; i++) {
    res += diff[i];
  }
  return res;
};

const reward1 = [3, 8, 1, 1, 6, 4, 9, 8, 10, 9],
  reward2 = [7, 7, 1, 2, 7, 4, 3, 6, 8, 1],
  k = 3;

console.log(miceAndCheese2(reward1, reward2, k));
