// 589. N 叉树的前序遍历

// 给定一个 n 叉树的根节点  root ，返回 其节点值的 前序遍历 。

// n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。

// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：[1,3,5,6,2,4]

// 输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// 输出：[1,2,3,6,7,11,14,4,8,12,5,9,13,10]

function Node(val, children) {
  this.val = val;
  this.children = children;
}

// 执行用时：
// 88 ms, 在所有 JavaScript 提交中击败了 26.56% 的用户
// 内存消耗：
// 47.6 MB, 在所有 JavaScript 提交中击败了 13.40% 的用户
const preorder = root => {
  const res = [];
  const fn = root => {
    if (!root) return;
    res.push(root.val);
    root.children.forEach(i => fn(i));
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

console.log(preorder(root));
