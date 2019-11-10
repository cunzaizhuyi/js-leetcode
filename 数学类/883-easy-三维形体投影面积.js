//883. 三维形体投影面积 easy

// 在 N * N 的网格中，我们放置了一些与 x，y，z 三轴对齐的 1 * 1 * 1 立方体。
// 每个值 v = grid[i][j] 表示 v 个正方体叠放在单元格 (i, j) 上。
// 现在，我们查看这些立方体在 xy、yz 和 zx 平面上的投影。
// 投影就像影子，将三维形体映射到一个二维平面上。
// 在这里，从顶部、前面和侧面看立方体时，我们会看到“影子”。
// 返回所有三个投影的总面积。
//

/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    if(!grid.length) return 0;
    if (grid.length === 1) return 1 + 2 * grid[0][0];
    // 底面
    let bottom = 0
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] !== 0){
                bottom++;
            }
        }
    }
    // 侧面1:
    let a = 0;
    for(let i = 0; i < grid.length; i++){
        a += Math.max(...grid[i]);
    }

    // 侧面2
    let b = 0
    for(let j = 0; j < grid[0].length; j++){
        let max = grid[0][j];
        for(let i = 1; i < grid.length; i++){
            if(grid[i][j] > max){
                max = grid[i][j];
            }
        }
        b += max;
    }
    return a + b + bottom;
};
console.log(projectionArea([[1,1,1],[1,0,1],[1,1,1]]))