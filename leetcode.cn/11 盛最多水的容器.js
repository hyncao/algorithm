// 11. 盛最多水的容器

// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49

// 开莽
// 果不其然，超时了
const maxArea1 = height => {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
    }
  }
  return max;
};

// 思考：双指针
// 若向内 移动短板，水槽的短板可能变大，因此下个水槽的面积 可能增大。
// 若向内 移动长板，水槽的短板不变或变小，因此下个水槽的面积 一定变小。
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 98.12% 的用户
// 内存消耗：
// 47.9 MB, 在所有 JavaScript 提交中击败了 96.83% 的用户
const maxArea2 = height => {
  let i = 0,
    j = height.length - 1,
    max = 0;
  while (i < j) {
    max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea2(height));
