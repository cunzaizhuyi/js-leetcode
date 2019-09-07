// 442 medium 数组中重复的数据

// 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。
// 找到所有出现两次的元素。
// 你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？
//
// 示例：
// 输入:
//     [4,3,2,7,8,2,3,1]
// 输出:
//     [2,3]


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let h = {}
    let arr = []
    for(let i = 0; i < nums.length; i++){
        if(!h[nums[i]]) h[nums[i]] = 1
        else {
            arr.push(nums[i])
        }
    }
    return arr
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]))