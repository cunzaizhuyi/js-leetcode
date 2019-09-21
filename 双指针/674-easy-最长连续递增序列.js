// 674 easy 最长连续递增序列

// 给定一个未经排序的整数数组，找到最长且连续的的递增序列。
//
// 示例 1:
// 输入: [1,3,5,4,7]
// 输出: 3
// 解释: 最长连续递增序列是 [1,3,5], 长度为3。
// 尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开。

// 示例 2:
// 输入: [2,2,2,2,2]
// 输出: 1
// 解释: 最长连续递增序列是 [2], 长度为1。
// 注意：数组长度不会超过10000。


/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(!nums.length) return 0;
    if(nums.length === 1) return 1;
    if(nums.length === 2) return nums[0] < nums[1] ? 2: 1;

    let long = 1;
    let l=0, r=1
    while(r < nums.length){
        if(nums[r] > nums[r-1]){
            if(r - l + 1 > long){
                long = r - l + 1;
            }
            r++;
        }else{
            l = r;
            r++;
        }
    }
    return long;
};

console.log(findLengthOfLCIS([1,3,5,4,7]))
console.log(findLengthOfLCIS([2,2,2,2,2]))