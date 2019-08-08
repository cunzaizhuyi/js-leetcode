//88 easy 合并两个有序数组

// 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
//
// 说明:
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

// 示例:
// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
// 输出: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m -1, j = n - 1;
    let z = m + n - 1
    while(i !== -1 || j !== -1){
        if (i === -1){
            if (j !== -1){
                for(let k = 0; k <= j; k++){
                    nums1[k] = nums2[k]
                }
                return nums1
            }
        }

        if(j === -1){
            return nums1
        }

        if(nums1[i] > nums2[j]){
            nums1[z] = nums1[i]
            i--;
        } else {
            nums1[z] = nums2[j]
            j--;
        }
        z--;
    }
    return nums1
};

console.log(merge([0],0, [1], 1))
;



