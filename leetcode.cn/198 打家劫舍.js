// 198. 打家劫舍
// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，

// 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

// 输入：[1,2,3,1]
// 输出：4
// 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。

// 输入：[2,7,9,3,1]
// 输出：12
// 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//      偷窃到的最高金额 = 2 + 9 + 1 = 12 。

// 审题：
// 不能简单的理解为奇数项和偶数项和对比，比如这个输入：[1, 100, 1, 1, 100, 1, 100]
// 正确答案应该是 300

// 思考：
// dp[n] 为第 n 项的最高金额
// 有两种方法：
// 最后一个屋子不偷，那就偷前面 0 ~ n-1 个屋子
// 最后一个屋子偷，那就一定不会偷第 n-1 个屋子，而是偷前面 0 ~ n-2 个屋子
// 状态转移方程：
// dp[n] = Math.max(dp[n-1], dp[n-2] + nums[n])

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 84.47% 的用户
// 内存消耗：
// 40.7 MB, 在所有 JavaScript 提交中击败了 97.09% 的用户
const rob = nums => {
  let dp0 = nums[0];
  if (nums.length === 1) return dp0;
  let dp1 = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const temp = dp1;
    dp1 = Math.max(dp1, dp0 + nums[i]);
    dp0 = temp;
  }
  return dp1;
};

const nums = [1, 2, 3, 4, 5];

console.log(rob(nums));
