// 560 medium 和为K的子数组

// 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
//
// 示例 1 :
// 输入:nums = [1,1,1], k = 2
// 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
// 说明 :
// 数组的长度为 [1, 20,000]。
// 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
//



/**
 * 前缀和 哈希表
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let hash = {}
    hash[0] = 1
    let sum = 0
    let res=0
    for(let i = 0; i < nums.length; i++){
        sum+= nums[i]
        res += hash[sum-k] ?hash[sum-k] : 0
        hash[sum] = (~~hash[sum]) + 1
    }
    return res
};

console.log(subarraySum([1,1,1], 2))