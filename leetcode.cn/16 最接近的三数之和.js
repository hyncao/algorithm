// 16. 最接近的三数之和

// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

// 返回这三个数的和。

// 假定每组输入只存在恰好一个解。

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

// 输入：nums = [0,0,0], target = 1
// 输出：0

// 思考：
// dp[0] = nums[0] + nums[1] + nums[2]
// min = Math.min(nums[0], nums[1], nums[2])
// max = Math.max(nums[0], nums[1], nums[2])
// Math.abs(dp[0]) > target
// 我们期望 nums[3] < max 这样我们就把 max 剔除掉，加上 nums[3]
// Math.abs(dp[0]) < target
// 我们期望 nums[3] > min 这样我们就把 min 剔除掉，加上 nums[3]
// 此方法不行，缺少大局观，有可能把最优解过早的扔掉

// O(n * log(n) + n²) O(n * log(n))
// 执行用时：
// 80 ms, 在所有 JavaScript 提交中击败了 64.69% 的用户
// 内存消耗：
// 42.5 MB, 在所有 JavaScript 提交中击败了 65.59% 的用户
const threeSumClosest = (nums, target) => {
  let res = Number.MAX_SAFE_INTEGER;
  const n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      const current = nums[i] + nums[j] + nums[k];
      if (Math.abs(target - current) < Math.abs(target - res)) {
        res = current;
      }
      if (current > target) k--;
      if (current < target) j++;
      if (current === target) return target;
    }
  }
  return res;
};
const nums = [0,1,2],
  target = 3;

console.log(threeSumClosest(nums, target));
