/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let list: ListNode | null = null;
    let current: ListNode | null = head;

    while (current) {
        const next = current.next;
        current.next = list;
        list = current;
        current = next;
    }

    return list;
}
// @lc code=end

console.log(
    reverseList({
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: null
            }
        }
    })
);
