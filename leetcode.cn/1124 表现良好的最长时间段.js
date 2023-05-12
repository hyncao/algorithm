// 1124. 表现良好的最长时间段

// 给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。

// 我们认为当员工一天中的工作小时数大于 8 小时的时候，那么这一天就是「劳累的一天」。

// 所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。

// 请你返回「表现良好时间段」的最大长度。

// 输入：hours = [9,9,6,0,6,6,9]
// 输出：3
// 解释：最长的表现良好时间段是 [9,9,6]。

// ===== 注: 要求在原数组中, 找到满足条件(子数组中大于8的项居多)的最长的子数组, 因为是子数组, 所以顺序项的次序不能打乱

// 开莽 O(n²)
// 数据量过大会超时, 所以没有提交成功, 但是代码是对的
const longestWPI1 = hours => {
  let startIndex = 0;
  let endIndex = hours.length;
  let maxLen = 0;

  while (startIndex < hours.length && maxLen < hours.length - startIndex) {
    while (endIndex > startIndex) {
      const arr = hours.slice(startIndex, endIndex);
      if (arr.filter(i => i > 8).length > arr.length / 2) {
        if (maxLen < arr.length) {
          maxLen = arr.length;
          break;
        }
      }
      endIndex--;
    }
    startIndex++;
    endIndex = hours.length;
  }

  return maxLen;
};

// 前缀和 + 单调栈 O(n)
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 94.44% 的用户
// 内存消耗：
// 45 MB, 在所有 JavaScript 提交中击败了 35.85% 的用户

// 可以将数组修改看做大于8, 和其他, 所以修改数组为一个新数组
// 得到一个仅为 -1 和 1 构成的新数组
// 那么当子数组中, 1 的数量多于 -1, 即为「表现良好时间段」
// 换句话说, 当一个子数组中所有项的和大于 0, 即为「表现良好时间段」

// 这里用到了前缀和, 每一项均是 fixedHours 数组前面几项的和
// 前缀和的第一项为 0, 因为原数组第一项之前没有东西
// fixedHours = [-1, -1, 1, 1]
// prefixSum = [0, -1, -2, -1, 0]

// 比如我们想知道 fixedHours[1] + fixedHours[2] + ... + fixedHours[99]
// 就相当于是 prefixSum[100] - prefixSum[1]
// 这时候问题转化为寻找 prefixSum 数组中的两个下标 i 和 j, j > i,
// 使得 j - i 最大, 并且满足 prefixSum[j] - prefixSum[i] 大于 0
// 答案就是 j - i

// 寻找 i 和 j 的时候, 为了提高效率, j 则应该是从右到左遍历
// 为啥呢, 我们先选好一个 i
// 这时候有 i < x < j
// 如果 i 和 j 已经是「表现良好时间段」, 那么 x - i 一定是小于 j - i 的
// i 和 j 之间的情况直接可以舍弃, 所以反向遍历 j 是最快的

// 再来看看如何寻找 i
// 如果我们是从左到右遍历, 设当前遍历的为 i2, i1 为 i2 之前的一个下标
// 那么 i2 > i1
// 如果 prefixSum[i2] > prefixSum[i1]
// 当寻找到一个 j 满足: prefixSum[j] > prefixSum[i2]
// 那么 i2 一定不是我们想找的最优解, i1 一定比 i2 好
// 因为 prefixSum[i2] > prefixSum[i1] && prefixSum[j] > prefixSum[i2]
// 所以 prefixSum[j] > prefixSum[i1]
// 又因为 i2 > i1, 所以 j - i1 > j - i2
// 所以说啊, 我们需要寻找的 i 必须使得 prefixSum[i] 越来越小
// 寻找 i 的时候可以从 prefixSum 数组中寻找一个单调递减的数组, 项由下标组成, 这些就是 i 的候选人

// prefixSum = [0, -1, -2, -1, 0]
// 单调递减的只有前三项
// stk = [0, 1, 2];
// 既然 i 要从 stk 里面寻找, 那么当 prefixSum[j] - prefixSum[stk[2]] 大于 0 时, 我们就不用看 stk 剩余的项了
// 所以 stk 遍历的时候也应该是逆序的

// 先遍历 j
// 如果 prefixSum[j] - prefixSum[stk[i]] 大于 0 时
// 对于遍历 i 来说, 当前的 i 已经是最优解了, 即可剔除
// stk.pop()

const longestWPI2 = hours => {
  // 获得新数组
  const fixedHours = hours.map(i => (i > 8 ? 1 : -1));

  // 获得前缀和
  let sum = 0;
  const prefixSum = [];
  fixedHours.forEach(i => {
    prefixSum.push(sum);
    sum += i;
  });
  prefixSum.push(sum);

  // 获得单调递减数组
  const stk = [];
  prefixSum.forEach((i, index) => {
    if (stk.length === 0 || i < prefixSum[stk[stk.length - 1]]) {
      stk.push(index);
    }
  });

  let result = 0;
  for (let j = prefixSum.length - 1; j >= 0; j--) {
    while (stk.length > 0 && prefixSum[j] > prefixSum[stk[stk.length - 1]]) {
      result = Math.max(result, j - stk.pop());
    }
  }
  return result;
};

const hours = [2, 2, 9, 9, 8, 9];

console.log(longestWPI2(hours));
