
// 5445. 子数组和排序后的区间和 medium

//给你一个数组 nums ，它包含 n 个正整数。你需要计算所有非空连续子数组的和，并将它们按升序排序，得到一个新的包含 n * (n + 1) / 2 个数字的数组。
//
// 请你返回在新数组中下标为 left 到 right （下标从 1 开始）的所有数字和（包括左右端点）。由于答案可能很大，请你将它对 10^9 + 7 取模后返回。
//
//  
//
// 示例 1：
//
// 输入：nums = [1,2,3,4], n = 4, left = 1, right = 5
// 输出：13
// 解释：所有的子数组和为 1, 3, 6, 10, 2, 5, 9, 3, 7, 4 。将它们升序排序后，我们得到新的数组 [1, 2, 3, 3, 4, 5, 6, 7, 9, 10] 。下标从 le = 1 到 ri = 5 的和为 1 + 2 + 3 + 3 + 4 = 13 。
// 示例 2：
//
// 输入：nums = [1,2,3,4], n = 4, left = 3, right = 4
// 输出：6
// 解释：给定数组与示例 1 一样，所以新数组为 [1, 2, 3, 3, 4, 5, 6, 7, 9, 10] 。下标从 le = 3 到 ri = 4 的和为 3 + 3 = 6 。
// 示例 3：
//
// 输入：nums = [1,2,3,4], n = 4, left = 1, right = 10
// 输出：50
//  
//
// 提示：
// 1 <= nums.length <= 10^3
// nums.length == n
// 1 <= nums[i] <= 100
// 1 <= left <= right <= n * (n + 1) / 2

var rangeSum = function(nums, n, left, right) {
    let arr = []
    for(let i = 0; i < nums.length; i++){
        let sum = nums[i];
        arr.push(sum);
        for(let j = i; j < nums.length; j++){
            sum += nums[j];
            arr.push(sum);
        }
    }
    arr.sort((a, b) => {
        return a - b;
    })
    console.log('111: ', arr)
    let res = 0
    for(let i = left; i <= right; i++){
        res += arr[i];
    }
    return res;
};
console.log('111: ', rangeSum([1,2,3,4]))