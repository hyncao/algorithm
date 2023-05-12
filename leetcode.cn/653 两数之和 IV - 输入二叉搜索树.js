// 653. 两数之和 IV - 输入二叉搜索树

// 给定一个二叉搜索树 root 和一个目标结果 k，如果二叉搜索树中存在两个元素且它们的和等于给定的目标结果，则返回 true。

// 输入: root = [5,3,6,2,4,null,7], k = 9
// 输出: true

// 输入: root = [5,3,6,2,4,null,7], k = 28
// 输出: false

const { array2TreeNode } = require('../lib/utils');

// 执行用时：
// 88 ms, 在所有 JavaScript 提交中击败了 62.16% 的用户
// 内存消耗：
// 50.4 MB, 在所有 JavaScript 提交中击败了 62.61% 的用户
const findTarget = (root, k) => {
  const s = new Set();
  const inorder = root => {
    if (root) {
      inorder(root.left);
      s.add(root.val);
      inorder(root.right);
    }
  };
  inorder(root);
  for (const i of s) {
    if (i !== k / 2 && s.has(k - i)) return true;
  }
  return false;
};

const root = [0, -1, 2, -3, null, null, 4],
  k = -4;

console.log(findTarget(array2TreeNode(root), k));
