// 221 medium 最大正方形

// 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
//
// 示例:
// 输入:
// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0
//
// 输出: 4

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(!matrix.length)return 0;
    let rowNumber = matrix.length;
    let colNumber = matrix[0].length;
    
    // 初始化dp。都为0；
    // dp[i][j]代表有i,j这个单元格参与的，最大正方形边长。
    let dp = [];
    for(let i = 0; i < rowNumber; i++){
        for(let j = 0; j < colNumber; j++){
            if (!dp[i]) {
                dp[i] = []
            }
            dp[i][j] = 0;
        }
    }
    

    let max = 0;
    for(let i = 0; i < rowNumber; i++){
        for(let j = 0; j < colNumber; j++){
            // 只关心为1的元素
            if(matrix[i][j] === '1'){
                let a = dp[i-1] ? dp[i-1][j]: 0;
                let b = dp[i-1] && dp[i-1][j-1]>=0 ? dp[i-1][j-1]: 0;
                let c = dp[i][j-1]>=0 ? dp[i][j-1]: 0;
                dp[i][j] = Math.min(a, b, c) + 1;
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    return max * max;
};
console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]))