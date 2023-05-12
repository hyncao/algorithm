// 160. 相交链表

// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 分析:
// 先遍历一个链表, 将遍历到的实例增加一个属性做标记
// 再遍历另一个链表, 如果遇到被标记的实例, 则返回
// O(m+n)
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 98.36% 的用户
// 内存消耗：
// 49.4 MB, 在所有 JavaScript 提交中击败了 12.36% 的用户
const getIntersectionNode1 = (headA, headB) => {
  let pointA = headA;
  while (pointA) {
    pointA.flag = true;
    pointA = pointA.next;
  }

  let pointB = headB;
  while (pointB) {
    if (pointB.flag) return pointB;
    pointB = pointB.next;
  }
  return null;
};

// 我走你走过的路, 你走我走过的路, 如果你我有交集我们一定会在未来相遇
// 执行用时：
// 76 ms, 在所有 JavaScript 提交中击败了 94.78% 的用户
// 内存消耗：
// 48.2 MB, 在所有 JavaScript 提交中击败了 77.20% 的用户
const getIntersectionNode2 = (headA, headB) => {
  if (headA === null || headB === null) {
    return null;
  }
  let pointA = headA;
  let pointB = headB;
  while (pointA !== pointB) {
    pointA = pointA ? pointA.next : headB;
    pointB = pointB ? pointB.next : headA;
  }
  return pointA;
};

// const headMerge = new ListNode(2);
const headMerge = null;

const headA = new ListNode(1);
headA.next = new ListNode(1);
headA.next.next = new ListNode(1);
headA.next.next.next = headMerge;

const headB = new ListNode(1);
headB.next = new ListNode(1);
headB.next.next = headMerge;

console.log(getIntersectionNode1(headA, headB));
