// 1093. 大样本统计

// 我们对 0 到 255 之间的整数进行采样，并将结果存储在数组 count 中：count[k] 就是整数 k 在样本中出现的次数。

// 计算以下统计数据:

// minimum ：样本中的最小元素。
// maximum ：样品中的最大元素。
// mean ：样本的平均值，计算为所有元素的总和除以元素总数。
// median ：
// 如果样本的元素个数是奇数，那么一旦样本排序后，中位数 median 就是中间的元素。
// 如果样本中有偶数个元素，那么中位数median 就是样本排序后中间两个元素的平均值。
// mode ：样本中出现次数最多的数字。保众数是 唯一 的。
// 以浮点数数组的形式返回样本的统计信息 [minimum, maximum, mean, median, mode] 。与真实答案误差在 10-5 内的答案都可以通过。

// 输入：count = [0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// 输出：[1.00000,3.00000,2.37500,2.50000,3.00000]

// 输入：count = [0,4,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// 输出：[1.00000,4.00000,2.18182,2.00000,1.00000]

// median 的获取不够优雅
// O(2n) O(2n)
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 66.06% 的用户
// 内存消耗：
// 43.9 MB, 在所有 JavaScript 提交中击败了 6.67% 的用户
const sampleStats1 = count => {
  let minimum = 256;
  let maximum = 0;
  let sum = 0;
  let mode = 0;
  let maxRepeat = 0;
  let countNum = 0;
  const map = new Map();
  for (let num = 0; num < 256; num++) {
    const repeat = count[num];
    if (repeat) {
      if (minimum > num) minimum = num;
      maximum = num;
      sum += num * repeat;
      if (repeat > maxRepeat) {
        maxRepeat = repeat;
        mode = num;
      }
      map.set(num, [countNum, (countNum += repeat)]);
    }
  }
  // 是奇数吗
  let isOdd = countNum & 1;
  let medianIndex1 = (countNum >> 1) - (1 - isOdd);
  let medianIndex2 = countNum >> 1;
  let medianSum = 0;
  for (const [num, repeat] of map) {
    if (medianIndex1 >= repeat[0] && medianIndex1 < repeat[1] && medianSum === 0) {
      medianSum += num;
    }
    if (medianIndex2 >= repeat[0] && medianIndex2 < repeat[1] && !isOdd) {
      medianSum += num;
    }
  }
  const mean = sum / countNum;
  const median = medianSum / (2 - isOdd);
  return [minimum, maximum, mean, median, mode];
};

// 遍历两次，第一次拿到总长度，就可以确定中位数的下标了
// O(2n) O(1)
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 66.06% 的用户
// 内存消耗：
// 41.3 MB, 在所有 JavaScript 提交中击败了 83.94% 的用户
const sampleStats2 = count => {
  let minimum = 256;
  let maximum = 0;
  let sum = 0;
  let mode = 0;
  let maxRepeat = 0;
  let countNum = 0;
  for (let num = 0; num < 256; num++) {
    const repeat = count[num];
    if (repeat) {
      if (minimum > num) minimum = num;
      maximum = num;
      sum += num * repeat;
      if (repeat > maxRepeat) {
        maxRepeat = repeat;
        mode = num;
      }
      countNum += repeat;
    }
  }
  let indexSum = 0;
  let medianSum = 0;
  const medianIndex = countNum >> 1;
  for (let num = 0; num < 256; num++) {
    const repeat = count[num];
    if (countNum & 1) {
      if (medianIndex >= indexSum && medianIndex < indexSum + repeat) {
        medianSum = num;
        break;
      }
    } else {
      if (medianIndex - 1 >= indexSum && medianIndex - 1 < indexSum + repeat) {
        medianSum += num;
      }
      if (medianIndex >= indexSum && medianIndex < indexSum + repeat) {
        medianSum += num;
        break;
      }
    }
    indexSum += repeat;
  }
  const mean = sum / countNum;
  const median = medianSum / (2 - (countNum & 1));
  return [minimum, maximum, mean, median, mode];
};

const count = [
  0, 1, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

console.log(sampleStats2(count));
