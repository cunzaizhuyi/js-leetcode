// 258 easy 各位相加

// 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
//
// 示例:
// 输入: 38
// 输出: 2
// 解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。

// 进阶:
// 你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let arr = (num + '').split('')
    if (arr.length === 1) return num;

    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += Number(arr[i])
    }
    return addDigits(sum)
};

console.log(addDigits(38))