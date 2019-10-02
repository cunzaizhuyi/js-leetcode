// 525 medium 连续数组

//给定一个二进制数组, 找到含有相同数量的 0 和 1 的最长连续子数组（的长度）。
//
// 示例 1:
// 输入: [0,1]
// 输出: 2
// 说明: [0, 1] 是具有相同数量0和1的最长连续子数组。
// 示例 2:
// 输入: [0,1,0]
// 输出: 2
// 说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。
// 注意: 给定的二进制数组的长度不会超过50000。


/**
 * 前缀和
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    if(!nums || !nums.length) return 0;
    // 把所有零修改为-1，题目变成求 最长的和为零的一段子数组
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0) nums[i] = -1;
    }

    let len = 0;
    let sum = 0;
    let hash = {};
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]; // 前缀和

        if (sum === 0 && i + 1 > len){
            len = i + 1;
        }
        // 如果前面记录过相同的前缀和，说明从那个记录到当前这段，和为零。
        if (hash[sum] >= 0){
            len = Math.max(len, i - hash[sum]);
        }else{
            hash[sum] = i;
        }
    }
    return len;
};

// console.log(findMaxLength([0,1,0]))
// console.log(findMaxLength([0,1]))
console.log(findMaxLength([0,0,1]))
// console.log(findMaxLength([0,0,1,0,0,0,1,1]))