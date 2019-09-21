// 503 medium 下一个更大元素2
//
// 给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。
// 数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。
// 如果不存在，则输出 -1。
//
// 示例 1:
//
// 输入: [1,2,1]
// 输出: [2,-1,2]
// 解释: 第一个 1 的下一个更大的数是 2；
// 数字 2 找不到下一个更大的数；
// 第二个 1 的下一个最大的数需要循环搜索，结果也是 2。
// 注意: 输入数组的长度不会超过 10000。


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    if (!nums.length) return []
    if (nums.length === 1) return [-1]

    let ans = []
    for(let i = 0; i < nums.length; i++){
        ans[i] = -2;
    }
    let maxIndex = 0;
    let max = nums[0]
    for(let i = 1; i < nums.length; i++){
        if(max <= nums[i]){
            max = nums[i]; maxIndex = i;
        }
    }

    // 最大数部分的数字的next大很好找
    ans[maxIndex] = -1;
    ans[maxIndex - 1] = nums[maxIndex];
    for (let i = maxIndex - 1; i >= 0; i--) {
        if(nums[i] < nums[i+1]){
            ans[i] = nums[i+1]
        } else {
            let flag = false;
            for(let j = i + 1; j < ans.length; j++){
                if(nums[i] < ans[j]){
                    ans[i] = ans[j];
                    flag = true
                    break;
                }
            }
            if(!flag)ans[i] = -1;
        }
    }
    // 最大数后半部分. 拼接 前半部分
    if(maxIndex === nums.length - 1) return ans;
    let len = nums.length;
    let arr = nums.concat(nums.slice(0, maxIndex + 1))
    for (let i = arr.length -1 - (maxIndex + 1); i >= maxIndex + 1; i--) {
        if(arr[i] < arr[i+1]){
            ans[i] = arr[(i+1) % len];
        }else{
            let index = (i+1) % len;
            while(true){
                if(arr[i] < ans[index]){
                    ans[i] = ans[index];
                    break;
                }
                index = (index + 1) % len
            }
        }
    }
    return ans
};

// console.log(nextGreaterElements([1,2,1]))
// console.log(nextGreaterElements([1,5,3,6,8]))
console.log(nextGreaterElements([1,1,1,1,1]))
