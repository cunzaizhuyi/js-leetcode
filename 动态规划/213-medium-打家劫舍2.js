// 213 medium 打家劫舍2

// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。
// 这个地方所有的房屋都围成一圈，这意味着第一个房屋和最后一个房屋是紧挨着的。
// 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
// 
// 示例 1:
// 输入: [2,3,2]
// 输出: 3
// 解释: 你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
// 示例 2:
// 输入: [1,2,3,1]
// 输出: 4
// 解释: 你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
//      偷窃到的最高金额 = 1 + 3 = 4 。


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(!nums.length) return 0;
    if(nums.length === 1)return nums[0];
    if(nums.length <= 3) return Math.max(...nums);

    let arr1 = nums.slice(0, nums.length - 1)
    let arr2 = nums.slice(1);


    // 这个函数是 198 题解
    var rob1 = function(nums) { // 外层调用保证了nums长度至少为3
        // 方程 f(i) = Math.max(f(i-1), f(i-1)+nums[i])
        let prepre = nums[0];
        let pre = Math.max(nums[0], nums[1]);
        for(let i = 2; i < nums.length; i++){
            let cur = Math.max(pre, prepre + nums[i]);
            prepre = pre;
            pre = cur;
        }
        return pre;
    };
    
    return Math.max(rob1(arr1), rob1(arr2))
};

console.log(rob([1,2,3,1]))