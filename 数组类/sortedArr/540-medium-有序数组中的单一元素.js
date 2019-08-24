// 540 medium 有序数组中的单一元素
// 异或解法跟136题一样
//
// 给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。
//
// 示例 1:
// 输入: [1,1,2,3,3,4,4,8,8]
// 输出: 2

// 示例 2:
// 输入: [3,3,7,7,10,11,11]
// 输出: 10
// 注意: 您的方案应该在 O(log n)时间复杂度和 O(1)空间复杂度中运行。

/**
 * 解法1：滑动窗口
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++){
        // 两个边界情况
        if (i === 0 && nums[i]!==nums[i+1])return nums[i];
        if (i === nums.length - 1 && nums[i]!==nums[i-1])return nums[i];

        if (nums[i] !== nums[i+1] && nums[i] !== nums[i-1]){
            return nums[i]
        }
    }

};


/**
 * 解法2：位运算
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate2 = function(nums) {
    let a = nums[0]
    for (let i = 1; i < nums.length; i++){
        a = a ^ nums[i]
    }
    return a;
};