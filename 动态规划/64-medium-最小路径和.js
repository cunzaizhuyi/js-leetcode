// 64 medium 最小路径和

// 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步。
//
// 示例:
//     输入:
//         [
//             [1,3,1],
//             [1,5,1],
//             [4,2,1]
//         ]
// 输出: 7
// 解释: 因为路径 1→3→1→1→1 的总和最小。


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(!grid.length) return 0;
    let dp = [[]]
    // 第一行都是前面数累加
    let sum = 0
    for(let i = 0; i < grid[0].length; i++){
        sum += grid[0][i];
        dp[0].push(sum)
    }
    
    // 第一列都是前面数累加, 从第二行开始，因为左上角的数已经上面计算过了
    let sum2 = dp[0][0];
    for(let i = 1; i < grid.length; i++){
        sum2 += grid[i][0];
        dp[i] = [];
        dp[i].push(sum2);
    }

    // 遍历从 网格1，1 开始
    for(let i = 1; i < grid.length; i++){
        for(let j = 1; j < grid[0].length; j++){
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
        }
    }
    
    return dp[dp.length-1][dp[0].length-1];
};

console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
]))