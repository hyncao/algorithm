// 888. 公平的糖果交换

// 爱丽丝和鲍勃拥有不同总数量的糖果。给你两个数组 aliceSizes 和 bobSizes ，aliceSizes[i] 是爱丽丝拥有的第 i 盒糖果中的糖果数量，bobSizes[j] 是鲍勃拥有的第 j 盒糖果中的糖果数量。

// 两人想要互相交换一盒糖果，这样在交换之后，他们就可以拥有相同总数量的糖果。一个人拥有的糖果总数量是他们每盒糖果数量的总和。

// 返回一个整数数组 answer，其中 answer[0] 是爱丽丝必须交换的糖果盒中的糖果的数目，answer[1] 是鲍勃必须交换的糖果盒中的糖果的数目。如果存在多个答案，你可以返回其中 任何一个 。题目测试用例保证存在与输入对应的答案。

// 输入：aliceSizes = [1,1], bobSizes = [2,2]
// 输出：[1,2]

// 输入：aliceSizes = [1,2], bobSizes = [2,3]
// 输出：[1,2]

// 输入：aliceSizes = [2], bobSizes = [1,3]
// 输出：[2,3]

// 输入：aliceSizes = [1,2,5], bobSizes = [2,4]
// 输出：[5,4]

// O(n) O(n)
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 96.90% 的用户
// 内存消耗：
// 51 MB, 在所有 JavaScript 提交中击败了 21.70% 的用户
const fairCandySwap1 = (aliceSizes, bobSizes) => {
  let sum = 0;
  let sumA = 0;
  const map = new Set();
  for (const i of aliceSizes) {
    sum += i;
    sumA += i;
  }
  for (const i of bobSizes) {
    sum += i;
    map.add(i);
  }
  const mid = sum / 2;
  for (const i of aliceSizes) {
    const target = mid - (sumA - i);
    if (map.has(target)) {
      return [i, target];
    }
  }
};

// O(n²) O(1)
// 执行用时：
// 412 ms, 在所有 JavaScript 提交中击败了 36.43% 的用户
// 内存消耗：
// 45.6 MB, 在所有 JavaScript 提交中击败了 59.69% 的用户
const fairCandySwap2 = (aliceSizes, bobSizes) => {
  let sum = 0;
  let sumA = 0;
  for (const i of aliceSizes) {
    sum += i;
    sumA += i;
  }
  for (const i of bobSizes) {
    sum += i;
  }
  const mid = sum / 2;
  for (const i of aliceSizes) {
    const target = mid - (sumA - i);
    if (bobSizes.includes(target)) {
      return [i, target];
    }
  }
};

const aliceSizes = [1, 2, 5],
  bobSizes = [2, 4];

console.log(fairCandySwap2(aliceSizes, bobSizes));
