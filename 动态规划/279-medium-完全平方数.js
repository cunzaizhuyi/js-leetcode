// 279 medium 完全平方数

//给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
//
// 示例 1:
// 输入: n = 12
// 输出: 3
// 解释: 12 = 4 + 4 + 4.
// 示例 2:
// 输入: n = 13
// 输出: 2
// 解释: 13 = 4 + 9.
//

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // 模拟数组
    let arr = []
    for(let i = 0; i <= n; i++){
        arr.push(0);
    }
    
    let dp = [0]
    
    for(let i = 1; i < arr.length; i++){
        // 初始化为需要 i个1 那么多的完全平方数
        dp[i] = i;
        for(let j = 1; i - j * j >= 0; j++){
            dp[i] = Math.min(dp[i], dp[i - j*j] + 1);
        }
    }
    return dp[n];
};

console.log(numSquares(12));