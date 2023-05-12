// 226. 翻转二叉树

// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。（左右镜像翻转）

// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 87.87% 的用户
// 内存消耗：
// 41.3 MB, 在所有 JavaScript 提交中击败了 55.69% 的用户
const invertTree = root => {
  if (root && (root.left || root.right)) {
    const left = root.left;
    root.left = root.right;
    root.right = left;
    invertTree(root.left);
    invertTree(root.right);
  }
  return root;
};

const root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

console.log(invertTree(root));
