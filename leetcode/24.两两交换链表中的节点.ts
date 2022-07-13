/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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
 */

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head) return null;
    if (!head.next) return head;

    const swap = (link: ListNode | null) => {
        if (!link) return null;
        if (!link.next) return link;

        let temp = link.next.val;
        link.next.val = link.val;
        link.val = temp;

        link.next = new ListNode(link.next.val, swap(link.next.next));
        return link;
    };

    return swap(head);
}
// @lc code=end

console.log(
    swapPairs({
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: null
                }
            }
        }
    })
);
