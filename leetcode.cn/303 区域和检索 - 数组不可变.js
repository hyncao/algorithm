// 303. 区域和检索 - 数组不可变

// 给定一个整数数组  nums，处理以下类型的多个查询:

// 计算索引 left 和 right （包含 left 和 right）之间的 nums 元素的 和 ，其中 left <= right
// 实现 NumArray 类：

// NumArray(int[] nums) 使用数组 nums 初始化对象
// int sumRange(int i, int j) 返回数组 nums 中索引 left 和 right 之间的元素的 总和 ，包含 left 和 right 两点（也就是 nums[left] + nums[left + 1] + ... + nums[right] )
//

// 输入：
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// 输出：
// [null, 1, -1, -3]

// 预存前缀和数组
// 执行用时：
// 428 ms, 在所有 JavaScript 提交中击败了5.18%的用户
// 内存消耗：
// 50.9 MB, 在所有 JavaScript 提交中击败了 5.18% 的用户
class NumArray1 {
  constructor(nums) {
    this.sum = nums.reduce((prev, current, index) => {
      return prev.concat((prev[index - 1] || 0) + current);
    }, []);
  }

  sumRange(left, right) {
    return this.sum[right] - (this.sum[left - 1] || 0);
  }
}

// 执行用时：
// 172 ms, 在所有 JavaScript 提交中击败了 24.21% 的用户
// 内存消耗：
// 47.6 MB, 在所有 JavaScript 提交中击败了 74.12% 的用户
class NumArray2 {
  constructor(nums) {
    this.nums = nums;
  }

  sumRange(left, right) {
    let sum = 0;
    for (let i = left; i <= right; i++) {
      sum += this.nums[i];
    }
    return sum;
  }
}

const a = new NumArray2([-2, 0, 3, -5, 2, -1]);
console.log(a.sumRange(0, 2));
console.log(a.sumRange(2, 5));
console.log(a.sumRange(0, 5));
