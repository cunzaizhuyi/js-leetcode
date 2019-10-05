// 300 medium 最长上升子序列

// 给定一个无序的整数数组，找到其中最长上升子序列的长度。
//
// 示例:
// 输入: [10,9,2,5,3,7,101,18]
// 输出: 4
// 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
// 说明:
// 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
// 你算法的时间复杂度应该为 O(n2) 。
// 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(!nums.length) return 0;
    if(!nums.length === 1)return 1;

    // 初始化为1，默认都是单个独立上升子序列
    let dp = []
    for(let i = 0; i < nums.length; i++){
        dp[i] = 1;
    }
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))