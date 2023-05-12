// 836. 矩形重叠

// 矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，(x2, y2) 是右上角的坐标。矩形的上下边平行于 x 轴，左右边平行于 y 轴。

// 如果相交的面积为 正 ，则称两矩形重叠。需要明确的是，只在角或边接触的两个矩形不构成重叠。

// 给出两个矩形 rec1 和 rec2 。如果它们重叠，返回 true；否则，返回 false 。

// 输入：rec1 = [0,0,2,2], rec2 = [1,1,3,3]
// 输出：true

// 输入：rec1 = [0,0,1,1], rec2 = [1,0,2,1]
// 输出：false

// 输入：rec1 = [0,0,1,1], rec2 = [2,2,3,3]
// 输出：false

// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 96.18% 的用户
// 内存消耗：
// 40.9 MB, 在所有 JavaScript 提交中击败了 19.85% 的用户
const isRectangleOverlap = (rec1, rec2) => {
  return rec2[0] < rec1[2] && rec2[1] < rec1[3] && rec2[2] > rec1[0] && rec2[3] > rec1[1];
};

const rec1 = [0, 0, 1, 1],
  rec2 = [2, 2, 3, 3];

console.log(isRectangleOverlap(rec1, rec2));
