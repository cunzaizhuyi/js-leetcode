// 1726. 同积元组 medium

//给你一个由 不同 正整数组成的数组 nums ，请你返回满足 a * b = c * d 的元组 (a, b, c, d) 的数量。其中 a、b、c 和 d 都是 nums 中的元素，且 a != b != c != d 。
//
//  
//
// 示例 1：
//
// 输入：nums = [2,3,4,6]
// 输出：8
// 解释：存在 8 个满足题意的元组：
// (2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)
// (3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2)
// 示例 2：
//
// 输入：nums = [1,2,4,5,10]
// 输出：16
// 解释：存在 16 个满足题意的元组：
// (1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)
// (2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)
// (2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,4,5)
// (4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)
// 示例 3：
//
// 输入：nums = [2,3,4,6,8,12]
// 输出：40
// 示例 4：
//
// 输入：nums = [2,3,5,7]
// 输出：0
//  
//
// 提示：
//
// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 104
// nums 中的所有元素 互不相同
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/tuple-with-same-product
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    let h = {};
    let res = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if (h[nums[i] * nums[j]]) {
                if (h[nums[i] * nums[j]] === 1) {
                    res += 8;
                } else {
                    res += 8 * (h[nums[i] * nums[j]]);
                }
                h[nums[i] * nums[j]]++;
            } else {
                h[nums[i] * nums[j]] = 1;
            }
        }
    }
    return res;
};

// console.log('111: ', tupleSameProduct([2,3,4,6]))
// console.log('111: ', tupleSameProduct([1,2,4,5,10]))
// console.log('111: ', tupleSameProduct([2,3,4,6,8,12]))
// console.log('111: ', tupleSameProduct([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192]))
