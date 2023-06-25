// 1401. 圆和矩形是否有重叠

// 给你一个以 (radius, xCenter, yCenter) 表示的圆和一个与坐标轴平行的矩形 (x1, y1, x2, y2) ，其中 (x1, y1) 是矩形左下角的坐标，而 (x2, y2) 是右上角的坐标。

// 如果圆和矩形有重叠的部分，请你返回 true ，否则返回 false 。

// 换句话说，请你检测是否 存在 点 (xi, yi) ，它既在圆上也在矩形上（两者都包括点落在边界上的情况）。

// 输入：radius = 1, xCenter = 0, yCenter = 0, x1 = 1, y1 = -1, x2 = 3, y2 = 1
// 输出：true
// 解释：圆和矩形存在公共点 (1,0) 。

// 输入：radius = 1, xCenter = 1, yCenter = 1, x1 = 1, y1 = -3, x2 = 2, y2 = -1
// 输出：false

// 输入：radius = 1, xCenter = 0, yCenter = 0, x1 = -1, y1 = 0, x2 = 0, y2 = 1
// 输出：true

// 1 <= radius <= 2000
// -104 <= xCenter, yCenter <= 104
// -104 <= x1 < x2 <= 104
// -104 <= y1 < y2 <= 104

// 思考：
// 找到矩形中距离圆心最近的点，计算该点距离圆心的距离是否等于圆半径即可
// 目标点要么是四个顶点，要么处于一条边上，那么就处于矩形内部

// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 100.00% 的用户
// 内存消耗：
// 40.9 MB, 在所有 JavaScript 提交中击败了 83.33% 的用户
const checkOverlap = (radius, xCenter, yCenter, x1, y1, x2, y2) => {
  // 圆在矩形内部
  if (x1 <= xCenter && y1 <= yCenter && x2 >= xCenter && y2 >= yCenter) {
    return true;
  }
  if (x1 >= xCenter || x2 <= xCenter) {
    const closestX = Math.min(Math.abs(x1 - xCenter), Math.abs(x2 - xCenter));
    // 边
    if (y1 < yCenter && y2 > yCenter) {
      return closestX <= radius;
    }
    // 顶点
    const closestY = Math.min(Math.abs(y1 - yCenter), Math.abs(y2 - yCenter));
    return Math.sqrt(closestX ** 2 + closestY ** 2) <= radius;
  }
  if (y1 >= yCenter || y2 <= yCenter) {
    const closestY = Math.min(Math.abs(y1 - yCenter), Math.abs(y2 - yCenter));
    // 边
    if (x1 < xCenter && x2 > xCenter) {
      return closestY <= radius;
    }
    // 顶点
    const closestX = Math.min(Math.abs(x1 - xCenter), Math.abs(x2 - xCenter));
    return Math.sqrt(closestY ** 2 + closestX ** 2) <= radius;
  }
};

const radius = 4,
  xCenter = 8,
  yCenter = 2,
  x1 = 0,
  y1 = 0,
  x2 = 1,
  y2 = 5;

console.log(checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2));
