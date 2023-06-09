// 492. 构造矩形

// 作为一位web开发者， 懂得怎样去规划一个页面的尺寸是很重要的。

// 所以，现给定一个具体的矩形页面面积，你的任务是设计一个长度为 L 和宽度为 W 且满足以下要求的矩形的页面。要求：

// 你设计的矩形页面必须等于给定的目标面积。

// 宽度 W 不应大于长度 L ，换言之，要求 L >= W 。

// 长度 L 和宽度 W 之间的差距应当尽可能小。

// 返回一个 数组 [L, W]，其中 L 和 W 是你按照顺序设计的网页的长度和宽度。

// 不废话版本：找到两个 整数 相乘，结果为 area，并且使这两个数尽可能接近

// 输入: 4
// 输出: [2, 2]
// 解释: 目标面积是 4， 所有可能的构造方案有 [1,4], [2,2], [4,1]。
// 但是根据要求2，[1,4] 不符合要求; 根据要求3，[2,2] 比 [4,1] 更能符合要求. 所以输出长度 L 为 2， 宽度 W 为 2。

// 输入: area = 37
// 输出: [37,1]

// 输入: area = 122122
// 输出: [427,286]

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 80.15% 的用户
// 内存消耗：
// 41.1 MB, 在所有 JavaScript 提交中击败了 20.61% 的用户
const constructRectangle = area => {
  let i = Math.ceil(Math.sqrt(area));
  while (i > 0) {
    const L = area / i;
    if (Number.isInteger(L)) {
      return [Math.max(L, i), Math.min(L, i)];
    }
    i--;
  }
};

const area = 4;

console.log(constructRectangle(area));
