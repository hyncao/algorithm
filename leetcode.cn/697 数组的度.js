// 697. 数组的度

// 给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。

// 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

// 输入：nums = [1,2,2,3,1]
// 输出：2
// 解释：
// 输入数组的度是 2 ，因为元素 1 和 2 的出现频数最大，均为 2 。
// 连续子数组里面拥有相同度的有如下所示：
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// 最短连续子数组 [2, 2] 的长度为 2 ，所以返回 2 。

// 输入：nums = [1,2,2,3,1,4,2]
// 输出：6
// 解释：
// 数组的度是 3 ，因为元素 2 重复出现 3 次。
// 所以 [2,2,3,1,4,2] 是最短子数组，因此返回 6 。

// 执行用时：
// 76 ms, 在所有 JavaScript 提交中击败了 76.36% 的用户
// 内存消耗：
// 44.2 MB, 在所有 JavaScript 提交中击败了 93.18% 的用户
const findShortestSubArray = nums => {
  let max = 0;
  let min = Infinity;
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current in map) {
      map[current].val++;
      map[current].right = i;
      if (map[current].val === max) {
        max = Math.max(max, map[current].val);
        min = Math.min(min, map[current].right - map[current].left + 1);
      } else if (map[current].val > max) {
        max = map[current].val;
        min = map[current].right - map[current].left + 1;
      }
    } else {
      map[current] = { val: 1, left: i };
      min = min === Infinity ? 1 : min;
    }
  }
  return min;
};

const nums = [1, 2];

console.log(findShortestSubArray(nums));
