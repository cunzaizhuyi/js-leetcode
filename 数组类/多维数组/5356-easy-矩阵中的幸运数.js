// 5356 easy 矩阵中的幸运数

// 给你一个 m * n 的矩阵，矩阵中的数字 各不相同 。请你按 任意 顺序返回矩阵中的所有幸运数。
// 幸运数是指矩阵中满足同时下列两个条件的元素：
// 在同一行的所有元素中最小
// 在同一列的所有元素中最大
//  
//
// 示例 1：
// 输入：matrix = [[3,7,8],[9,11,13],[15,16,17]]
// 输出：[15]
// 解释：15 是唯一的幸运数，因为它是其所在行中的最小值，也是所在列中的最大值。
// 示例 2：
// 输入：matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// 输出：[12]
// 解释：12 是唯一的幸运数，因为它是其所在行中的最小值，也是所在列中的最大值。
// 示例 3：
// 输入：matrix = [[7,8],[1,2]]
// 输出：[7]
//  
//
// 提示：
// m == mat.length
// n == mat[i].length
// 1 <= n, m <= 50
// 1 <= matrix[i][j] <= 10^5
// 矩阵中的所有元素都是不同的


var luckyNumbers  = function(matrix) {
    if(!matrix.length) return [];
    // 找到所有行最小的
    let rowA = []
    for(let i = 0; i < matrix.length; i++){
        let min = Math.min(...matrix[i]);
        let colIndex = matrix[i].indexOf(min);
        rowA.push(min)
    }
    // 找到所有列最大的数
    let colA = []
    for(let j = 0; j < matrix[0].length; j++){
        let max = Number.MIN_SAFE_INTEGER;
        for(let i = 0; i < matrix.length; i++){
            if(matrix[i][j] > max){
                max = matrix[i][j];
            }
        }
        colA.push(max);
    }
    // 求两个数组的交集
    let res = []
    for(let i = 0; i < rowA.length; i++){
        for(let j = 0; j < colA.length; j++){
            if(rowA[i] === colA[j]){
                res.push(rowA[i]);
                break;
            }
        }
    }
    return res;
};