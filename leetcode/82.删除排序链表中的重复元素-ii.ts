/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    const hashMap = {};

    let idx = 0;
    let mapLink = head;
    while (mapLink) {
        if (!hashMap[mapLink.val]) {
            hashMap[mapLink.val] = [idx];
        } else {
            hashMap[mapLink.val].push(idx);
        }
        idx++;
        mapLink = mapLink.next;
    }

    const idxRemain = {};
    Object.keys(hashMap).forEach(key => {
        if (hashMap[key].length === 1) {
            idxRemain[hashMap[key]] = true;
        }
    });

    let count = -1;
    const deleteLink = (link: ListNode | null) => {
        count++;

        if (!link) return null;
        if (!idxRemain[count]) return deleteLink(link.next);

        link.next = deleteLink(link.next);
        return link;
    };

    return deleteLink(head);
}
// @lc code=end
