// 5402. 绝对差不超过限制的最长连续子数组 medium


//给你一个整数数组 nums ，和一个表示限制的整数 limit，请你返回最长连续子数组的长度，该子数组中的任意两个元素之间的绝对差必须小于或者等于 limit 。
//
// 如果不存在满足条件的子数组，则返回 0 。
//
//  
//
// 示例 1：
//
// 输入：nums = [8,2,4,7], limit = 4
// 输出：2
// 解释：所有子数组如下：
// [8] 最大绝对差 |8-8| = 0 <= 4.
// [8,2] 最大绝对差 |8-2| = 6 > 4.
// [8,2,4] 最大绝对差 |8-2| = 6 > 4.
// [8,2,4,7] 最大绝对差 |8-2| = 6 > 4.
// [2] 最大绝对差 |2-2| = 0 <= 4.
// [2,4] 最大绝对差 |2-4| = 2 <= 4.
// [2,4,7] 最大绝对差 |2-7| = 5 > 4.
// [4] 最大绝对差 |4-4| = 0 <= 4.
// [4,7] 最大绝对差 |4-7| = 3 <= 4.
// [7] 最大绝对差 |7-7| = 0 <= 4.
// 因此，满足题意的最长子数组的长度为 2 。
// 示例 2：
//
// 输入：nums = [10,1,2,4,7,2], limit = 5
// 输出：4
// 解释：满足题意的最长子数组是 [2,4,7,2]，其最大绝对差 |2-7| = 5 <= 5 。
// 示例 3：
//
// 输入：nums = [4,2,2,2,4,4,2,2], limit = 0
// 输出：3
//  
//
// 提示：
//
// 1 <= nums.length <= 10^5
// 1 <= nums[i] <= 10^9
// 0 <= limit <= 10^9


var longestSubarray = function(nums, limit) {

    let cnt = 1;
    let mx = Math.max(...nums)
    let mi = Math.min(...nums)
    if(mx - mi <= limit) return nums.length;
    let max = Number.MIN_SAFE_INTEGER
    let min = Number.MAX_SAFE_INTEGER

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){

            if (nums[j] <= max && nums[j] >= min){
                cnt = Math.max(cnt, j-i+1);
                continue;
            }

            for(let k = i; k <= j; k++){
                if (nums[k] > max){
                    max = nums[k]
                }
                if(nums[k] < min){
                    min = nums[k];
                }
            }
            if ((max - min) <= limit){
                cnt = Math.max(cnt, j - i + 1)
            }else{
                max = Number.MIN_SAFE_INTEGER
                min = Number.MAX_SAFE_INTEGER
                break;
            }
        }
    }
    return cnt;
};

console.log(longestSubarray([8,2,4,7],
    4))

