// 21. 合并两个有序链表

// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// 开莽 O(m+n) 略有点蠢, 不够优雅
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 83.00% 的用户
// 内存消耗：
// 43.1 MB, 在所有 JavaScript 提交中击败了 67.98% 的用户
const mergeTwoLists = (list1, list2) => {
  const res = new ListNode();
  const merge = (l1, l2, prev) => {
    if (l1 === l2 && l1 === null) return;
    const flag = l1 === null || (l2 && l1.val > l2.val);
    prev.next = new ListNode((flag ? l2 : l1).val);
    merge(flag ? l1 : l1.next, flag ? l2.next : l2, prev.next);
  };
  merge(list1, list2, res);
  return res.next;
};

// 最优雅的方式, 真正的递归
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 93.27% 的用户
// 内存消耗：
// 43.5 MB, 在所有 JavaScript 提交中击败了 19.34% 的用户
const mergeTwoLists1 = (list1, list2) => {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists1(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists1(list1, list2.next);
    return list2;
  }
};

var list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
var list2 = new ListNode(1, new ListNode(3));
// var list1 = new ListNode();
// var list2 = new ListNode(0);

console.log(mergeTwoLists1(list1, list2));
