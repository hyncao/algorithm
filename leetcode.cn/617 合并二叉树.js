// 617. 合并二叉树

// 给你两棵二叉树： root1 和 root2 。

// 想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。

// 返回合并后的二叉树。

// 注意: 合并过程必须从两个树的根节点开始。

// 输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// 输出：[3,4,5,5,4,null,7]

// 输入：root1 = [1], root2 = [1,2]
// 输出：[2,2]

const { array2TreeNode } = require('../lib/utils');

// 执行用时：
// 96 ms, 在所有 JavaScript 提交中击败了 54.02% 的用户
// 内存消耗：
// 47.9 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
const mergeTrees1 = (root1, root2) => {
  if (!root1 && !root2) {
    return null;
  }
  let val = 0;
  if (root1 && root2) {
    val = root1.val + root2.val;
  } else {
    val = (root1 || root2).val;
  }
  const left = mergeTrees1(root1 ? root1.left : null, root2 ? root2.left : null);
  const right = mergeTrees1(root1 ? root1.right : null, root2 ? root2.right : null);
  return {
    val,
    left,
    right,
  };
};

const mergeTrees2 = (root1, root2) => {
  if (!root1) return root2;
  if (!root2) return root1;
  let val = 0;
  if (root1 && root2) {
    val = root1.val + root2.val;
  } else {
    val = (root1 || root2).val;
  }
  const left = mergeTrees2(root1.left, root2.left);
  const right = mergeTrees2(root1.right, root2.right);
  return {
    val,
    left,
    right,
  };
};

const root1 = [],
  root2 = [];

const res = mergeTrees2(array2TreeNode(root1), array2TreeNode(root2));
console.log(res);
