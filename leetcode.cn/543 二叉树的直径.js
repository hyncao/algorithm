// 543. 二叉树的直径

// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。

// 这条路径可能穿过也可能不穿过根结点。

// 输入：[1,2,3,4,5]
// 输出：3

// 输入：[1,2,3,4,5,6,7,8,null,null,null,null,null,null,null,3]
// 输出：6

const { array2TreeNode, TreeNode } = require('../lib/utils');

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 98.59% 的用户
// 内存消耗：
// 44 MB, 在所有 JavaScript 提交中击败了 99.21% 的用户
const diameterOfBinaryTree = root => {
  let max = 0;
  const fn = root => {
    if (!root) return 0;
    const left = fn(root.left);
    const right = fn(root.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  };
  fn(root);
  return max;
};

const root = array2TreeNode([1, 2, 3, 4, 5, 6, 7, 8, null, null, null, null, null, null, null, 3]);

console.log(diameterOfBinaryTree(root));
