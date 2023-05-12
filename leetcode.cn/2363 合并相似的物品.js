// 2363. 合并相似的物品

// 给你两个二维整数数组 items1 和 items2 ，表示两个物品集合。每个数组 items 有以下特质：

// items[i] = [valuei, weighti] 其中 valuei 表示第 i 件物品的 价值 ，weighti 表示第 i 件物品的 重量 。
// items 中每件物品的价值都是 唯一的 。
// 请你返回一个二维数组 ret，其中 ret[i] = [valuei, weighti]， weighti 是所有价值为 valuei 物品的 重量之和 。

// 注意：ret 应该按价值 升序 排序后返回。

// 示例 1：

// 输入：items1 = [[1,1],[4,5],[3,8]], items2 = [[3,1],[1,5]]
// 输出：[[1,6],[3,9],[4,5]]
// 解释：
// value = 1 的物品在 items1 中 weight = 1 ，在 items2 中 weight = 5 ，总重量为 1 + 5 = 6 。
// value = 3 的物品再 items1 中 weight = 8 ，在 items2 中 weight = 1 ，总重量为 8 + 1 = 9 。
// value = 4 的物品在 items1 中 weight = 5 ，总重量为 5 。
// 所以，我们返回 [[1,6],[3,9],[4,5]] 。

// 示例 2：

// 输入：items1 = [[1,1],[3,2],[2,3]], items2 = [[2,1],[3,2],[1,3]]
// 输出：[[1,4],[2,4],[3,4]]
// 解释：
// value = 1 的物品在 items1 中 weight = 1 ，在 items2 中 weight = 3 ，总重量为 1 + 3 = 4 。
// value = 2 的物品在 items1 中 weight = 3 ，在 items2 中 weight = 1 ，总重量为 3 + 1 = 4 。
// value = 3 的物品在 items1 中 weight = 2 ，在 items2 中 weight = 2 ，总重量为 2 + 2 = 4 。
// 所以，我们返回 [[1,4],[2,4],[3,4]] 。

// 示例 3：

// 输入：items1 = [[1,3],[2,2]], items2 = [[7,1],[2,2],[1,4]]
// 输出：[[1,7],[2,4],[7,1]]
// 解释：
// value = 1 的物品在 items1 中 weight = 3 ，在 items2 中 weight = 4 ，总重量为 3 + 4 = 7 。
// value = 2 的物品在 items1 中 weight = 2 ，在 items2 中 weight = 2 ，总重量为 2 + 2 = 4 。
// value = 7 的物品在 items2 中 weight = 1 ，总重量为 1 。
// 所以，我们返回 [[1,7],[2,4],[7,1]] 。

// 提示：

// 1 <= items1.length, items2.length <= 1000
// items1[i].length == items2[i].length == 2
// 1 <= valuei, weighti <= 1000
// items1 中每个 valuei 都是 唯一的 。
// items2 中每个 valuei 都是 唯一的 。

// O(m) m 为 items1 和 items2 中最长的 length
// 执行用时：
// 84 ms, 在所有 JavaScript 提交中击败了 90.22% 的用户
// 内存消耗：
// 48.7 MB, 在所有 JavaScript 提交中击败了 19.56% 的用户
const mergeSimilarItems = (items1, items2) => {
  const map = {};
  let i = 0;
  while (i < items1.length || i < items2.length) {
    if (items1[i]) {
      const [value1, weight1] = items1[i];
      map[value1] = map[value1] ? map[value1] + weight1 : weight1;
    }
    if (items2[i]) {
      const [value2, weight2] = items2[i];
      map[value2] = map[value2] ? map[value2] + weight2 : weight2;
    }
    i++;
  }
  const keys = Object.keys(map);
  keys.sort((a, b) => a - b);
  return keys.map(key => [key, map[key]]);
};

const items1 = [
  [1, 3],
  [2, 2],
];
const items2 = [
  [7, 1],
  [2, 2],
  [1, 4],
];

console.log(JSON.stringify(mergeSimilarItems(items1, items2)));
