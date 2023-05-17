// 1054. 距离相等的条形码

// 在一个仓库里，有一排条形码，其中第 i 个条形码为 barcodes[i]。

// 请你重新排列这些条形码，使其中任意两个相邻的条形码不能相等。 你可以返回任何满足该要求的答案，此题保证存在答案。

// 输入：barcodes = [1,1,1,2,2,2]
// 输出：[2,1,2,1,2,1]

// 输入：barcodes = [1,1,1,1,2,2,3,3]
// 输出：[1,3,1,3,2,1,2,1]

// 思考：
// 找出出现最多的数字记为 A，第二多的记为 B...
// 在奇数位置排 A，A 用完了但是还有奇数位，用 B 补上，直到没位置
// 再用相同逻辑排偶数位

// O(n*log(n)) O(n)
// 执行用时：
// 144 ms, 在所有 JavaScript 提交中击败了 58.62% 的用户
// 内存消耗：
// 50.1 MB, 在所有 JavaScript 提交中击败了 55.17% 的用户
const rearrangeBarcodes = barcodes => {
  const len = barcodes.length;
  const map = {};
  const res = Array(len);
  for (const i of barcodes) {
    if (map[i]) map[i]++;
    else map[i] = 1;
  }
  const list = Object.keys(map);
  for (let i = 0; i < list.length; i++) {
    list[i] = [list[i], map[list[i]]];
  }
  list.sort((a, b) => b[1] - a[1]);
  let listIndex = 0;
  for (let i = 0; i < len; i += 2) {
    res[i] = list[listIndex][0];
    if (list[listIndex][1] === 1) {
      listIndex++;
    } else {
      list[listIndex][1]--;
    }
  }
  for (let i = 1; i < len; i += 2) {
    res[i] = list[listIndex][0];
    if (list[listIndex][1] === 1) {
      listIndex++;
    } else {
      list[listIndex][1]--;
    }
  }
  return res;
};

const barcodes = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3];

console.log(rearrangeBarcodes(barcodes));
