// 671. 二叉树中第二小的节点

// 给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 2 或 0。

// 如果一个节点有两个子节点的话，那么该节点的值等于两个子节点中较小的一个。

// 更正式地说，即 root.val = min(root.left.val, root.right.val) 总成立。

// 给出这样的一个二叉树，你需要输出所有节点中的 第二小的值 。

// 如果第二小的值不存在的话，输出 -1 。

// 输入：root = [2,2,5,null,null,5,7]
// 输出：5
// 解释：最小的值是 2 ，第二小的值是 5 。

// 输入：root = [2,2,2]
// 输出：-1
// 解释：最小的值是 2, 但是不存在第二小的值。

const { array2TreeNode } = require('../lib/utils');

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 81.21% 的用户
// 内存消耗：
// 40.9 MB, 在所有 JavaScript 提交中击败了 92.62% 的用户
const findSecondMinimumValue = root => {
  const base = root.val;
  let target = Infinity;
  let point = [root.left, root.right];
  const fn = point => {
    const current = [];
    for (const i of point) {
      if (!i) continue;
      if (i.val > base) {
        target = Math.min(target, i.val);
        continue;
      }
      current.push(i.left);
      current.push(i.right);
    }
    if (current.length > 0) {
      fn(current);
    }
  };
  fn(point);
  return target === Infinity ? -1 : target;
};

const root = [2];

console.log(findSecondMinimumValue(array2TreeNode(root)));
