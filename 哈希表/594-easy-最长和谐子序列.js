// 594 easy 最长和谐子序列

// 和谐数组是指一个数组里元素的最大值和最小值之间的差别正好是1。
// 现在，给定一个整数数组，你需要在所有可能的子序列中找到最长的和谐子序列的长度。
//
// 示例 1:
// 输入: [1,3,2,2,5,2,3,7]
// 输出: 5
// 原因: 最长的和谐数组是：[3,2,2,2,3].
// 说明: 输入的数组长度最大不超过20,000.



/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let h = {}
    for(let i = 0; i < nums.length; i++){
        if (!h[nums[i]]){
            h[nums[i]] = 1
        }else{
            h[nums[i]]++
        }
    }
    
    let result = 0;
    for(let key in h){
        if (h[Number(key) + 1 + '']){
            result = Math.max(result, h[key] + h[Number(key) + 1 + ''])
        }
    }
    return result
};

console.log(findLHS([1,3,2,2,5,2,3,7]))