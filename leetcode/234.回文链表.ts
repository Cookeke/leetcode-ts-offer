/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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
function isPalindrome(head: ListNode | null): boolean {
    const valArr: number[] = [];
    let pointer = head;
    while (pointer) {
        valArr.push(pointer.val);
        pointer = pointer.next;
    }

    const len = valArr.length;
    for (let i = 0; i <= len / 2; i++) {
        if (valArr[i] !== valArr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
// function isPalindrome(head: ListNode | null): boolean {
//     let middle = head
//     let end = head
// }
// @lc code=end

const param: ListNode = {
    val: 1,
    next: {
        val: 2,
        next: null
    }
};

console.log(isPalindrome(param));
