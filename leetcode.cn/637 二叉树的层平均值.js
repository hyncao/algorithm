// 637. 二叉树的层平均值

// 给定一个非空二叉树的根节点 root , 以数组的形式返回每一层节点的平均值。与实际答案相差 10-5 以内的答案可以被接受。

// 输入：root = [3,9,20,null,null,15,7]
// 输出：[3.00000,14.50000,11.00000]
// 解释：第 0 层的平均值为 3,第 1 层的平均值为 14.5,第 2 层的平均值为 11 。
// 因此返回 [3, 14.5, 11] 。

// 输入：root = [3,9,20,15,7]
// 输出：[3.00000,14.50000,11.00000]

const { array2TreeNode } = require('../lib/utils');

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 97.36% 的用户
// 内存消耗：
// 46.4 MB, 在所有 JavaScript 提交中击败了 15.44% 的用户
const averageOfLevels1 = root => {
  if (!root) return [];
  const res = [];
  let point = [root];
  while (true) {
    let sum = 0;
    let current = [];
    for (const i of point) {
      sum += i.val;
      i.left && current.push(i.left);
      i.right && current.push(i.right);
    }
    res.push(sum / point.length);
    if (current.length === 0) break;
    point = current;
  }
  return res;
};

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 99.80% 的用户
// 内存消耗：
// 46.2 MB, 在所有 JavaScript 提交中击败了 20.53% 的用户
const averageOfLevels2 = root => {
  if (!root) return [];
  const res = [[], [root], []];
  while (true) {
    let sum = 0;
    for (const i of res[1]) {
      sum += i.val;
      i.left && res[2].push(i.left);
      i.right && res[2].push(i.right);
    }
    res[0].push(sum / res[1].length);
    if (res[2].length === 0) break;
    res[1] = res[2];
    res[2] = [];
  }
  return res[0];
};

const root = [3, 9, 20, null, null, 15, 7];

console.log(averageOfLevels2(array2TreeNode(root)));
