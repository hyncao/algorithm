// 590. N 叉树的后序遍历

// 给定一个 n 叉树的根节点 root ，返回 其节点值的 后序遍历 。

// n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。

// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：[5,6,3,2,4,1]

// 输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// 输出：[2,6,14,11,7,3,12,8,4,13,9,10,5,1]

function Node(val, children) {
  this.val = val;
  this.children = children;
}

// 执行用时：
// 88 ms, 在所有 JavaScript 提交中击败了 26.56% 的用户
// 内存消耗：
// 47.6 MB, 在所有 JavaScript 提交中击败了 13.40% 的用户
const postorder = root => {
  const res = [];
  const fn = root => {
    if (!root) return;
    root.children.forEach(i => fn(i));
    res.push(root.val);
  };
  fn(root);
  return res;
};

const root = {
  val: 1,
  children: [
    { val: 2, children: [] },
    {
      val: 3,
      children: [
        { val: 6, children: [] },
        { val: 7, children: [{ val: 11, children: [{ val: 14, children: [] }] }] },
      ],
    },
    { val: 4, children: [{ val: 8, children: [{ val: 12, children: [] }] }] },
    {
      val: 5,
      children: [
        { val: 9, children: [{ val: 13, children: [] }] },
        { val: 10, children: [] },
      ],
    },
  ],
};

console.log(postorder(root));
