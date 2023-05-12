// 2404. 出现最频繁的偶数元素

// 给你一个整数数组 nums ，返回出现最频繁的偶数元素。

// 如果存在多个满足条件的元素，只需要返回 最小 的一个。如果不存在这样的元素，返回 -1 。

// 输入：nums = [0,1,2,2,4,4,1]
// 输出：2
// 解释：
// 数组中的偶数元素为 0、2 和 4 ，在这些元素中，2 和 4 出现次数最多。
// 返回最小的那个，即返回 2 。

// 输入：nums = [4,4,4,9,2,4]
// 输出：4
// 解释：4 是出现最频繁的偶数元素。

// 输入：nums = [29,47,21,41,13,37,25,7]
// 输出：-1

// O(n) O(n)
// 执行用时：
// 80 ms, 在所有 JavaScript 提交中击败了88.33%的用户
// 内存消耗：
// 48.2 MB, 在所有 JavaScript 提交中击败了 68.33% 的用户
const mostFrequentEven1 = nums => {
  const map = {};
  let max = 0;
  let res = Infinity;
  for (const i of nums) {
    if ((i & 1) === 1) continue;
    const count = map[i];
    if (count) {
      map[i] += 1;
    } else {
      map[i] = 1;
    }
    if (map[i] > max) {
      max = map[i];
      res = i;
    } else if (map[i] === max) {
      res = Math.min(res, i);
    }
  }
  return res === Infinity ? -1 : res;
};

// O(nlog(n)) O(1)
// 执行用时：
// 108 ms, 在所有 JavaScript 提交中击败了 55.00% 的用户
// 内存消耗：
// 45.9 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
const mostFrequentEven2 = nums => {
  nums.sort((a, b) => a - b);
  let max = 0;
  let res = -1;
  let prev = null;
  let currentMax = 0;
  for (const i of nums) {
    if ((i & 1) === 1) continue;
    if (prev === null) {
      res = i;
      max = 1;
      currentMax = 1;
    } else {
      if (prev === i) {
        currentMax++;
      } else {
        currentMax = 1;
      }
      if (currentMax > max) {
        res = i;
        max = currentMax;
      } else if (currentMax === max) {
        res = Math.min(res, i);
      }
    }
    prev = i;
  }
  return res;
};

const nums = [29, 47, 21, 41, 13, 37, 25, 7, 2];

console.log(mostFrequentEven2(nums));
