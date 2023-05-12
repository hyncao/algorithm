// 501. 二叉搜索树中的众数

// 给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。

// 如果树中有不止一个众数，可以按 任意顺序 返回。

// 假定 BST 满足如下定义：

// 结点左子树中所含节点的值 小于等于 当前节点的值
// 结点右子树中所含节点的值 大于等于 当前节点的值
// 左子树和右子树都是二叉搜索树

// 输入：root = [1,null,2,2]
// 输出：[2]

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 中序遍历+哈希表 O(n*log(n))
// 执行用时：
// 668 ms, 在所有 JavaScript 提交中击败了 5.06% 的用户
// 内存消耗：
// 49.8 MB, 在所有 JavaScript 提交中击败了 26.22% 的用户
const findMode1 = root => {
  const map = new Map();
  let count = 0;
  let maxCount = 0;
  let prev = null;
  const fn = root => {
    if (!root) return;
    fn(root.left);

    if (prev !== root.val) {
      count = 1;
      prev = root.val;
    } else {
      count++;
    }
    map.set(count, map.get(count) ? map.get(count).concat(prev) : [prev]);
    maxCount = Math.max(maxCount, count);

    fn(root.right);
  };
  fn(root);
  return map.get(maxCount);
};

// 注意到，方法1中的哈希表好像没啥必要啊，我们一直在监控 maxCount 和 prev, 发现最大值及时更新就好了
// O(n)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 98.58% 的用户
// 内存消耗：
// 47 MB, 在所有 JavaScript 提交中击败了 87.52% 的用户
const findMode2 = root => {
  let res = [];
  let count = 0;
  let maxCount = 0;
  let prev = null;
  const fn = root => {
    if (!root) return;
    fn(root.left);

    if (prev !== root.val) {
      count = 1;
      prev = root.val;
    } else {
      count++;
    }
    if (count === maxCount) {
      res.push(prev);
    }
    if (count > maxCount) {
      maxCount = count;
      res = [prev];
    }

    fn(root.right);
  };
  fn(root);
  return res;
};

const root = new TreeNode(
  1,
  new TreeNode(1, new TreeNode(1)),
  new TreeNode(2, new TreeNode(2, new TreeNode(0), new TreeNode(2)))
);

console.log(findMode2(root));
