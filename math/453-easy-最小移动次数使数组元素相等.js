// 453 easy

// 给定一个长度为 n 的非空整数数组，找到让数组所有元素相等的最小移动次数。
// 每次移动可以使 n - 1 个元素增加 1。
//
// 示例:
// 输入:
// [1,2,3]
// 输出:
// 3
//
// 解释:
// 只需要3次移动（注意每次移动会增加两个元素的值）：
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    if (new Set(nums).size === 1) return 0;
    let min = Number.MAX_SAFE_INTEGER, sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        if (nums[i] < min) min = nums[i];
    }
    return sum - min * (nums.length)
};

console.log(minMoves([-24797638,490027,33368690,-47479941,-5102237,17513926,15180540,-9616574,-45910828,-46544264]))



