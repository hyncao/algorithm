// 561. 数组拆分

// 给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。

// 返回该 最大总和 。

// 输入：nums = [1,4,3,2]
// 输出：4
// 解释：所有可能的分法（忽略元素顺序）为：
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// 所以最大总和为 4

// 输入：nums = [6,2,6,5,1,2]
// 输出：9

// 输入：nums = [1,10,2,7,5,7,3,2]
// 输出：15

// 排序，然后直接在原数组上做修改
// 时间复杂度：O(n*log(n))
// 空间复杂度: O(1)
// 执行用时：
// 120 ms, 在所有 JavaScript 提交中击败了 37.40% 的用户
// 内存消耗：
// 46 MB, 在所有 JavaScript 提交中击败了 94.96% 的用户
const arrayPairSum1 = nums => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    nums[i + 1] = (nums[i - 1] || 0) + nums[i];
  }
  return nums[nums.length - 1];
};

// 实质上是求出排序后的基数位置项之和
const arrayPairSum2 = nums => {
  const map = {};
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    const min = Math.min(...Object.keys(map));
    if (i % 2 === 0) {
      // 偶数项
      res += min;
    }
    map[min]--;
    if (map[min] === 0) {
      delete map[min];
    }
  }
  return res;
};

const nums = [1, 10, 2, 7, 5, 7, 3, 2];

console.log(arrayPairSum2(nums));
