// 665 easy 非递减数列

// 给定一个长度为 n 的整数数组，你的任务是判断在最多改变 1 个元素的情况下，该数组能否变成一个非递减数列。
// 我们是这样定义一个非递减数列的： 对于数组中所有的 i (1 <= i < n)，满足 array[i] <= array[i + 1]。
//
// 示例 1:
// 输入: [4,2,3]
// 输出: True
// 解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。

// 示例 2:
// 输入: [4,2,1]
// 输出: False
// 解释: 你不能在只改变一个元素的情况下将其变为非递减数列。
// 说明:  n 的范围为 [1, 10,000]。

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkPossibility = function(arr) {
    if (arr.length <= 2) return true;
    let count = 0;
    let index;
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] > arr[i+1]){
            count++;
            index = i;
        }
    }
    if (count === 0) return true; // 不太可能
    if (count > 1) return false;
    // 等于1 的情况下, 分为边界上断掉，和中间部分断掉两种情况
    if (index === 0 || index === arr.length - 2) return true;
    if (arr[index] <= arr[index + 2] || arr[index - 1] <= arr[index + 1]){
        return true;
    } else {
        return false;
    }
};

// console.log(checkPossibility([3,4,2,3]))
console.log(checkPossibility([4,2,3]))


// console.log(sortEn(arr11))
// [4,1,2,3] 两头必然为true
// [3,14,16,1,5] false
// [1,4,1,4] true