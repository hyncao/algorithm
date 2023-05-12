// 141. 环形链表

// 给你一个链表的头节点 head ，判断链表中是否有环。

// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。

// 如果链表中存在环 ，则返回 true 。 否则，返回 false 。

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 87.27% 的用户
// 内存消耗：
// 45.6 MB, 在所有 JavaScript 提交中击败了 5.11% 的用户
const hasCycle1 = head => {
  if (!head) return false;
  const hashMap = new Map();
  let prev = head;
  while (hashMap.get(prev.next) === undefined) {
    if (prev.next === null) {
      return false;
    }
    hashMap.set(prev.next, 1);
    prev = prev.next;
  }
  return true;
};

// 快慢指针
// 将一个有环的链表问题看做操场跑圈
// 快指针跑的快, 一次跑两个 next;
// 满指针跑的慢, 一次跑一个 next;
// 就这么一直跑下去, 两个指针早晚有一天会撞上
// 如果快指针遇到了 null, 说明到头了, 不存在环
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 95.49% 的用户
// 内存消耗：
// 43.6 MB, 在所有 JavaScript 提交中击败了 70.90% 的用户
const hasCycle2 = head => {
  if (head == null) return false;
  let head1 = head;
  let head2 = head;
  while (head2 && head2.next) {
    head1 = head1.next;
    head2 = head2.next.next;
    if (head1 === head2) {
      return true;
    }
  }
  return false;
};

const head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(1);
// head.next.next = head.next;

console.log(hasCycle2(head));
