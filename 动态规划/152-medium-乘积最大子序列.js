// 152 medium 乘积最大子序列

// 给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。
//
// 示例 1:
// 输入: [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。
// 示例 2:
// 输入: [-2,0,-1]
// 输出: 0
// 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(!nums.length)return 0;

    let dp = [nums[0]];
    let curMax = nums[0];
    let curMin = nums[0];
    for(let i = 1; i < nums.length; i++){
        let tmp = curMax;
        curMax = Math.max(Math.max(nums[i] * curMax, nums[i] * curMin), nums[i]);
        curMin = Math.min(Math.min(nums[i] * tmp, nums[i] * curMin), nums[i]);
        dp[i] = Math.max(curMax, dp[i-1]);
    }
    return dp[dp.length - 1]
};
// console.log(maxProduct([2,3,-2,4]))
console.log(maxProduct([-2,3,-4]))