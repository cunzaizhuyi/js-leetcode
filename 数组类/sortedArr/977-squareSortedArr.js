// leetcode-977-easy

// 给定一个按非递减顺序排序的整数数组A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
//
// 示例 1：
// 输入：[-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
//
// 示例 2：
// 输入：[-7,-3,2,3,11]
// 输出：[4,9,9,49,121]
//
// 提示：
// 1. 1 <= A.length <= 10000
// 2. -10000 <= A[i] <= 10000
// 3. A 已按非递减顺序排序。

function square(arr) {
    let resultArr = arr.map((val) => {
        return val * val;
    })
    return resultArr.sort((a, b) => {
        return a - b
    })
}

// console.log(square([-4,-1,0,3,10]))
console.log(square([-7,-3,2,3,11]))
