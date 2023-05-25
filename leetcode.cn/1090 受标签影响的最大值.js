// 1090. 受标签影响的最大值

// 我们有一个 n 项的集合。给出两个整数数组 values 和 labels，第 i 个元素的值和标签分别是 values[i] 和 labels[i]。还会给出两个整数 numWanted 和 useLimit。

// 从 n 个元素中选择一个子集 s:

// 子集 s 的大小 小于或等于 numWanted。

// s 中 最多 有相同标签的 useLimit 项。

// 一个子集的 分数 是该子集的值之和。

// 返回子集 s 的最大 分数。

// 示例 1：
// 输入：values = [5,4,3,2,1], labels = [1,1,2,2,3], numWanted = 3, useLimit = 1
// 输出：9
// 解释：选出的子集是第一项，第三项和第五项。

// 示例 2：
// 输入：values = [5,4,3,2,1], labels = [1,3,3,3,2], numWanted = 3, useLimit = 2
// 输出：12
// 解释：选出的子集是第一项，第二项和第三项。

// 示例 3：
// 输入：values = [9,8,8,7,6], labels = [0,0,0,1,1], numWanted = 3, useLimit = 1
// 输出：16
// 解释：选出的子集是第一项和第四项。

// 思考：
// 动态规划
// dp[i] 为下标为 i 时的结果
// 当 i 满足 numWanted 和 useLimit 时，直接前 i 项求和即可
// 当 i 不满足 numWanted 或 useLimit 时，才要做出取舍
// 不满足 numWanted 时
// dp[i] = dp[i-1] + values[i] - Math.min(values)
// 不满足 useLimit 时
// dp[i] = dp[i-1] + values[i] - Math.min(labels)
// 有一个问题，当标签名额满了时，新标签 value 和老标签的最小值相同时，如何取舍
// 这个要取决于之后的数据，还需要搞一个备选库
// 比如这样的输入：
// values = [2,2,2,2,3], labels = [0,1,2,3,3], numWanted = 3, useLimit = 2
// i = 3 时，需要把标签 3 列入备选
// i = 4 时，舍弃前面一个标签，选取标签 3
// ======这样来看用动态规划思路就很麻烦了======

// const largestValsFromLabels = (values, labels, numWanted, useLimit) => {
//   const len = values.length;
//   let prev = 0;
//   let pickedLen = 0;
//   let pickedMinValue = Infinity;
//   let pickedMinLabel = [];
//   const pickedLabels = new Map();
//   const pick = (value, label) => {
//     pickedLabels.set(label, Math.min(pickedLabels.get(label) || 0, value));
//     if (value < pickedMinValue) {
//       pickedMinValue = value;
//       pickedMinLabel = [label];
//     }
//     if (value === pickedMinValue) {
//       pickedMinLabel.push(label);
//     }
//   };

//   for (let i = 0; i < len; i++) {
//     const currentValue = values[i];
//     const currentLabel = labels[i];

//     if (savedLabels.size === useLimit && !pickedLabels.has(currentLabel)) {
//       // 问题来了，这里要做冗余处理，还不知道具体选择哪一个标签
//     }

//     if (
//       (savedLabels.size < useLimit || (savedLabels.size === useLimit && pickedLabels.has(currentLabel))) &&
//       pickedLen <= numWanted
//     ) {
//       prev += current;
//       pickedLen++;
//       pick(currentValue, currentLabel);
//     }
//   }
// };

// 贪心
// 先把数据整理一下
// 排序 values，之后从高到低往下捋，一边捋一边查看是否满足要求
// 可以搞一个新数组，项为 values 的下标，根据 values 来排序，就相当于又排好了序，而且还能对应 label

// O(n*log(n)) O(n)
// 执行用时：
// 76 ms, 在所有 JavaScript 提交中击败了 92.35% 的用户
// 内存消耗：
// 44.9 MB, 在所有 JavaScript 提交中击败了 95.89% 的用户
const largestValsFromLabels = (values, labels, numWanted, useLimit) => {
  const len = values.length;
  const indexList = Array.from({ length: len }, (_, i) => i);
  indexList.sort((a, b) => values[b] - values[a]);
  let picked = 0;
  let res = 0;
  const map = new Map();
  for (let i = 0; i < len; i++) {
    const index = indexList[i];
    const label = labels[index];
    // 如果当前标签已经达到最大值，不选
    if ((map.get(label) || 0) === useLimit) continue;
    const value = values[index];
    res += value;
    picked++;
    map.set(label, (map.get(label) || 0) + 1);
    // 没坑位了，结束循环
    if (picked === numWanted) break;
  }
  return res;
};

const values = [9, 8, 8, 7, 6],
  labels = [0, 0, 0, 1, 1],
  numWanted = 3,
  useLimit = 1;

console.log(largestValsFromLabels(values, labels, numWanted, useLimit));
