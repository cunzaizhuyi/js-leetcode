// 200 medium 岛屿数量

//给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。
// 一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。
// 
// 示例 1:
// 输入:
// 11110
// 11010
// 11000
// 输出: 1

// 示例 2:
// 输入:
// 11000
// 11000
// 00100
// 00011
// 输出: 3
// 


/*
    * [
    *   [1, 1, 0, 1],
    *   [0, 0, 1, 1],
    *   [1, 1, 0, 0]
    * ]
    * */
var numIslands = (arr) => {
    if (!arr.length) return 0;
    // 结果数目
    let count = 0;
    let hashArr = {} // 是否遍历过某元素
    let hash1 = {}; // 是否用过某个1
    let fn = (arr, row, col) => {
        if (row < 0 || row > arr.length - 1){
            return;
        }
        if (col < 0 || col > arr[0].length - 1){
            return;
        }
        if (hashArr[row + '_' + col]) return;
        hashArr[row + '_' + col] = true;
        if (arr[row][col] === '0') return;
        // 四个方向
        if (hash1[row + '_' + col]) return;
        hash1[row + '_' + col] = true;
        fn(arr, row - 1, col);
        fn(arr, row + 1, col);
        fn(arr, row, col - 1);
        fn(arr, row, col + 1);
    }
    // 每个点都可能是起点
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[0].length; j++){
            if (arr[i][j] === '0') continue;
            if (hash1[i + '_' + j]) continue;
            count++;
            fn(arr, i, j);
        }
    }
    return count;
}

// console.log('zhe: ', getIsland([
//     [1, 1, 0, 1],
//     [0, 0, 1, 1],
//     [1, 1, 0, 1]
// ]))