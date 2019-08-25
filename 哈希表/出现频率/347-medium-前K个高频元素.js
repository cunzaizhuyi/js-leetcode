// easy medium 前K个高频元素


// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
//
// 示例 1:
// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]

// 示例 2:
// 输入: nums = [1], k = 1
// 输出: [1]

// 说明：
// 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
// 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let h = {}
    for(let i = 0; i < nums.length; i++){
        if (!h[nums[i]]) {
            h[nums[i]] = 1
        } else {
            h[nums[i]]++;
        }
    }

    // 构造二维数组
    let arr = []
    for(let key in h){
        let a = new Array(h[key])
        a.fill(key)
        arr.push(a);
    }

    // 排序
    arr.sort((a, b) => {
        return a.length > b.length ? -1: 1
    })

    let resultArr = []
    for(let i = 0; i < k; i++){
        resultArr.push(arr[i][0])
    }
    return resultArr
};