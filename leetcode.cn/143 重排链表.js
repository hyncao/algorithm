// 143. 重排链表

// 给定一个单链表 L 的头节点 head ，单链表 L 表示为：

// L0 → L1 → … → Ln - 1 → Ln
// 请将其重新排列后变为：

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 输入：head = [1,2,3,4]
// 输出：[1,4,2,3]

// 输入：head = [1,2,3,4,5]
// 输出：[1,5,2,4,3]

const reorderList = head => {
  const arr = [];
  let point = head;
  const getArr = head => {
    if (head.next) getArr(head.next);
    arr.push(head);
  };
  getArr(point);
  let flag = true;
  let i = 0;
  const count = arr.length;
  let headPoint = head;
  while (i < count) {
    if (flag) {
      headPoint.next = arr.shift();
    } else {
      headPoint.next = point.next;
      point = point.next;
    }
    flag = !flag;
    headPoint = headPoint.next;
  }
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

reorderList(head);
console.log(JSON.stringify());
console.log(JSON.stringify(head));
