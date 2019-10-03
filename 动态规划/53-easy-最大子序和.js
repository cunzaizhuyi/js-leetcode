// 53 easy 最大子序和

// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
//
// 示例:
// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 进阶:
// 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。


// 思路：
// 动态规划，用dp[i]表示以i结尾的最大子序列和。初始值 dp[0] = nums[0]，然后从第二个数开始遍历
// if 当前数加上前一个最大序列和大于当前数，则将当前数加到序列和中，nums[i] + dp[i-1] > nums[i]，则 dp[i] = nums[i] + dp[i-1];
// else 以当前数结尾的最大序列和即为当前数本身 dp[i] = nums[i]
// 然后判断以当前数结尾的最大序列和是否大于最大序列和。
/**
 * 动态规划
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(!nums || !nums.length) return 0;
    let max = nums[0];
    let dp = [nums[0]];
    for(let i = 1; i < nums.length; i++){
        if (nums[i] + dp[i-1] > nums[i]){
            dp[i] = nums[i] + dp[i-1]
        } else {
            dp[i] = nums[i];
        }

        if (dp[i] > max){
            max = dp[i] // 更新最大
        }
    }
    return max;
};