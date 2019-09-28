// 228 medium 汇总区间

// 给定一个无重复元素的有序整数数组，返回数组区间范围的汇总。
//
// 示例 1:
// 输入: [0,1,2,4,5,7]
// 输出: ["0->2","4->5","7"]
// 解释: 0,1,2 可组成一个连续的区间; 4,5 可组成一个连续的区间。

// 示例 2:
// 输入: [0,2,3,4,6,8,9]
// 输出: ["0","2->4","6","8->9"]
// 解释: 2,3,4 可组成一个连续的区间; 8,9 可组成一个连续的区间。



/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let arr = []
    let l = 0, r = 1;
    while(l < nums.length){
        if(nums[r-1] + 1 !== nums[r]){
            let s = ''
            if(r===l+1){
                s += nums[l]
            }else{
                s += `${nums[l]}->${nums[r-1]}`
            }
            arr.push(s)
            l = r;
            r = r+1;
        } else {
            r++;
        }
    }
    return arr;
};

console.log(summaryRanges( [0,1,2,4,5,7]))
console.log(summaryRanges( [0,2,3,4,6,8,9]))