/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let lengthCurr = head;
    let length = 0;

    while (lengthCurr) {
        length++;
        lengthCurr = lengthCurr.next;
    }

    const removeIdx = length - n + 1;
    let count = 0;
    const removeFunc = (link: ListNode | null): ListNode | null => {
        count++;
        if (count === removeIdx) {
            link = link!.next;
        } else {
            link!.next = removeFunc(link!.next);
        }
        return link;
    };

    return removeFunc(head);
}
// @lc code=end

console.log(
    removeNthFromEnd(
        {
            val: 1,
            next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } }
        },
        2
    )
);
