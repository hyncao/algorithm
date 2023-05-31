// 1110. 删点成林

// TODO

// 给出二叉树的根节点 root，树上每个节点都有一个不同的值。

// 如果节点值在 to_delete 中出现，我们就把该节点从树上删去，最后得到一个森林（一些不相交的树构成的集合）。

// 返回森林中的每棵树。你可以按任意顺序组织答案。

// 输入：root = [1,2,3,4,5,6,7], to_delete = [3,5]
// 输出：[[1,2,null,4],[6],[7]]

// 输入：root = [1,2,4,null,3], to_delete = [3]
// 输出：[[1,2,4]]

// 递归
const delNodes = (root, to_delete) => {
  const res = [root];
  const fn = (currentTree, deleteVal, tree = {}, list = []) => {
    if (currentTree.val === deleteVal) {
      if (currentTree.left) list.push(currentTree.left);
      if (currentTree.right) list.push(currentTree.right);
      currentTree = null;
      list.push(tree);
      return list;
    } else {
      tree.val = currentTree.val;
      tree.left = currentTree.left ? fn(currentTree.left, deleteVal, tree, list) : null;
      tree.right = currentTree.right ? fn(currentTree.right, deleteVal, tree, list) : null;
      return tree;
    }
  };
  const a = fn(root, to_delete[0]);
  console.log(a);
  // while (to_delete.length > 0) {
  //   for (let i = 0; i < res.length; i++) {

  //   }
  // }
};

const root = [1, 2, 3, 4, 5, 6, 7],
  to_delete = [3, 5];

const { array2TreeNode } = require('../lib/utils');

console.log(delNodes(array2TreeNode(root), to_delete));
