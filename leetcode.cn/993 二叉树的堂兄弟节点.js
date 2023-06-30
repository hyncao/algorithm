// 993. 二叉树的堂兄弟节点

// 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

// 如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

// 我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

// 只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。

// 输入：root = [1,2,3,4], x = 4, y = 3
// 输出：false

// 输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
// 输出：true

// 输入：root = [1,2,3,null,4], x = 2, y = 3
// 输出：false

// O(n) O(n)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 83.00% 的用户
// 内存消耗：
// 42.9 MB, 在所有 JavaScript 提交中击败了 44.00% 的用户
const isCousins = (root, x, y) => {
  let arr = [root];
  while (true) {
    let _arr = [];
    let parent;
    for (const i of arr) {
      if (i.left) {
        if (i.left.val === x || i.left.val === y) {
          if (parent) return i !== parent;
          else parent = i;
        }
        _arr.push(i.left);
      }
      if (i.right) {
        if (i.right.val === x || i.right.val === y) {
          if (parent) return i !== parent;
          else parent = i;
        }
        _arr.push(i.right);
      }
    }
    if (parent) return false;
    arr = _arr;
  }
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
  },
  right: {
    val: 3,
    right: {
      val: 5,
    },
  },
};

const x = 4,
  y = 5;

console.log(isCousins(root, x, y));
