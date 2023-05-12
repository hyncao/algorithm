// 169. 多数元素

// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 输入：nums = [3,2,3]
// 输出：3

// 输入：nums = [2,2,1,1,1,2,2]
// 输出：2

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 73.53% 的用户
// 内存消耗：
// 43.5 MB, 在所有 JavaScript 提交中击败了 15.58% 的用户
const majorityElement1 = nums => {
  nums.sort((a, b) => a - b);
  return nums[nums.length >> 1];
};

// 摩尔投票法
// 如果候选人不是 maj 则 maj 会和其他非候选人一起反对 会反对候选人,所以候选人一定会下台( maj == 0 时发生换届选举)
// 如果候选人是 maj , 则 maj 会支持自己，其他候选人会反对，同样因为 maj 票数超过一半，所以 maj 一定会成功当选
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 73.78% 的用户
// 内存消耗：
// 42.3 MB, 在所有 JavaScript 提交中击败了 81.66% 的用户
const majorityElement2 = nums => {
  let count = 0;
  let res = '';
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      // 换候选人
      res = nums[i];
    }
    if (res === nums[i]) {
      // 赞成票
      count++;
    } else {
      // 反对票
      count--;
    }
    // 如果选票已经过半, 后续的选票就不必查看了
    if (count > nums.length / 2) break;
  }
  return res;
};

const nums = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement2(nums));
