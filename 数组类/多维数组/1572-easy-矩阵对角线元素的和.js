// 1572. 矩阵对角线元素的和 easy

// 给你一个正方形矩阵 mat，请你返回矩阵对角线元素的和。
// 请你返回在矩阵主对角线上的元素和副对角线上且不在主对角线上元素的和。


//提示：
// n == mat.length == mat[i].length
// 1 <= n <= 100
// 1 <= mat[i][j] <= 100

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[0].length; j++){
            if(i ===j || i + j === mat.length - 1){
                sum += mat[i][j];
            }
        }
    }
    return sum;
};

console.log('111: ', diagonalSum([[1,2,3],[4,5,6],[7,8,9]])); // 25