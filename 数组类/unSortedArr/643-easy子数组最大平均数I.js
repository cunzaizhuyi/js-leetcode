
// 643. 子数组最大平均数I easy

// 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
// 示例 1:
// 输入: [1,12,-5,-6,50,3], k = 4
// 输出: 12.75
// 解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
//
// 注意:
// 1 <= k <= n <= 30,000。
// 所给数据范围 [-10,000，10,000]。



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if(nums.length < k) return 0;
    if(nums.length === k){
        let sum = nums.reduce((p,n) => {
            return p+n
        },0)
        return sum / k;
    }

    let ans = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < nums.length; i++){
        let sub = nums.slice(i, i + k);
        if(sub.length === k){
            let sum = sub.reduce((p,n) => {
                return p+n
            },0)
            let mean = sum / k;
            if(mean > ans){
                ans = mean
            }
        }
    }
    return ans;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))