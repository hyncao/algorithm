// 1346. 检查整数及其两倍数是否存在

// 给你一个整数数组 arr，请你检查是否存在两个整数 N 和 M，满足 N 是 M 的两倍（即，N = 2 * M）。

// 输入：arr = [10,2,5,3]
// 输出：true

// 开莽 O(n²)
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 68.13% 的用户
// 内存消耗：
// 41 MB, 在所有 JavaScript 提交中击败了 93.27% 的用户
const checkIfExist1 = arr => {
  return arr.some((i, index) => {
    const position = arr.indexOf(i * 2);
    return position > -1 && position !== index;
  });
};

// 哈希表 O(n)
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 68.13% 的用户
// 内存消耗：
// 42.9 MB, 在所有 JavaScript 提交中击败了 40.64% 的用户
const checkIfExist2 = arr => {
  const hashMap = new Map();
  for (i in arr) {
    // 先进行判断, 再 set, 就可以避免 0 的问题, 如果出现第二个0, 也没问题
    if (hashMap.has(arr[i] * 2) || hashMap.has(arr[i] / 2)) {
      return true;
    }
    hashMap.set(arr[i]);
  }
  return false;
};

// 排序+双指针 O(n²) 或者 O(nlog(n)) 取决于样本数和执行环境
// 参考资料: https://segmentfault.com/a/1190000010648740
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 68.13% 的用户
// 内存消耗：
// 42.2 MB, 在所有 JavaScript 提交中击败了 58.65% 的用户
const checkIfExist3 = arr => {
  // 先将数组从小到大排序
  const sortedArr = arr.sort((x, y) => x - y);
  let n = 0;
  let n2 = n + 1;
  while (n < arr.length && n2 < arr.length) {
    if (arr[n] === 0 && arr[n2] === 0) {
      return true;
    }
    if (arr[n2] === arr[n] * 2 || arr[n2] === arr[n] / 2) {
      return true;
    }
    if (n2 === arr.length - 1) {
      n++;
      n2 = n + 1;
    } else {
      n2++;
    }
  }
  return false;
};

// 开莽2.0 O(n²)
// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 98.24% 的用户
// 内存消耗：
// 41 MB, 在所有 JavaScript 提交中击败了 93.25% 的用户
const checkIfExist4 = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == arr[i] * 2 && i != j) {
        return true;
      }
    }
  }
  return false;
};

const arr1 = [-2, 0, 10, -19, 4, 6, -8];
const arr2 = [3, 1, 8, 11];
console.log(checkIfExist(arr2));
