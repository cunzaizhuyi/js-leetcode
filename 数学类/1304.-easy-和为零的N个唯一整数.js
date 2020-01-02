
//1304. 和为零的N个唯一整数 easy

//给你一个整数 n，请你返回 任意 一个由 n 个 各不相同 的整数组成的数组，并且这 n 个数相加和为 0 。
//
// 示例 1：
// 输入：n = 5
// 输出：[-7,-1,1,3,4]
// 解释：这些数组也是正确的 [-5,-1,1,2,3]，[-3,-1,2,-2,4]。
// 示例 2：
// 输入：n = 3
// 输出：[-1,0,1]
// 示例 3：
// 输入：n = 1
// 输出：[0]
//  
// 提示：
// 1 <= n <= 1000
//


/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    // 先来前三种情况，认识一下本策略的规律。
    // 主要是通过相反数来实现。奇偶数差别在于有没有0；
    if (n === 1) return [0];
    if (n === 2) return [1, -1];
    if (n === 3) return [1, 0, -1];

    let result = []
    // 奇数
    if (n % 2 !== 0){
        for(let i = 1; i <= n / 2; i++){
            result.push(i);
            result.push(-i);
        }
        result.push(0); // 跟偶数的区别是多一个0
        return result;
    } else { // 偶数的情况
        for(let i = 1; i <= n / 2; i++){
            result.push(i);
            result.push(-i);
        }
        return result;
    }
};