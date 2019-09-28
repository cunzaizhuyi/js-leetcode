// 502 medium 01矩阵

// 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
// 两个相邻元素间的距离为 1 。
//
// 示例 1:
// 输入:
// 0 0 0
// 0 1 0
// 0 0 0
// 输出:
// 0 0 0
// 0 1 0
// 0 0 0
// 示例 2:
// 输入:
// 0 0 0
// 0 1 0
// 1 1 1
// 输出:
// 0 0 0
// 0 1 0
// 1 2 1
// 注意:
// 给定矩阵的元素个数不超过 10000。
// 给定矩阵中至少有一个元素是 0。
// 矩阵中的元素只在四个方向上相邻: 上、下、左、右。


/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    if(!matrix.length)return []
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 1){
                let min = 10000
                // 再次遍历
                for(let k = 0; k < matrix.length; k++){
                    for(let m = 0; m < matrix[0].length; m++){
                        if(matrix[k][m] === 0){
                            let dis = Math.abs(k - i) + Math.abs(j-m)
                            if(dis < min) min = dis;
                        }
                    }
                }
                matrix[i][j] = min;
            }
        }
    }
    return matrix
};

// console.log(updateMatrix([[0, 0, 0],
//     [0, 1, 0],
//     [1, 1, 1]]))
// console.log(updateMatrix([[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0]]))
console.log(updateMatrix([
    [1,0,1,1,0,0,1,0,0,1],
    [0,1,1,0,1,0,1,0,1,1],
    [0,0,1,0,1,0,0,1,0,0],
    [1,0,1,0,1,1,1,1,1,1],
    [0,1,0,1,1,0,0,0,0,1],
    [0,0,1,0,1,1,1,0,1,0],
    [0,1,0,1,0,1,0,0,1,1],
    [1,0,0,0,1,1,1,1,0,1],
    [1,1,1,1,1,1,1,0,1,0],
    [1,1,1,1,0,1,0,0,1,1]]))