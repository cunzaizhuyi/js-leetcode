
// 16.17. 连续数列 easy

// 给定一个整数数组，找出总和最大的连续数列，并返回总和。
//
// 示例：
// 输入： [-2,1,-3,4,-1,2,1,-5,4]
// 输出： 6
// 解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 进阶：
// 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums.length) return 0;
    let l = 0, r = 0; // 双指针
    let max = nums[0];
    let cur = max;
    while(l <= r && r <= nums.length - 1){
        if (cur <= 0){
            r++;
            l = r;
            max = Math.max(cur, max);
            cur = nums[r];
        }else{
            r++;
            max = Math.max(cur, max);
            cur += nums[r]
        }
    }
    return max;
};

// console.log('111: ', maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))