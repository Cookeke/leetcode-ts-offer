/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head = new ListNode();
  let pointer: ListNode = head;
  let addTen = false;

  while (l1 || l2) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
    if (addTen) {
      sum += 1;
      addTen = false;
    }

    if (String(sum).length > 1) {
      pointer.val = Number(String(sum).slice(-1));
      addTen = true;
    } else {
      pointer.val = sum;
    }

    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);

    if (l1 || l2) {
      pointer.next = new ListNode();
      pointer = pointer.next;
    }
  }

  if (addTen) pointer.next = new ListNode(1);
  return head;
}
// @lc code=end

const ll1 = {
  val: 2,
  next: { val: 4, next: { val: 3, next: null } }
};

const ll2 = {
  val: 5,
  next: { val: 6, next: { val: 4, next: { val: 2, next: null } } }
};

console.log(addTwoNumbers(ll1, ll2)!.next);
