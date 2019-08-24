// 219 easy 存在重复元素2

// 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。
//
// 示例 1:
// 输入: nums = [1,2,3,1], k = 3
// 输出: true

// 示例 2:
// 输入: nums = [1,0,1,1], k = 1
// 输出: true

// 示例 3:
// 输入: nums = [1,2,3,1,2,3], k = 2
// 输出: false

/**
 * 暴力法：记下每个字符出现的位置，计算
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let hash = {}
    for(let i = 0; i < nums.length; i++){
        if (!hash[nums[i]]) hash[nums[i]] = [i];
        else {
            hash[nums[i]].push(i)
        }
    }

    for(let key in hash){
        if (hash[key].length > 1){
            for (let i = hash[key].length - 1; i >= 1; i--) {
                if (Number(hash[key][i]) - Number(hash[key][i - 1]) <= k){
                    return true
                }
            }
        }
    }
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3))