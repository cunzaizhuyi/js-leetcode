// 414. 第三大的数 easy

// 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。
//
// 示例 1:
// 输入: [3, 2, 1]
// 输出: 1
// 解释: 第三大的数是 1.

// 示例 2:
// 输入: [1, 2]
// 输出: 2
// 解释: 第三大的数不存在, 所以返回最大的数 2 .

// 示例 3:
// 输入: [2, 2, 3, 1]
// 输出: 1
// 解释: 注意，要求返回第三大的数，是指第三大且唯一出现的数。
// 存在两个值为2的数，它们都排第二。


/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if(nums.length === 1)return nums[0]
    if(nums.length === 2)return Math.max(...nums);
    if (new Set(nums).size < 3) {
        return Math.max(...nums);
    }
    let numsCopy = Array.from(new Set(nums))
    let arr = [numsCopy[0], numsCopy[1], numsCopy[2]]
    arr.sort((a, b) => {
        return a - b
    });
    for(let i = 3; i < numsCopy.length; i++){
        if(numsCopy[i] > arr[0]){
            arr.shift();
            arr.push(numsCopy[i]);
            arr.sort((a, b) => {
                return a - b
            })
        }
    }

    return arr[0]
};

console.log(thirdMax([1,2,2,5,3,5]))