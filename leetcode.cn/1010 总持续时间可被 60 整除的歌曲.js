// 1010. 总持续时间可被 60 整除的歌曲

// 在歌曲列表中，第 i 首歌曲的持续时间为 time[i] 秒。

// 返回其总持续时间（以秒为单位）可被 60 整除的歌曲对的数量。形式上，我们希望下标数字 i 和 j 满足  i < j 且有 (time[i] + time[j]) % 60 == 0。

// 输入：time = [30,20,150,100,40]
// 输出：3
// 解释：这三对的总持续时间可被 60 整除：
// (time[0] = 30, time[2] = 150): 总持续时间 180
// (time[1] = 20, time[3] = 100): 总持续时间 120
// (time[1] = 20, time[4] = 40): 总持续时间 60

// 输入：time = [60,60,60]
// 输出：3

// 1 <= time.length <= 6 * 104
// 1 <= time[i] <= 500

// 执行用时：
// 6668 ms, 在所有 JavaScript 提交中击败了 26.79% 的用户
// 内存消耗：
// 43.5 MB, 在所有 JavaScript 提交中击败了 87.50% 的用户
const numPairsDivisibleBy601 = time => {
  let count = 0;
  for (let i = 0; i < time.length; i++) {
    for (let j = i + 1; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 === 0) count++;
    }
  }
  return count;
};

// 思考：
// 先求出所有的余数，扔到一个数组里 reminder，reminder.length = 60
// reminder[i] 的意义是 余数为 i 的歌曲数，接下来按照余数分批讨论
// 0 需要找到其他余数为 0 的歌曲成对，但是不包括自身
// 30 需要找到其他余数为 30 的歌曲成对，但是不包括自身
// [1-29] 需要找到其他 60 - i 的歌曲
// [31-59] 已经被上面拉去成对了，不必重复计算
// 0 和 30 的计算其实是一个公差为 1 的等差数列的求和，比如 0 的个数有 5 个，那么成对个数为 10, 1+2+3+4
// ((x - 1) * (1 + x - 1)) / 2 === x * (x - 1) / 2
// 等差数列求和公式：S = n * (a1 + an) / 2 = n * a1 + (n * (n-1) * d) / 2

// O(n)
// 执行用时：
// 48 ms, 在所有 JavaScript 提交中击败了 100.00% 的用户
// 内存消耗：
// 45.2 MB, 在所有 JavaScript 提交中击败了 25.00% 的用户
const numPairsDivisibleBy602 = time => {
  let count = 0;
  const reminder = Array(60).fill(0);
  for (const i of time) {
    reminder[i % 60]++;
  }
  const count0 = (reminder[0] * (reminder[0] - 1)) / 2;
  const count30 = (reminder[30] * (reminder[30] - 1)) / 2;
  for (let i = 1; i < 30; i++) {
    count += reminder[i] * reminder[60 - i];
  }
  return count + count0 + count30;
};

const time = [30, 20, 150, 100, 40];

console.log(numPairsDivisibleBy602(time));
