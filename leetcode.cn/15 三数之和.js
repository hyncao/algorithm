// 15. 三数之和

// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，

// 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 输入：nums = [-1, 0, 1, 2, -1, -4]
// 输出：[([-1, -1, 2], [-1, 0, 1])];

const threeSum = nums => {
  const res = [];
  const sorted = nums.sort((a, b) => a - b);
  for (let current = 0; current < sorted.length - 2; current++) {
    // 如果第一个数都大于0，那就不用接着找了
    if (sorted[current] > 0) break;
    let i = current + 1;
    if (res.length > 0 && res[res.length - 1][0] === sorted[current] && res[res.length - 1][1] >= sorted[i]) {
      continue;
    }
    let j = i + 1;
    while (i < sorted.length - 1) {
      if (res.length > 0 && res[res.length - 1][0] === sorted[current] && res[res.length - 1][1] >= sorted[i]) {
        i++;
        j = i + 1;
        continue;
      }
      if (sorted[current] + sorted[i] + sorted[j] === 0) {
        res.push([sorted[current], sorted[i], sorted[j]]);
        i++;
        j = i + 1;
        continue;
      }
      if (j === sorted.length - 1) {
        i++;
        j = i + 1;
      } else {
        j++;
      }
    }
  }
  return res;
};

const nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];

console.log(threeSum(nums));
