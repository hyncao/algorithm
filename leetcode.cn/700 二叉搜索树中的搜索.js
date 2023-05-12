// 700. 二叉搜索树中的搜索

// 给定二叉搜索树（BST）的根节点 root 和一个整数值 val。

// 你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 null 。

// 输入：root = [4,2,7,1,3], val = 2
// 输出：[2,1,3]

// 输入：root = [4,2,7,1,3], val = 5
// 输出：[]

// 注：中序遍历二叉搜索树即为増序排列，左树所有值都小于当前值，右树所有值都大于当前值

const { array2TreeNode } = require('../lib/utils');

// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 85.60% 的用户
// 内存消耗：
// 48.3 MB, 在所有 JavaScript 提交中击败了 76.27% 的用户
const searchBST1 = (root, val) => {
  let res = null;
  let flag = true;
  const fn = root => {
    if (!root) return;
    fn(root.left);
    if (!flag) return;
    if (root.val === val) {
      res = root;
      flag = false;
      return;
    }
    if (root.val > val) {
      res = null;
      flag = false;
      return;
    }
    fn(root.right);
  };
  fn(root);
  return res;
};

//
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 93.74% 的用户
// 内存消耗：
// 48.5 MB, 在所有 JavaScript 提交中击败了 8.94% 的用户
const searchBST2 = (root, val) => {
  if (!root) return null;
  if (root.val === val) return root;
  return searchBST2(root.val > val ? root.left : root.right, val);
};

// 迭代
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 93.74% 的用户
// 内存消耗：
// 48.5 MB, 在所有 JavaScript 提交中击败了 25.12% 的用户
const searchBST3 = (root, val) => {
  while (root) {
    if (root.val === val) return root;
    root = root.val > val ? root.left : root.right;
  }
  return null;
};

const root = [],
  val = 5;

console.log(JSON.stringify(searchBST3(array2TreeNode(root), val)));
