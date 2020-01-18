// 695 medium 岛屿的最大面积


// 给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。
// 你可以假设二维矩阵的四个边缘都被水包围着。
//
// 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)
//
// 示例 1:
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// 对于上面这个给定矩阵应返回 6。注意答案不应该是11，因为岛屿只能包含水平或垂直的四个方向的‘1’。
//
// 示例 2:
// [[0,0,0,0,0,0,0,0]]
// 对于上面这个给定的矩阵, 返回 0。
//
// 注意: 给定的矩阵grid 的长度和宽度都不超过 50。
//


// 695
let maxAreaOfIsland = (arr) => {
    if (!arr.length) return 0;
    let maxCount = 0;
    let curCount = 0;
    let hash1 = {}; // 都遍历过哪些1
    let dfs = (row, col, arr) => {
        if (row < 0 || row > arr.length - 1) return;
        if (col < 0 || col > arr[0].length - 1) return;
        // 碰到0，就是边界
        if (arr[row][col] === 0) return;
        if (hash1[row + '_' + col]) return;
        if(!hash1[row + '_' + col]){
            hash1[row + '_' + col] = true;
            ++curCount;
            dfs(row + 1, col, arr)
            dfs(row - 1, col, arr)
            dfs(row, col + 1, arr)
            dfs(row, col - 1, arr)
        }
    }
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[0].length; j++){
            if (arr[i][j] === 0) continue;
            if (hash1[i + '_' + j]) continue;

            dfs(i, j, arr);
            // 更新最大值
            maxCount = Math.max(maxCount, curCount)
            // 重置下一个岛屿的面积数
            curCount = 0;
        }
    }
    return maxCount;
}
//
// console.log(maxAreaOfIsland([
//     [1, 1, 0, 1],
//     [0, 0, 1, 1],
//     [0, 0, 0, 1],
//     [1, 1, 1, 0]
// ]))