// 数组中数字出现的次数 56 medium

// 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。
// 请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。
//
// 示例 1：
// 输入：nums = [4,1,4,6]
// 输出：[1,6] 或 [6,1]
// 示例 2：
// 输入：nums = [1,2,10,4,1,4,3,3]
// 输出：[2,10] 或 [10,2]
//  
//
// 限制：
// 2 <= nums <= 10000

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let hash = {};
    for(let i = 0; i < nums.length; i++){
        hash[nums[i]] = ~~(hash[nums[i]]) + 1;
    }
    let result = []
    for(let k in hash){
        if(hash[k] === 1){
            result.push(k)
        }
    }
    return result;
};