/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
    // const res = Array.from({ length: temperatures.length }, () => 0);
    // let count = 0;
    // for (let i = 0; i < temperatures.length - 1; i++) {
    //     for (let j = i + 1; j < temperatures.length; j++) {
    //         count++;
    //         if (temperatures[j] > temperatures[i]) {
    //             res[i] = count;
    //             count = 0;
    //             break;
    //         } else {
    //             if (j === temperatures.length - 1) {
    //                 res[i] = 0;
    //                 count = 0;
    //             }
    //         }
    //     }
    // }
    // return res;

    const res = Array.from({ length: temperatures.length }, () => 0);
    for (let i = temperatures.length - 2; i >= 0; i--) {
        let point = i + 1;
        while (point < temperatures.length - 1 && temperatures[point] <= temperatures[i]) {
            point++;
        }
        if (point === temperatures.length - 1 && temperatures[point] <= temperatures[i]) {
            res[i] = 0;
        } else {
            res[i] = point - i;
        }
    }
    return res;
}
// @lc code=end

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// [1,1,4,2,1,1,0,0]

// console.log(dailyTemperatures([30, 40, 50, 60]));
// // [1,1,1,0]

// console.log(dailyTemperatures([30, 60, 90]));
// // [1,1,0]
