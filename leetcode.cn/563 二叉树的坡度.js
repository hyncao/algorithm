// 563. 二叉树的坡度

// 给你一个二叉树的根节点 root ，计算并返回 整个树 的坡度 。

// 一个树的 节点的坡度 定义即为，该节点左子树的节点之和和右子树节点之和的 差的绝对值 。

// 如果没有左子树的话，左子树的节点之和为 0 ；没有右子树的话也是一样。空结点的坡度是 0 。

// 整个树 的坡度就是其所有节点的坡度之和。

// 输入：root = [1,2,3]
// 输出：1
// 解释：
// 节点 2 的坡度：|0-0| = 0（没有子节点）
// 节点 3 的坡度：|0-0| = 0（没有子节点）
// 节点 1 的坡度：|2-3| = 1（左子树就是左子节点，所以和是 2 ；右子树就是右子节点，所以和是 3 ）
// 坡度总和：0 + 0 + 1 = 1

// 输入：root = [4,2,9,3,5,null,7]
// 输出：15

// 输入：root = [21,7,14,1,1,2,2,3,3]
// 输出：9

const { array2TreeNode } = require('../lib/utils');

// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 65.93% 的用户
// 内存消耗：
// 45.9 MB, 在所有 JavaScript 提交中击败了 82.96% 的用户
const findTilt = root => {
  let res = 0;
  const fn = root => {
    if (!root) return 0;
    if (!root.left && !root.right) {
      return root.val;
    }
    const left = root.left ? fn(root.left) : 0;
    const right = root.right ? fn(root.right) : 0;
    res += Math.abs(left - right);
    return left + right + root.val;
  };
  fn(root);
  return res;
};

// 期望：109
const array = [];

// const array = [4, 2, 9, 3, 5, null, 7];

const root = array2TreeNode(array);

console.log(findTilt(root));
