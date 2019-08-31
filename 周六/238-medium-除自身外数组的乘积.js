// 238 medium 除自身外数组的乘积

// 给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，
// 其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
//
// 示例:
// 输入: [1,2,3,4]
// 输出: [24,12,8,6]
// 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
//
// 进阶：
// 你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）


/**
 * 题解基本都一样，左边乘积 * 右边乘积
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = []
    
    let cur = 1
    result[0] = 1;
    for(let i = 1; i < nums.length; i++){
        cur *= nums[i - 1]
        result[i] = cur;
    }
    
    cur = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        cur *= nums[i + 1]
        result[i] *= cur
    }
    return result
};

console.log(productExceptSelf([1,2,3,4]))