// 740. 删除并获得点数

// 给你一个整数数组 nums ，你可以对它进行一些操作。

// 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。

// 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。

// 输入：nums = [3,4,2]
// 输出：6
// 解释：
// 删除 4 获得 4 个点数，因此 3 也被删除。
// 之后，删除 2 获得 2 个点数。总共获得 6 个点数。

// 输入：nums = [2,2,3,3,3,4]
// 输出：9
// 解释：
// 删除 3 获得 3 个点数，接着要删除两个 2 和 4 。
// 之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
// 总共获得 9 个点数。

// 1 <= nums.length <= 2 * 10**4
// 1 <= nums[i] <= 10**4

// 思考：
// 如果拿到这样一组数据 nums = [1, 2, 3, 4, 5]
// 惊呼：这好像 [198 打家劫舍]啊！
// 每次选数字的时候，会删除相邻的数组，跟打家劫舍思路一模一样！
// 不同点：相同的数字是可以被选中多次的
// nums = [2,2,3,3,3,4] 就是连着选 3 次 3，拿到最优解 9

// const countArr = []
// 先将 nums 转化一下，用 nums[i] 作为 countArr 的 index, nums[i] 的出现次数作为 countArr[i] 的值
// nums = [2,2,3,3,3,4]
// countArr = [0, 0, 2, 3, 1]
// 数字 0 出现了 0 次；数字 1 出现了 0 次；数字 2 出现了 2 次；数字 3 出现了 3 次；数字 4 出现了 1 次
// 状态转移方程：
// dp[i] = Math.max(dp[i-1], dp[i-2] + countArr[i] * i)

// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 73.20% 的用户
// 内存消耗：
// 43.4 MB, 在所有 JavaScript 提交中击败了 72.55% 的用户
const deleteAndEarn = nums => {
  if (nums.length === 1) return nums[0];
  const countArr = Array(Math.max(...nums) + 1).fill(0);
  for (const i of nums) {
    countArr[i]++;
  }
  let dp0 = 0;
  let dp1 = countArr[1] * 1;
  for (let i = 2; i < countArr.length; i++) {
    const temp = dp1;
    dp1 = Math.max(dp1, dp0 + countArr[i] * i);
    dp0 = temp;
  }
  return dp1;
};

const nums = [2, 2, 3, 3, 3, 4];

console.log(deleteAndEarn(nums));
