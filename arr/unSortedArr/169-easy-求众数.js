// easy 求众数 169

// 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
//
// 你可以假设数组是非空的，并且给定的数组总是存在众数。
//
// 示例 1:
// 输入: [3,2,3]
// 输出: 3

// 示例 2:
// 输入: [2,2,1,1,1,2,2]
// 输出: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = Math.floor(nums.length / 2)
    let hash = {}
    for(let i = 0; i < nums.length; i++){
        if (!hash[nums[i]]) {hash[nums[i]] = 1;}
        else{
            hash[nums[i]]++;
        }
        if (hash[nums[i]] > count){
            return nums[i]
        }
    }
};

console.log(majorityElement([2,2,1,1,1,2,2]))