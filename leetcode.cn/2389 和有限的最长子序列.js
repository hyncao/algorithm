// 2389. 和有限的最长子序列

// 给你一个长度为 n 的整数数组 nums ，和一个长度为 m 的整数数组 queries 。

// 返回一个长度为 m 的数组 answer ，其中 answer[i] 是 nums 中 元素之和小于等于 queries[i] 的 子序列 的 最大 长度  。

// 子序列 是由一个数组删除某些元素（也可以不删除）但不改变剩余元素顺序得到的一个数组。

// 输入：nums = [4,5,2,1], queries = [3,10,21]
// 输出：[2,3,4]
// 解释：queries 对应的 answer 如下：
// - 子序列 [2,1] 的和小于或等于 3 。可以证明满足题目要求的子序列的最大长度是 2 ，所以 answer[0] = 2 。
// - 子序列 [4,5,1] 的和小于或等于 10 。可以证明满足题目要求的子序列的最大长度是 3 ，所以 answer[1] = 3 。
// - 子序列 [4,5,2,1] 的和小于或等于 21 。可以证明满足题目要求的子序列的最大长度是 4 ，所以 answer[2] = 4 。

// 输入：nums = [2,3,4,5], queries = [1]
// 输出：[0]

// O(n*log(n)+n)
// 执行用时：
// 152 ms, 在所有 JavaScript 提交中击败了 6.67% 的用户
// 内存消耗：
// 47.5 MB, 在所有 JavaScript 提交中击败了 13.33% 的用户
const answerQueries1 = (nums, queries) => {
  nums.sort((a, b) => a - b);
  const sum = nums.reduce((p, c) => p.concat((p[p.length - 1] || 0) + c), []);
  return queries.map(target => {
    let max = 0;
    let right = sum.length - 1;
    while (right > -1) {
      if (sum[right] <= target) {
        max = Math.max(max, right + 1);
      }
      right--;
    }
    return max;
  });
};

const answerQueries2 = (nums, queries) => {
  nums.sort((a, b) => a - b);
  const sum = nums.reduce((p, c) => p.concat((p[p.length - 1] || 0) + c), []);
  return queries.map(target => {
    let max = 0;
    let left = 0;
    let right = sum.length - 1;
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      if (sum[middle] <= target) {
        max = Math.max(max, middle);
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
    return Math.max(max, left);
  });
};

// 期待：[16, 18, 10]
const nums = [4, 5, 2, 1, 28, 10, 47, 29, 11, 2, 3, 2, 3, 5, 7, 6, 54, 3, 2, 23, 56],
  queries = [100, 150, 29];

console.log(answerQueries2(nums, queries));
