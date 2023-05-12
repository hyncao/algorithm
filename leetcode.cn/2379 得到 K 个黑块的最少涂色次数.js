// 2379. 得到 K 个黑块的最少涂色次数

// 给你一个长度为 n 下标从 0 开始的字符串 blocks ，blocks[i] 要么是 'W' 要么是 'B' ，表示第 i 块的颜色。字符 'W' 和 'B' 分别表示白色和黑色。

// 给你一个整数 k ，表示想要 连续 黑色块的数目。

// 每一次操作中，你可以选择一个白色块将它 涂成 黑色块。

// 请你返回至少出现 一次 连续 k 个黑色块的 最少 操作次数。

// 输入：blocks = "WBBWWBBWBW", k = 7
// 输出：3

// 输入：blocks = "WBWBBBW", k = 2
// 输出：0

// 滑窗 O(n)
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 38.46% 的用户
// 内存消耗：
// 41.8 MB, 在所有 JavaScript 提交中击败了 24.36% 的用户
const minimumRecolors = (blocks, k) => {
  let res = 0;
  let prev = 0;
  let areaIndex = 0;
  for (let i = 0; i < blocks.length; i++) {
    if (i > areaIndex + k - 1) {
      if (blocks[i] === 'W' && blocks[areaIndex] === 'B') {
        prev++;
      }
      if (blocks[i] === 'B' && blocks[areaIndex] === 'W') {
        prev--;
      }
      areaIndex++;
      res = Math.min(res, prev);
      if (prev === 0) break;
    } else {
      prev += blocks[i] === 'W' ? 1 : 0;
    }
    if (i === k - 1) {
      res = prev;
    }
  }
  return res;
};

const blocks = 'WBBWWBBWBW';
const k = 7;

console.log(minimumRecolors(blocks, k));
