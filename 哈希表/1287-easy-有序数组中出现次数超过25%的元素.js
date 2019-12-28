//1287. 有序数组中出现次数超过25%的元素  easy

// 给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。
// 请你找到并返回这个整数
//
// 示例：
// 输入：arr = [1,2,2,6,6,6,6,7,10]
// 输出：6
//
// 提示：
// 1 <= arr.length <= 10^4
// 0 <= arr[i] <= 10^5

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    // 思路：哈希表统计词频
    let hash = {}
    for(let i = 0; i < arr.length; i++){
        hash[arr[i]] = ~~hash[arr[i]] + 1;
    }

    let len = arr.length * (1/4)
    for(let key in hash){
        if (hash[key] > len){
            return key / 1;
        }
    }
};