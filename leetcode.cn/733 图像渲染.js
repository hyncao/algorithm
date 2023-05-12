// 733. 图像渲染

// 有一幅以 m x n 的二维整数数组表示的图画 image ，其中 image[i][j] 表示该图画的像素值大小。

// 你也被给予三个整数 sr ,  sc 和 newColor 。你应该从像素 image[sr][sc] 开始对图像进行 上色填充 。

// 为了完成 上色工作 ，从初始像素开始，记录初始坐标的 上下左右四个方向上 像素值与初始坐标相同的相连像素点，

// 接着再记录这四个方向上符合条件的像素点与他们对应 四个方向上 像素值与初始坐标相同的相连像素点，……，重复该过程。

// 将所有有记录的像素点的颜色值改为 newColor 。

// 最后返回 经过上色渲染后的图像 。

// 输入: image = [[1,1,1],[1,1,0],[1,0,1]]，sr = 1, sc = 1, newColor = 2
// 输出: [[2,2,2],[2,2,0],[2,0,1]]
// 解析: 在图像的正中间，(坐标(sr,sc)=(1,1)),在路径上所有符合条件的像素点的颜色都被更改成2。
// 注意，右下角的像素没有更改为2，因为它不是在上下左右四个方向上与初始点相连的像素点。

// 输入: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
// 输出: [[2,2,2],[2,2,2]]

// 为了避免 image = [[0, 0, 0], [0, 0, 0]], sr = 0, sc = 0, newColor = 0 死循环
// 考虑加一个 dirty 判断，涂过色的方块记录为 dirty
// 为了节省空间，在每个 image[i] 加一个 dirty 属性
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 62.50% 的用户
// 内存消耗：
// 42.7 MB, 在所有 JavaScript 提交中击败了 90.66% 的用户
const floodFill1 = (image, sr, sc, newColor) => {
  const xLen = image[0].length;
  const yLen = image.length;
  const val = image[sr][sc];
  const fn = (x, y) => {
    if (x < 0 || x > xLen - 1 || y < 0 || y > yLen - 1 || image[y][x] !== val) return;
    const dirty = image[y].dirty;
    if (!dirty) {
      image[y].dirty = new Set([x]);
    } else {
      if (dirty.has(x)) return;
      dirty.add(x);
    }
    image[y][x] = newColor;
    fn(x - 1, y);
    fn(x, y - 1);
    fn(x + 1, y);
    fn(x, y + 1);
  };
  fn(sc, sr);
  return image;
};

// 根本不用加什么 dirty 靠
// if (val === newColor) return image
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 97.94% 的用户
// 内存消耗：
// 42.9 MB, 在所有 JavaScript 提交中击败了 61.23% 的用户
const floodFill2 = (image, sr, sc, newColor) => {
  const xLen = image[0].length;
  const yLen = image.length;
  const val = image[sr][sc];
  if (val === newColor) return image;
  const fn = (x, y) => {
    if (x < 0 || x > xLen - 1 || y < 0 || y > yLen - 1 || image[y][x] !== val) return;
    image[y][x] = newColor;
    fn(x - 1, y);
    fn(x, y - 1);
    fn(x + 1, y);
    fn(x, y + 1);
  };
  fn(sc, sr);
  return image;
};

const image = [
    [0, 0, 0],
    [1, 0, 0],
  ],
  sr = 1,
  sc = 0,
  newColor = 0;

console.log(JSON.stringify(floodFill2(image, sr, sc, newColor)));
