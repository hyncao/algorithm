// 257. 二叉树的所有路径

// 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

// 叶子节点 是指没有子节点的节点。

// 输入：root = [1,2,3,null,5]
// 输出：["1->2->5","1->3"]

// 输入：root = [1]
// 输出：["1"]

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 64.15% 的用户
// 内存消耗：
// 42.6 MB, 在所有 JavaScript 提交中击败了 58.02% 的用户
const binaryTreePaths = root => {
  const res = [];
  const fn = (root, prev = '') => {
    if (!root.left && !root.right) {
      res.push(`${prev ? `${prev}->${root.val}` : root.val}`);
    } else {
      prev ? (prev += `->${root.val}`) : (prev = root.val);
      root.left && fn(root.left, prev);
      root.right && fn(root.right, prev);
    }
  };
  fn(root);
  return res;
};

const root = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3));
// const root = new TreeNode(1)

console.log(binaryTreePaths(root));
