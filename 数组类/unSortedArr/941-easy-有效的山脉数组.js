// 941. 有效的山脉数组 easy

// 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。
// 让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：
// A.length >= 3
// 在 0 < i < A.length - 1 条件下，存在 i 使得：
// A[0] < A[1] < ... A[i-1] < A[i]
// A[i] > A[i+1] > ... > A[B.length - 1]
//
// 示例 1：
// 输入：[2,1]
// 输出：false
// 示例 2：
// 输入：[3,5,5]
// 输出：false
// 示例 3：
// 输入：[0,3,2,1]
// 输出：true
//
// 提示：
// 0 <= A.length <= 10000
// 0 <= A[i] <= 10000


/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if(A.length < 3) return false;
    let max = Math.max(...A);
    let maxIndex = A.indexOf(max);
    if(maxIndex===0 || maxIndex === A.length - 1) return false;
    for(let i = 1; i <= maxIndex; i++){
        if(A[i-1] >= A[i]){
            return false
        }
    }
    for(let i = maxIndex + 1; i < A.length; i++){
        if(A[i-1] <= A[i]){
            return false
        }
    }
    return true;
};
console.log(validMountainArray([1,7,9,5,4,1,2]))
console.log(validMountainArray([3,5,5]))
console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]))
