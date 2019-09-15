// 896 easy 单调数列

// 如果数组是单调递增或单调递减的，那么它是单调的。
// 如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。
// 如果对于所有 i <= j，A[i]> = A[j]，那么数组 A 是单调递减的。
// 当给定的数组 A 是单调数组时返回 true，否则返回 false。
//
// 示例 1：
// 输入：[1,2,2,3]
// 输出：true

// 示例 2：
// 输入：[6,5,4,4]
// 输出：true

// 示例 3：
// 输入：[1,3,2]
// 输出：false

// 示例 4：
// 输入：[1,2,4,5]
// 输出：true

// 示例 5：
// 输入：[1,1,1]
// 输出：true
//
// 提示：
// 1 <= A.length <= 50000
// -100000 <= A[i] <= 100000


/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let isAsc = true;
    let isDesc = true;
    for(let i = 0; i < A.length-1; i++){
        if(A[i] < A[i+1]){
            isDesc = false
        }
        if(A[i] > A[i+1]){
            isAsc = false
        }
    }
    if (isAsc || isDesc) return true 
    else return false
};

console.log(isMonotonic([1,2,2,3]))
console.log(isMonotonic([6,5,4,4]))
console.log(isMonotonic([1,2,4,5]))
console.log(isMonotonic([1,1,1]))