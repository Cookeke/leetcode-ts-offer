/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
    const quickSort = (numArr: number[]): number[] => {
        if (numArr.length <= 1) return numArr;

        const middleNum = numArr[0];
        let leftStr = "";
        let rightStr = "";

        for (let i = 1; i < numArr.length; i++) {
            if (numArr[i] < middleNum) {
                leftStr += numArr[i] + ",";
            }
            if (numArr[i] >= middleNum) {
                rightStr += "," + numArr[i];
            }
        }

        const leftArr = leftStr
            ? leftStr
                  .slice(0, leftStr.length - 1)
                  .split(",")
                  .map(Number)
            : [];
        const rightArr = rightStr ? rightStr.slice(1).split(",").map(Number) : [];

        return [...quickSort(leftArr), middleNum, ...quickSort(rightArr)];
    };

    const sortArr = quickSort(nums);
    return sortArr[nums.length - k];
}
// @lc code=end

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4
