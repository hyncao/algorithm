// 976. 三角形的最大周长

// 给定由一些正数（代表长度）组成的数组 nums ，返回 由其中三个长度组成的、面积不为零的三角形的最大周长 。如果不能形成任何面积不为零的三角形，返回 0。

// 输入：nums = [2,1,2]
// 输出：5
// 解释：你可以用三个边长组成一个三角形:1 2 2。

// 输入：nums = [1,2,1,10]
// 输出：0

// 思考：
// 任意两条边的和一定大于第三条边
// 最短的两条边的和大于最长的边
// 如果已经确定了两条边，则在剩余的数中找最大的数，如果这个数都不能满足三角形，那么更小的数也一定满足不了

// 注意：
// 如果 a <= b <= c
// 那么只需要 a + b > c 即可证明 abc 可以组成三角形

// O(n³) O(1)
// 执行用时：
// 4924 ms, 在所有 JavaScript 提交中击败了 5.49% 的用户
// 内存消耗：
// 43.4 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
const largestPerimeter1 = nums => {
  const n = nums.length;
  nums.sort((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] > nums[k] && nums[i] + nums[k] > nums[j] && nums[j] + nums[k] > nums[i])
          return nums[i] + nums[j] + nums[k];
      }
    }
  }
  return 0;
};

// O(n*log(n)) O(1)
// 每次取三条最长边，来校验是否满足三角形，不满足就扔掉最长边
// 执行用时：
// 84 ms, 在所有 JavaScript 提交中击败了 97.56% 的用户
// 内存消耗：
// 44.1 MB, 在所有 JavaScript 提交中击败了 78.66% 的用户
const largestPerimeter2 = nums => {
  const n = nums.length;
  nums.sort((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    if (nums[i + 1] + nums[i + 2] > nums[i]) return nums[i] + nums[i + 1] + nums[i + 2];
  }
  return 0;
};

const nums = [2, 1, 2];

console.log(largestPerimeter2(nums));
