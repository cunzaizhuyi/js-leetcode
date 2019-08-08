// 349 easy 两个数组的交集

// 给定两个数组，编写一个函数来计算它们的交集。
//
// 示例 1:
// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2]

// 示例 2:
// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [9,4]

// 说明:
// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1 = [...new Set(nums1)]
    nums2 = [...new Set(nums2)]
    nums1.sort((a, b) => {
        return a-b
    })
    nums2.sort((a, b) => {
        return a-b
    })
    let newArr = []
    let i = 0, j = 0
    while(i !== nums1.length && j !== nums2.length){
        if(nums2[j] === nums1[i]){
            newArr.push(nums1[i])
            i++;j++;
        } else
        // 可以继续往下
        if (nums2[j] < nums1[i]){
            j++;
        }else if (nums2[j] > nums1[i]){
            i++;
        }
    }
    return newArr
};
console.log(intersection([1,2,2,1], [2,2]))