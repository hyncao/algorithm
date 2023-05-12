// 111. 二叉树的最小深度

// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 输入：root = [3,9,20,null,null,15,7]
// 输出：2

// 输入：root = [2,null,3,null,4,null,5,null,6]
// 输出：5

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 递归
// 执行用时：
// 204 ms, 在所有 JavaScript 提交中击败了 77.93% 的用户
// 内存消耗：
// 81.4 MB, 在所有 JavaScript 提交中击败了 24.15% 的用户
const minDepth = (root, deep = 1) => {
  if (root === null) return (deep === 1 ? 0 : Infinity);
  if (root.left === null && root.right === null) return deep;
  return Math.min(minDepth(root.left, deep + 1), minDepth(root.right, deep + 1));
};

// const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));

const root = new TreeNode(1, new TreeNode(1, new TreeNode(1, new TreeNode(1, new TreeNode(1)))));

console.log(minDepth(root));
