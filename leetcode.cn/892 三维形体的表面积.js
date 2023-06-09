// 892. 三维形体的表面积

// 给你一个 n * n 的网格 grid ，上面放置着一些 1 x 1 x 1 的正方体。每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。

// 放置好正方体后，任何直接相邻的正方体都会互相粘在一起，形成一些不规则的三维形体。

// 请你返回最终这些形体的总表面积。

// 注意：每个形体的底面也需要计入表面积中。

// 输入：grid = [[1,2],[3,4]]
// 输出：34

// 输入：grid = [[1,1,1],[1,0,1],[1,1,1]]
// 输出：32

// 输入：grid = [[2,2,2],[2,1,2],[2,2,2]]
// 输出：46

// 思考：
// 脑筋急转弯
// 有些类似于 883，不过 883 只算了 3 个面，这里要算 6 个面，结果乘以 2 就行
// 错误！！！上面的思路是错的，因为可能是凹面体，还需要算内部的表面积

// O(n²) O(1)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 92.00% 的用户
// 内存消耗：
// 41.9 MB, 在所有 JavaScript 提交中击败了 16.00% 的用户
const surfaceArea = grid => {
  const len = grid.length;
  let res = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const target = grid[i][j];
      if (target !== 0) {
        res += 2; // 上下面
        const front = grid[i - 1] ? grid[i - 1][j] : 0;
        const back = grid[i + 1] ? grid[i + 1][j] : 0;
        const left = grid[i][j - 1] || 0;
        const right = grid[i][j + 1] || 0;
        if (target > front) res += target - front;
        if (target > back) res += target - back;
        if (target > left) res += target - left;
        if (target > right) res += target - right;
      }
    }
  }
  return res;
};

const grid = [
  [1, 2],
  [3, 4],
];

console.log(surfaceArea(grid));
