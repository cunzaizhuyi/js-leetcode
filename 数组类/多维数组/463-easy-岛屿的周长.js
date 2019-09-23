// 463 easy 岛屿的周长

// 给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。
// 网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，
// 但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
// 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。
// 网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。
//
//
// 示例 :
//
//     输入:
//         [[0,1,0,0],
//          [1,1,1,0],
//          [0,1,0,0],
//          [1,1,0,0]]
//
// 输出: 16
// 解释: 它的周长是下面图片中的 16 个黄色的边：


/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let sum = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 1){
                let a = 4
            //    shang
                if(grid[i-1] && grid[i-1][j] && grid[i-1][j] === 1){
                    a--;
                }
            //    xia
                if (grid[i + 1] && grid[i + 1][j] && grid[i + 1][j] === 1) {
                    a--;
                }
            //    zuo
                if (grid[i][j - 1] && grid[i][j - 1] === 1) {
                    a--
                }
                if (grid[i][j + 1] && grid[i][j + 1] === 1) {
                    a--
                }
                sum += a;
            }
        }
    }
    return sum;
};
console.log(islandPerimeter([[0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]]))