// 661 easy 图片平滑器
//
// 包含整数的二维矩阵 M 表示一个图片的灰度。你需要设计一个平滑器来让每一个单元的灰度成为平均灰度 (向下舍入) ，平均灰度的计算是周围的8个单元和它本身的值求平均，如果周围的单元格不足八个，则尽可能多的利用它们。
//
// 示例 1:
// 输入:
//     [[1,1,1],
//     [1,0,1],
//     [1,1,1]]
// 输出:
//     [[0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]]

// 解释:
// 对于点 (0,0), (0,2), (2,0), (2,2): 平均(3/4) = 平均(0.75) = 0
// 对于点 (0,1), (1,0), (1,2), (2,1): 平均(5/6) = 平均(0.83333333) = 0
// 对于点 (1,1): 平均(8/9) = 平均(0.88888889) = 0

// 注意:
// 给定矩阵中的整数范围为 [0, 255]。
// 矩阵的长和宽的范围均为 [1, 150]。

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    let newArr = generateArr(M.length, M[0].length);
    for(let i = 0; i <= M.length - 1; i++){
        for(let j = 0; j <= M[0].length - 1; j++){
            newArr[i][j] = cellSmooth(M, i, j)
        }
    }
    return newArr
};

let cellSmooth = (board, i, j) => {
    let sum = 0, count = 0;
    for(let k = i - 1; k <= i + 1; k++){
        for(let m = j - 1; m <= j + 1; m++){
            // 没有这一行，负一行或者超出最后一行
            if (!board[k]) continue;
            // -1列，或超出最后一列
            if (board[k][m] === undefined) continue;
            sum += board[k][m]
            count++;
        }
    }
    return Math.floor(sum / count);
};

let generateArr = (m, n) => {
    let arr = []
    for(let i = 0; i < m; i++){
        arr.push([])
        for(let j = 0; j < n; j++){
            arr[i].push(0)
        }
    }
    return arr;
}

console.log(imageSmoother([[1,1,1],
    [1,0,1],
    [1,1,1]]))