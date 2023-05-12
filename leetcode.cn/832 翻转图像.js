// 832. 翻转图像

// 给定一个 n x n 的二进制矩阵 image ，先 水平 翻转图像，然后 反转 图像并返回 结果 。

// 水平翻转图片就是将图片的每一行都进行翻转，即逆序。

// 例如，水平翻转 [1,1,0] 的结果是 [0,1,1]。
// 反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。

// 例如，反转 [0,1,1] 的结果是 [1,0,0]。

// 输入：image = [[1,1,0],[1,0,1],[0,0,0]]
// 输出：[[1,0,0],[0,1,0],[1,1,1]]

// 输入：image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// 输出：[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 75.86% 的用户
// 内存消耗：
// 43.3 MB, 在所有 JavaScript 提交中击败了 22.41% 的用户
const flipAndInvertImage = image => {
  const n = image.length;
  for (const item of image) {
    for (let i = 0; i < n >> 1; i++) {
      item[i] = item[i] ^ item[n - i - 1];
      item[n - i - 1] = item[i] ^ item[n - i - 1];
      item[i] = item[i] ^ item[n - i - 1];
    }
    for (let i = 0; i < n; i++) {
      item[i] = !item[i] - 0;
    }
  }
  return image;
};

const image = [
  [1, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 0, 1, 0],
];

console.log(JSON.stringify(flipAndInvertImage(image)));
