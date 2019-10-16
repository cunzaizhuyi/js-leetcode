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
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
    if(!A.length)return 0;

    let minSum = Number.MAX_SAFE_INTEGER;
    let dfs = (rowNumber, curCol, tmpSum, arr) => { // 第二个参数是当前列
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
            if(curCol - 1 <= i && curCol + 1 >= i){
                dfs(rowNumber+1, i, tmpSum+A[rowNumber+1][i], arr);
            }
        }
    };
    for(let i = 0; i < A[0].length; i++){
        dfs(0, i, A[0][i], A);
    }
    return minSum;
};
console.log(minFallingPathSum([[1,2,3], [4,5,6], [7,8,9]]))