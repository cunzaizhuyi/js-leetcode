
// 5434. 删掉一个元素以后全为 1 的最长子数组 medium

// 给你一个二进制数组 nums ，你需要从中删掉一个元素。
// 请你在删掉元素的结果数组中，返回最长的且只包含 1 的非空子数组的长度。
// 如果不存在这样的子数组，请返回 0 。
//
//
// 提示 1：
// 输入：nums = [1,1,0,1]
// 输出：3
// 解释：删掉位置 2 的数后，[1,1,1] 包含 3 个 1 。
// 示例 2：
// 输入：nums = [0,1,1,1,0,1,1,0,1]
// 输出：5
// 解释：删掉位置 4 的数字后，[0,1,1,1,1,1,0,1] 的最长全 1 子数组为 [1,1,1,1,1] 。
// 示例 3：
// 输入：nums = [1,1,1]
// 输出：2
// 解释：你必须要删除一个元素。
// 示例 4：
// 输入：nums = [1,1,0,0,1,1,1,0,1]
// 输出：4
// 示例 5：
// 输入：nums = [0,0,0]
// 输出：0
//
// 提示：
// 1 <= nums.length <= 10^5
// nums[i] 要么是 0 要么是 1 。

var longestSubarray = function(nums) {
    if(nums.indexOf(1) === -1) return 0;
    if(nums.indexOf(0) === -1) return nums.length -1;

    let max = 1;
    let _1 = nums.indexOf(1);
    let _0 = nums.indexOf(0, _1);
    if (_0 === -1){
        max = nums.length - _1;
    }else{
        max = _0 - _1;
    }
    let _11 = nums.lastIndexOf(1);
    let _00 = nums.lastIndexOf(0, _11);
    if (_00 === -1){
        max = Math.max(max, _11 + 1)
    }else{
        max = Math.max(max, _11 - _00);
    }
    for(let i = 1; i < nums.length - 1; i++){
        if(nums[i] === 0 && nums[i-1] === 1 && nums[i+1] === 1){
            // pre
            let l = 0;
            let lidx = i - 1
            while(nums[lidx] === 1 && lidx >= 0){
                l++;
                lidx--;
            }
            // next
            let r = 0;
            let ridx = i + 1;
            while(nums[ridx] === 1 && ridx <= nums.length - 1){
                r++;
                ridx++;
            }

            max = Math.max(max, l + r);
        }
    }
    // 有可能是连着的1最长，不需要删
    let l = -1;
    for(let i = 0; i < nums.length; i++){
        if (nums[i] === 0){
            l = -1;
        }else{
            if(l === -1){
                l = i;
            }else{
                max = Math.max(i - l + 1, max);
            }
        }
    }
    return max;
};

// console.log('111: ', longestSubarray([0,0,1,1]))
// console.log('111: ', longestSubarray([1,1,0,0]))
// console.log('111: ', longestSubarray([1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1]))