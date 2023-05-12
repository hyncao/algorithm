// 605. 种花问题

// 假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

// 给你一个整数数组  flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。

// 另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false。

// 输入：flowerbed = [1,0,0,0,1], n = 1
// 输出：true

// 输入：flowerbed = [1,0,0,0,1], n = 2
// 输出：false

// 注：本题边界情况非常多，要当心，怪不得通过率才 32.5%

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 71.15% 的用户
// 内存消耗：
// 43 MB, 在所有 JavaScript 提交中击败了 60.71% 的用户
const canPlaceFlowers = (flowerbed, n) => {
  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    return n < 2;
  }
  for (let i = 0; i < flowerbed.length; i++) {
    if (n === 0) break;
    const prev = flowerbed[i - 1];
    const current = flowerbed[i];
    const next = flowerbed[i + 1];
    if (i === 0 && current === 0 && next === 0) {
      n--;
      flowerbed[i] = 1;
    } else if (i === flowerbed.length - 1 && current === 0 && prev === 0) {
      n--;
    } else if (current === 0 && prev === 0 && next === 0) {
      n--;
      flowerbed[i] = 1;
    }
  }
  return n === 0;
};

const flowerbed = [0,0,0,0,0,1,0,0],
  n = 0;

console.log(canPlaceFlowers(flowerbed, n));
