// 1299. 将每个元素替换为右侧最大元素

// 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。

// 输入：arr = [17,18,5,4,6,1]
// [18,6,6,6,1,-1]

// 开莽 O(n²)
// 执行用时：
// 448 ms, 在所有 JavaScript 提交中击败了 44.89% 的用户
// 内存消耗：
// 49.3 MB, 在所有 JavaScript 提交中击败了 11.36% 的用户
const replaceElements1 = arr => {
  return arr.map((i, index) => {
    if (index === arr.length - 1) return -1;
    return arr.slice(index + 1).reduce((prev, current) => {
      return current > prev ? current : prev;
    }, -Infinity);
  });
};

// 开莽, 不用 reduce 方法 O(n²)
// 执行用时：
// 448 ms, 在所有 JavaScript 提交中击败了 44.89% 的用户
// 内存消耗：
// 49.3 MB, 在所有 JavaScript 提交中击败了 11.36% 的用户
const replaceElements2 = arr => {
  return arr.map((i, index) => {
    if (index === arr.length - 1) return -1;
    return arr.slice(index + 1).sort((x, y) => x - y)[arr.length - index - 2];
  });
};

// 用 Math.max 快速找出最大值 O(n²)
// 执行用时：
// 716 ms, 在所有 JavaScript 提交中击败了 21.59% 的用户
// 内存消耗：
// 48.4 MB, 在所有 JavaScript 提交中击败了 25.57% 的用户
const replaceElements3 = arr => {
  return arr.map((i, index) => {
    if (index === arr.length - 1) return -1;
    return Math.max.apply(null, arr.slice(index + 1));
  });
};

// 用 Math.max 快速找出最大值的基础上, 直接对原数组进行篡改 O(n²)
// 执行用时：
// 684 ms, 在所有 JavaScript 提交中击败了 26.14% 的用户
// 内存消耗：
// 47.9 MB, 在所有 JavaScript 提交中击败了 30.68% 的用户
const replaceElements4 = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      arr[i] = -1;
    } else {
      arr[i] = Math.max.apply(null, arr.slice(i + 1));
    }
  }
  return arr;
};

// 由于最后得到的数组可以理解为是从大到小排序的结果, 最后一个-1除外, 则可以反向遍历, 通过 Math.max 只比较两个数就行 O(n)
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 98.30% 的用户
// 内存消耗：
// 45.4 MB, 在所有 JavaScript 提交中击败了 61.36% 的用户
const replaceElements5 = arr => {
  const res = [];
  let max = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      res[i] = -1;
    } else {
      res[i] = max;
    }
    max = Math.max(arr[i], max);
  }
  return res;
};

// 跟方法5大致类似, 不过尝试直接篡改原数组, 节省空间复杂度 O(n)
// 执行用时：
// 76 ms, 在所有 JavaScript 提交中击败了 88.07% 的用户
// 内存消耗：
// 43.9 MB, 在所有 JavaScript 提交中击败了 98.30% 的用户
const replaceElements6 = arr => {
  let current = -Infinity;
  let max = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i];
    if (i === arr.length - 1) {
      arr[i] = -1;
    } else if (i === arr.length - 2) {
      arr[i] = current;
    } else {
      arr[i] = max;
    }
    current = temp;
    max = Math.max(current, max);
  }
  return arr;
};

const arr1 = [17, 18, 5, 4, 6, 1];
const arr2 = [2, 2, 2, 4, -1, -222];
console.log(replaceElements6(arr2));
