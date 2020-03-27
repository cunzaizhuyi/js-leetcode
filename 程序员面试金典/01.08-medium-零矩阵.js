// 面试题 01.08. 零矩阵


// 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。
//
// 示例 1：
// 输入：
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// 输出：
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]
// 示例 2：
//
// 输入：
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// 输出：
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]
//

var setZeroes = function(matrix) {
    // 标记出来所有需要清零的行和列
    let row = new Set()
    let col = new Set()
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if (matrix[i][j] === 0){
                row.add(i);
                col.add(j);
            }
        }
    }
    // 行清零
    row = Array.from(row);
    for(let i = 0; i < row.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            matrix[row[i]][j] = 0;
        }
    }
    // 列清零
    col = Array.from(col);
    for(let j = 0; j < col.length; j++){
        for(let i = 0; i < matrix.length; i++){
            matrix[i][col[j]] = 0;
        }
    }
    return matrix;
};