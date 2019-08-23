// medium 209 长度最小子数组

// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。
// 如果不存在符合条件的连续子数组，返回 0。
//
// 示例:
// 输入: s = 7, nums = [2,3,1,2,4,3]
// 输出: 2
// 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
// 进阶:
//     如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if (!nums.length) return 0;
    let sum = nums.reduce((p,n) => {
        return p+n;
    }, 0)
    if (sum < s) return 0;
    
    
    let left = 0, right = 1;
    let minLen = nums.length;
    while(left < nums.length && right <= nums.length){
        // 滑动窗口已经大于等于s，移动左指针
        if (sumFn(nums.slice(left, right)) >= s){
            if (right - left < minLen){
                minLen = right - left;
            }
            left++;
            
            
        }else{ // 滑动窗口还不够大，右指针右移
            right++
        }
    }
    return minLen
};

let sumFn = (arr) => {
    return arr.reduce((p, n) => {
        return p+n;
    }, 0)
}

console.log(minSubArrayLen(7,[2,3,1,2,4,3]))