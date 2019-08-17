// 179 medium 最大数
//
// 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。
//
// 示例 1:
//
// 输入: [10,2]
// 输出: 210
// 示例 2:
//
// 输入: [3,30,34,5,9]
// 输出: 9534330
// 说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。


/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if (nums.every((v) => {
        return v === 0
    })) return 0 + '';

    nums.sort((a, b) => {
        // 先处理一模一样的情况
        if (a === b) return a - b;

        if (Number(a+''+b) > Number(b+''+a)){
            // 让a排在前面
            return a - b ? -1: 1
        }else{
            // b
            return b-a ? 1: -1
        }


    });
    return nums.join('')
};

// console.log(largestNumber([3,30,34,5,9]))

// a < b, 想输出a,b，（zheng序），给负数
// a > b, 想输出a, b, (ni序), 给正数
// a < b，想输出b,a， （ni序），给正数
// a > b, 想输出b,a，（zheng序）,给负数
console.log([2,10].sort((a, b) => {
    if (a - b){
        return -1
    } else {
        return 1
    }
}))