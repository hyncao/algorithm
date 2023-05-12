// 203. 移除链表元素

// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

// 输入：head = [1,2,6,3,4,5,6], val = 6
// 输出：[1,2,3,4,5]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 开莽
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 83.48% 的用户
// 内存消耗：
// 45.9 MB, 在所有 JavaScript 提交中击败了 20.39% 的用户
const removeElements1 = (head, val) => {
  const node = new ListNode();
  let pointNode = node;
  let pointNodePrev = node;
  let pointHead = head;

  while (pointHead) {
    if (pointHead.val !== val) {
      pointNode.val = pointHead.val;
      pointNode.next = new ListNode();
      pointNodePrev = pointNode;
      pointNode = pointNode.next;
    }
    pointHead = pointHead.next;
  }
  pointNodePrev.next = null;

  return node.val === 0 ? null : node;
};

// 递归
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 93.29% 的用户
// 内存消耗：
// 46.2 MB, 在所有 JavaScript 提交中击败了 7.72% 的用户
const removeElements2 = (head, val) => {
  if (!head) return null;
  head.next = removeElements2(head.next, val);
  return head.val === val ? head.next : head;
};

// const head = new ListNode(
//   1,
//   new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(6, new ListNode(5))))))
// );
// const val = 6;

const head = new ListNode(1, new ListNode(2));
const val = 1;

console.log(removeElements2(head, val));
