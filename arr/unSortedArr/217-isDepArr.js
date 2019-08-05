//217-easy-存在重复元素

// 给定一个整数数组，判断是否存在重复元素。
// 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
//
// 示例 1:
// 输入: [1,2,3,1]
// 输出: true

// 示例 2:
// 输入: [1,2,3,4]
// 输出: false

// 示例 3:
// 输入: [1,1,1,3,3,4,3,2,4,2]
// 输出: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set(nums)
    return set.size !== nums.length
};

/**
 * 方法2 hashtable
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate2 = function(nums) {
    if (!nums.length)return false
    let hash = {}
    for(let i = 0; i < nums.length; i++){
        if (hash[nums[i]])return true
        hash[nums[i]] = true
    }
    return false
};

console.log(containsDuplicate2([1,2,3,1]))