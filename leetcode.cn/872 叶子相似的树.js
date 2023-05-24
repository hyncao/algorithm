// 872. 叶子相似的树

// 请考虑一棵二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。

// 如果有两棵二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。

// 如果给定的两个根结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。

// 输入：root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// 输出：true

// 输入：root1 = [1,2,3], root2 = [1,3,2]
// 输出：false

const { array2TreeNode } = require('../lib/utils');

// O(n1+n2) O(n1+n2)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 89.06% 的用户
// 内存消耗：
// 44 MB, 在所有 JavaScript 提交中击败了 17.18% 的用户
const leafSimilar = (root1, root2) => {
  const getLeaf = root => {
    const res = [];
    const fn = root => {
      if (root.left === null && root.right === null) {
        res.push(root.val);
      } else {
        root.left && fn(root.left);
        root.right && fn(root.right);
      }
    };
    fn(root);
    return res;
  };
  const leaf1 = getLeaf(root1);
  const leaf2 = getLeaf(root2);
  const len = leaf1.length;
  if (len !== leaf2.length) return false;
  for (let i = 0; i < len; i++) {
    if (leaf1[i] !== leaf2[i]) return false;
  }
  return true;
};

const root1 = [1, 2, 3],
  root2 = [1, 3, 2];

console.log(leafSimilar(array2TreeNode(root1), array2TreeNode(root2)));
