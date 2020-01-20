// 1313 easy 解压缩编码列表

// 给你一个以行程长度编码压缩的整数列表 nums 。
// 考虑每相邻两个元素 [a, b] = [nums[2*i], nums[2*i+1]] （其中 i >= 0 ），每一对都表示解压后有 a 个值为 b 的元素。
// 请你返回解压后的列表。
//
//
// 示例：
// 输入：nums = [1,2,3,4]
// 输出：[2,4,4,4]
//  
//
// 提示：
// 2 <= nums.length <= 100
// nums.length % 2 == 0
// 1 <= nums[i] <= 100


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    if(!nums.length) return [];
    let ans = [];
    for(let i = 0; i <= nums.length - 2; i = i + 2){
        for(let j = 0; j < nums[i]; j++){
            ans.push(nums[i+1])
        }
    }
    return ans;
};