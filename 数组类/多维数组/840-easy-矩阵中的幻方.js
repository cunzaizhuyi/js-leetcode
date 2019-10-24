// 840 easy 矩阵中的幻方

// 3 x 3 的幻方是一个填充有从 1 到 9 的不同数字的 3 x 3 矩阵，其中每行，每列以及两条对角线上的各数之和都相等。
// 给定一个由整数组成的 grid，其中有多少个 3 × 3 的 “幻方” 子矩阵？（每个子矩阵都是连续的）。
//
// 示例：
// 输入: [[4,3,8,4],
//       [9,5,1,9],
//       [2,7,6,2]]
// 输出: 1
// 解释:
// 下面的子矩阵是一个 3 x 3 的幻方：
// 438
// 951
// 276
//
// 而这一个不是：
// 384
// 519
// 762
//
// 总的来说，在本示例所给定的矩阵中只有一个 3 x 3 的幻方子矩阵。
// 提示:
// 1 <= grid.length <= 10
// 1 <= grid[0].length <= 10
// 0 <= grid[i][j] <= 15
//


var numMagicSquaresInside = (arr) => {
    if(!arr.length) return 0;
    if(arr.length <= 2) return 0;
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++){
        for (let j = 0; j < arr[0].length - 2; j++){
            let a = [
                [arr[i][j], arr[i][j+1], arr[i][j+2]],
                [arr[i+1][j], arr[i+1][j+1], arr[i+1][j+2]],
                [arr[i+2][j], arr[i+2][j+1], arr[i+2][j+2]]
            ]
            if(isHuan(a))count++;
        }
    }
    return count;
}
var isHuan = (arr) => {
    let sum = (arr) => {
        return arr.reduce((p, n) => {
            return p + n;
        }, 0)
    }
    let row1sum = sum(arr[0]);
    let row2sum = sum(arr[1]);
    let row3sum = sum(arr[2]);
    let col1sum = sum([arr[0][0], arr[1][0], arr[2][0]]);
    let col2sum = sum([arr[0][1], arr[1][1], arr[2][1]]);
    let col3sum = sum([arr[0][2], arr[1][2], arr[2][2]]);
    let dia1 = sum([arr[0][0], arr[1][1], arr[2][2]]);
    let dia2 = sum([arr[0][2], arr[1][1], arr[2][0]]);
    let sumArr = [row1sum, row2sum, row3sum, col1sum, col2sum, col3sum, dia1, dia2];
    for (let i = 0; i < sumArr.length - 1; i++){
        if (sumArr[i] !== sumArr[i+1]) return false;
    }
    let set = new Set();
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[0].length; j++){
            if(arr[i][j] > 9 || arr[i][j] < 1)return false;
            set.add(arr[i][j]);
        }
    }
    if(set.size !== 9) return false;
    return true;
}
// console.log(isHuan([[4,3,8], [9,5,1],[2,7,6]]))
console.log(numMagicSquaresInside( [[4,3,8,4],
    [9,5,1,9],
    [2,7,6,2]]))
