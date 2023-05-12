// 206. 反转链表

// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 后序递归
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 20.45% 的用户
// 内存消耗：
// 43.2 MB, 在所有 JavaScript 提交中击败了 22.19% 的用户
const reverseList1 = head => {
  if (!head) return null;
  let newList;
  let point;
  const recursion = head => {
    if (head) {
      recursion(head.next);
      newList ? (point = point.next = new ListNode(head.val)) : (newList = point = new ListNode(head.val));
    }
  };
  recursion(head);
  return newList;
};

// 迭代
// 1 => 2 => 3 => null 改为 3 => 2 => 1 => null
// 将当前的 next 指针指向 prev
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 65.38% 的用户
// 内存消耗：
// 42.9 MB, 在所有 JavaScript 提交中击败了 61.74% 的用户
const reverseList2 = head => {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

console.log(reverseList1(head));
