// 面试题 16.10. 生存人数

// https://leetcode.cn/problems/living-people-lcci/

// 给定 N 个人的出生年份和死亡年份，第 i 个人的出生年份为 birth[i]，死亡年份为 death[i]，实现一个方法以计算生存人数最多的年份。

// 你可以假设所有人都出生于 1900 年至 2000 年（含 1900 和 2000 ）之间。如果一个人在某一年的任意时期处于生存状态，那么他应该被纳入那一年的统计中。例如，生于 1908 年、死于 1909 年的人应当被列入 1908 年和 1909 年的计数。

// 如果有多个年份生存人数相同且均为最大值，输出其中最小的年份。

// 输入：
// birth = [1900, 1901, 1950]
// death = [1948, 1951, 2000]
// 输出： 1901

// 输入：
// birth = [1972, 1908, 1915, 1957, 1960, 1948, 1912, 1903, 1949, 1977, 1900, 1957, 1934, 1929, 1913, 1902, 1903, 1901];
// death = [1997, 1932, 1963, 1997, 1983, 2000, 1926, 1962, 1955, 1997, 1998, 1989, 1992, 1975, 1940, 1903, 1983, 1969];
// 输出： 1960

// 开莽 O(n) n = birth.length
// 执行用时：
// 104 ms, 在所有 JavaScript 提交中击败了46.24%的用户
// 内存消耗：
// 44 MB, 在所有 JavaScript 提交中击败了 69.89% 的用户
const maxAliveYear1 = (birth, death) => {
  let max = 0;
  let maxYear = 0;
  for (let i = 1900; i <= 2000; i++) {
    let count = 0;
    for (let j = 0; j < birth.length; j++) {
      if (i >= birth[j] && i <= death[j]) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      maxYear = i;
    }
  }

  return maxYear;
};

// 差分数组 + 前缀和
// 分析, 其实可以类比公交车
// 有人出生, 则上车, 有人死亡则下车
// 只要在特定的年份数车上有多少人就是当年活着的人数
// 执行用时：
// 80 ms, 在所有 JavaScript 提交中击败了76.09%的用户
// 内存消耗：
// 44.7 MB, 在所有 JavaScript 提交中击败了 52.17% 的用户
const maxAliveYear2 = (birth, death) => {
  const deltaArr = Array(100).fill(0);
  for (let i = 0; i < birth.length; i++) {
    const x = birth[i] - 1900;
    const y = death[i] - 1899;
    deltaArr[x] += 1;
    deltaArr[y] -= 1;
  }

  let max = 0;
  let sum = 0;
  let maxYear = 0;
  for (let i = 0; i < deltaArr.length; i++) {
    sum += deltaArr[i];
    if (max < sum) {
      max = sum;
      maxYear = i;
    }
  }
  return maxYear + 1900;
};

// 进一步改造, 压缩前缀和空间
// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 100% 的用户
// 内存消耗：
// 45.2 MB, 在所有 JavaScript 提交中击败了 48.91% 的用户
const maxAliveYear3 = (birth, death) => {
  const deltaArr = Array(100).fill(0);
  for (let i = 0; i < birth.length; i++) {
    const x = birth[i] - 1900;
    const y = death[i] - 1899;
    deltaArr[x] += 1;
    deltaArr[y] -= 1;
  }

  let maxYear = 0;
  for (let i = 1; i < 101; i++) {
    // 用原数组算前缀和, 后一项就是自身的前缀和, 所以最后会多出一项
    deltaArr[i] += deltaArr[i - 1];
    if (deltaArr[maxYear] < deltaArr[i]) maxYear = i;
  }
  return maxYear + 1900;
};

const birth = [
  1972, 1908, 1915, 1957, 1960, 1948, 1912, 1903, 1949, 1977, 1900, 1957, 1934, 1929, 1913, 1902, 1903, 1901,
];
const death = [
  1997, 1932, 1963, 1997, 1983, 2000, 1926, 1962, 1955, 1997, 1998, 1989, 1992, 1975, 1940, 1903, 1983, 1969,
];

console.log(maxAliveYear3(birth, death));
