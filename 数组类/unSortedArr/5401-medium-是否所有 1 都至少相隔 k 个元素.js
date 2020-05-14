// 5401. 是否所有 1 都至少相隔 k 个元素 medium

//给你一个由若干 0 和 1 组成的数组 nums 以及整数 k。如果所有 1 都至少相隔 k 个元素，则返回 True ；否则，返回 False 。
//
//
// 示例 1：
// 输入：nums = [1,0,0,0,1,0,0,1], k = 2
// 输出：true
// 解释：每个 1 都至少相隔 2 个元素。
// 示例 2：
// 输入：nums = [1,0,0,1,0,1], k = 2
// 输出：false
// 解释：第二个 1 和第三个 1 之间只隔了 1 个元素。
// 示例 3：
// 输入：nums = [1,1,1,1,1], k = 0
// 输出：true
// 示例 4：
// 输入：nums = [0,1,0,1], k = 1
// 输出：true
//  
//
// 提示：
//
// 1 <= nums.length <= 10^5
// 0 <= k <= nums.length
// nums[i] 的值为 0 或 1

var kLengthApart = function(nums, k) {
    if(k === 0) return true;

    // 没有1
    let l = nums.lastIndexOf(1);
    if (l === -1) return true;

    let f = 0; //记住上一次比较的两个1中后一个的索引
    while(1){
        let s = nums.indexOf(1, f);
        let e = nums.indexOf(1, s + 1);
        if (e === -1) break;
        if (e - s - 1 < k){
            return false
        }
        f = e;
        if(e === l)break;
    }
    if (l !== f && l - f - 1 < k) return false;
    return true;
};

// console.log(kLengthApart([1,0,0,0],1))
