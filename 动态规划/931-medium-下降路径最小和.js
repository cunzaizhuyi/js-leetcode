// 931 medium 下降路径最小和

//给定一个方形整数数组 A，我们想要得到通过 A 的下降路径的最小和。
// 下降路径可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列。
//  
// 示例：
// 输入：[[1,2,3],[4,5,6],[7,8,9]]
// 输出：12
// 解释：
// 可能的下降路径有：
// [1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
// [2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
// [3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]
// 和最小的下降路径是 [1,4,7]，所以答案是 12。
//
//
// 提示：
// 1 <= A.length == A[0].length <= 100
// -100 <= A[i][j] <= 100
//

/**
 * dfs超时
 */
var minFallingPathSum = function(A) {
    if(!A.length)return 0;

    let minSum = Number.MAX_SAFE_INTEGER;
    let dfs = (rowNumber, curCol, tmpSum, arr) => {
        if(rowNumber === arr.length - 1){
            if(tmpSum < minSum){
                minSum = tmpSum;
            }
            return;
        }
        // 下一行
        let s = curCol - 1 >= 0 ? curCol - 1 : 0;
        let w = curCol + 1 > A[0].length - 1 ? A[0].length - 1 : curCol + 1;
        for(let i = s; i <= w; i++){
            dfs(rowNumber+1, i, tmpSum+A[rowNumber+1][i], arr);
        }
    };
    for(let i = 0; i < A[0].length; i++){
        dfs(0, i, A[0][i], A);
    }
    return minSum;
};



// 换用动态规划的方式, 复杂福n*n
var minFallingPathSum2 = (A) => {
    if(!A.length)return 0;

    let dp = [];
    for(let i = 0; i < A.length; i++){
        dp[i] = []
    }
    for(let i = 0; i < A[0].length; i++){
        dp[0][i] = A[0][i];
    }
    // 从第2行开始
    for(let i = 1; i < A.length; i++){
        for(let j = 0; j < A[0].length; j++){
            let l = dp[i-1][j-1] ? dp[i-1][j-1] : Number.MAX_SAFE_INTEGER;
            let r = dp[i-1][j+1] ? dp[i-1][j+1] : Number.MAX_SAFE_INTEGER;
            let v = Math.min(dp[i-1][j], l, r) + A[i][j];
            dp[i][j] = v;
        }
    }
    return Math.min(...dp[dp.length - 1])
}

console.log(minFallingPathSum2([[1,2,3], [4,5,6], [7,8,9]]))