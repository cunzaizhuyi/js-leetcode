// 416 medium 分割等和子集

// 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
//
// 注意:
// 每个数组中的元素不会超过 100
// 数组的大小不会超过 200
// 示例 1:
// 输入: [1, 5, 11, 5]
// 输出: true
// 解释: 数组可以分割成 [1, 5, 5] 和 [11].
//  
//
// 示例 2:
// 输入: [1, 2, 3, 5]
// 输出: false
//
// 解释: 数组不能分割成两个元素和相等的子集.
//


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    if(!nums.length) return false;
    if(nums.length === 1) return false;
    let sum = nums.reduce((p, n) => {
        return p + n;
    }, 0);
    if(sum % 2 !== 0) return false;
    
    let half = sum / 2;
    let dp = [];
    dp[0] = true;
    for(let i = 0; i < nums.length; i++){
        for(let j = half; j >= 0; j--){
            if(j >= nums[i]){
                dp[j] = dp[j] || dp[j - nums[i]]
            }
        }
    }
    return !!dp[half]
};
console.log(canPartition([1,2,5]))