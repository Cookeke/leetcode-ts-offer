/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
 */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

// @lc code=start
function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    const reverse = ({ val, left, right }: TreeNode): TreeNode =>
        new TreeNode(val, right && reverse(right), left && reverse(left));
    return reverse(root);
}
// @lc code=end

const testTree = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
};
console.log(invertTree(testTree));
