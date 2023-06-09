// 897. 递增顺序搜索树

// 给你一棵二叉搜索树的 root ，请你 按中序遍历 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。

// 输入：root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// 输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

// 输入：root = [5,1,7]
// 输出：[1,null,5,null,7]

// O(n) O(1);
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 75.90% 的用户
// 内存消耗：
// 41.4 MB, 在所有 JavaScript 提交中击败了 90.36% 的用户
const increasingBST = root => {
  const node = {};
  let point = node;
  let prev = null;
  const fn = root => {
    if (root) {
      fn(root.left);
      point.val = root.val;
      point.left = null;
      point.right = {};
      prev = point;
      point = point.right;
      fn(root.right);
    }
  };
  fn(root);
  prev.right = null;
  return node;
};

const root = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 6,
    left: null,
    right: {
      val: 8,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 9,
        left: null,
        right: null,
      },
    },
  },
};

console.log(JSON.stringify(increasingBST(root)));
