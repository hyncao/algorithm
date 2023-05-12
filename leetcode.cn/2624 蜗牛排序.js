// 2624. 蜗牛排序

// 请你编写一段代码为所有数组实现  snail(rowsCount，colsCount) 方法，该方法将 1D 数组转换为以蜗牛排序的模式的 2D 数组。

// 无效的输入值应该输出一个空数组。当 rowsCount * colsCount !== nums.length 时。这个输入被认为是无效的。

// 蜗牛排序从左上角的单元格开始，从当前数组的第一个值开始。然后，它从上到下遍历第一列，接着移动到右边的下一列，并从下到上遍历它。

// 将这种模式持续下去，每列交替变换遍历方向，直到覆盖整个数组。

// 示例 1：

// 输入：
// nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
// rowsCount = 5
// colsCount = 4
// 输出：
// [
//  [19,17,16,15],
//  [10,1,14,4],
//  [3,2,12,20],
//  [7,5,18,11],
//  [9,8,6,13]
// ]

// 示例 2：

// 输入：
// nums = [1,2,3,4]
// rowsCount = 1
// colsCount = 4
// 输出：[[1, 2, 3, 4]]

// 示例 3：

// 输入：
// nums = [1,3]
// rowsCount = 2
// colsCount = 2
// 输出：[]

// 执行用时：
// 180 ms, 在所有 JavaScript 提交中击败了96.65%的用户
// 内存消耗：
// 54.3 MB, 在所有 JavaScript 提交中击败了 99.44% 的用户
Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return [];
  const res = Array.from({ length: rowsCount }, () => []);
  let y = 0;
  let x = 0;
  let direction = true;
  for (const i of this) {
    res[y][x] = i;
    if (y === rowsCount - 1 && direction) {
      x++;
      direction = false;
    } else if (y === 0 && !direction) {
      x++;
      direction = true;
    } else {
      y += direction ? 1 : -1;
    }
  }
  return res;
};

const nums = [1, 2, 3, 4];

console.log(JSON.stringify(nums.snail(2, 4)));
