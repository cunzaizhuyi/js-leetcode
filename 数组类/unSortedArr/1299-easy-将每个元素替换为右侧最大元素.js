// 1299. easy 将每个元素替换为右侧最大元素

//
// 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。
// 完成所有替换操作后，请你返回这个数组。
//
// 示例：
//
// 输入：arr = [17,18,5,4,6,1]
// 输出：[18,6,6,6,1,-1]
//
// 提示：
// 1 <= arr.length <= 10^4
// 1 <= arr[i] <= 10^5


/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(nums) {
    if (!nums.length) return [];
    let dp = [];
    for (let i = nums.length - 1; i >= 0; i--){
        if (i === nums.length - 1) {
            dp[i] = -1;
        } else if (i === nums.length - 2){
            dp[i] = nums[nums.length - 1];
        } else {
            dp[i] = Math.max(nums[i + 1], dp[i + 1])
        }
    }
    return dp;
};