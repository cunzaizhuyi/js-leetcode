// 289 medium 生命游戏
//
// 根据百度百科，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在1970年发明的细胞自动机。
// 给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。
// 每个细胞具有一个初始状态 live（1）即为活细胞， 或 dead（0）即为死细胞。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：
//
// 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
// 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
// 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
// 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；

// 根据当前状态，写一个函数来计算面板上细胞的下一个（一次更新后的）状态。
// 下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。
//
// 示例:
//
//     输入:
//         [
//             [0,1,0],
//             [0,0,1],
//             [1,1,1],
//             [0,0,0]
//         ]
// 输出:
//     [
//         [0,0,0],
//         [1,0,1],
//         [0,1,1],
//         [0,1,0]
//     ]

// 进阶:
// 你可以使用原地算法解决本题吗？请注意，面板上所有格子需要同时被更新：你不能先更新某些格子，然后使用它们的更新后的值再更新其他格子。
// 本题中，我们使用二维数组来表示面板。原则上，面板是无限的，但当活细胞侵占了面板边界时会造成问题。你将如何解决这些问题？

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let lastColIndex = board[0].length - 1;
    let lastRowIndex = board.length - 1;

    let newArr = generateArr(board.length, board[0].length);
    for(let i = 0; i <= lastRowIndex; i++){
        for(let j = 0; j <= lastColIndex; j++){
            newArr[i][j] = cellNext(board, i, j)
        }
    }

    // 因为要原地，所以。。。只能重新赋值一遍
    for(let i = 0; i <= lastRowIndex; i++){
        for(let j = 0; j <= lastColIndex; j++){
            board[i][j] = newArr[i][j]
        }
    }
    return board
};

let cellNext = (board, i, j) => {

    // 取周围8个cell的索引
    let liveCount = 0;
    // 按行拿
    for(let k = i - 1; k <= i + 1; k++){
        for(let m = j - 1; m <= j + 1; m++){
            if (k !== i || m !== j){
                // 没有这一行，说明在计算的cell是第一行的
                if (!board[k]) continue;
                if (board[k][m] === 1) liveCount++;
            }
        }
    }
    if (liveCount === 3) return 1;
    if (liveCount === 2) return board[i][j];
    if (liveCount < 2 || liveCount > 3) return 0;
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

console.log(gameOfLife([
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
]));