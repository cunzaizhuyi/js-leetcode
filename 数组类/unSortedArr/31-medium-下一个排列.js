// medium 31 下一个排列

// 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
//
// 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
//
// 必须原地修改，只允许使用额外常数空间。
//
// 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length <= 1) return nums;
    
    let isMax = true
    for(let i = 0; i < nums.length - 1; i++){
        if (nums[i] < nums[i+1]){
            isMax = false
        }
    }
    if (isMax) return nums.reverse();
    
    // 非最大排列
    for (let i = nums.length - 1; i >= 1; i--) {
        if (nums[i] > nums[i - 1]){
            // 找到要跟i-1交换的那一位
            for(let j = nums.length - 1; j >= i; j--){
                if (nums[j] > nums[i - 1]){
                    [nums[i-1], nums[j]] = [nums[j], nums[i-1]]
                    break;
                }
            }
            // i - 1后面的位，用最小排列
            let min = nums.slice(i).reverse()
            nums.splice(i, nums.length - i, ...min)
            break;
        }
    }
    return nums;
};

// console.log(nextPermutation([1,2,3]))
// console.log(nextPermutation([3,2,1]))
// console.log(nextPermutation([1,1,5]))
console.log(nextPermutation([1,3,2]))
console.log(nextPermutation([5,0,3,2,1]))