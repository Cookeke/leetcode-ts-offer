/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    let length = 0;
    let lenHead = head;
    while (lenHead) {
        length++;
        lenHead = lenHead.next;
    }

    const moveStep = k % length;
    if (moveStep === 0) return head;

    let restHead: ListNode | null = null;
    let count = 0;

    const cutLink = (link: ListNode | null) => {
        if (!link) return null;

        count++;
        if (count === length - moveStep) {
            restHead = link.next;
            link.next = null;
            return link;
        } else {
            link.next = cutLink(link.next);
            return link;
        }
    };

    const nextLink = cutLink(head);
    const mergeLink = (restHead: ListNode | null) => {
        if (!restHead) return nextLink;

        restHead.next = mergeLink(restHead.next);
        return restHead;
    };

    return mergeLink(restHead);
}
// @lc code=end
console.log(
    rotateRight(
        {
            val: 0,
            next: {
                val: 1,
                next: {
                    val: 2,
                    next: null
                }
            }
        },
        4
    )
); // [2,0,1]

console.log(
    rotateRight(
        {
            val: 1,
            next: {
                val: 2,
                next: null
            }
        },
        1
    )
); // [2,1]
