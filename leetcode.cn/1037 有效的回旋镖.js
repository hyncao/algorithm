// 1037. 有效的回旋镖

// 给定一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点，如果这些点构成一个 回旋镖 则返回 true 。

// 回旋镖 定义为一组三个点，这些点 各不相同 且 不在一条直线上 。

// 示例 1：

// 输入：points = [[1,1],[2,3],[3,2]]
// 输出：true
// 示例 2：

// 输入：points = [[1,1],[2,2],[3,3]]
// 输出：false

// 思考：已知两点求直线方程
// (x-x1)/(x2-x1) = (y-y1)/(y2-y1)
// 为了避免分母为 0 的问题，等式左右乘以 (x2-x1)(y2-y1)
// (x-x1)(y2-y1) = (y-y1)(x2-x1)
// 这其实就是向量叉乘
// (x-x1)(y2-y1) - (y-y1)(x2-x1) = 0

// 执行用时：
// O(1) O(1)
// 52 ms, 在所有 JavaScript 提交中击败了 94.74% 的用户
// 内存消耗：
// 40.01 MB, 在所有 JavaScript 提交中击败了 63.16% 的用户
const isBoomerang = points => {
  const [[x1, y1], [x2, y2], [x3, y3]] = points;
  return (x3 - x1) * (y2 - y1) !== (y3 - y1) * (x2 - x1);
};

const points = [
  [0, 1],
  [0, 1],
  [2, 1],
];

console.log(isBoomerang(points));
