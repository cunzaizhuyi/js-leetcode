// 62 medium 不同路径

// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
// 问总共有多少条不同的路径？
//
//
//
// 例如，上图是一个7 x 3 的网格。有多少可能的路径？
// 说明：m 和 n 的值均不超过 100。
//
// 示例 1:
// 输入: m = 3, n = 2
// 输出: 3
// 解释:
// 从左上角开始，总共有 3 条路径可以到达右下角。
// 1. 向右 -> 向右 -> 向下
// 2. 向右 -> 向下 -> 向右
// 3. 向下 -> 向右 -> 向右

// 示例 2:
// 输入: m = 7, n = 3
// 输出: 28


/**
 * 递归法  超时
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m===1 || n === 1) return 1;
    return uniquePaths(m-1, n) + uniquePaths(m, n-1)
};



/**
 * 迭代
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths2 = function(m, n) {
    if(m===1 || n === 1) return 1;
    if (m === 2 && n === 2) return 2;
    if(m=== 3 && n===2)return 3;
    if(m=== 2 && n===3)return 3;
    let arr = new Array(m).fill([])
    arr.forEach((row, index) => {
        arr[index] = new Array(n).fill(1)
    })
    arr[0][0] = 1;
    arr[0][1] = 1;
    arr[1][0] = 1;
    arr[1][1] = 2;
    for(let i = 1; i < arr.length; i++){
        for(let j = 1; j < arr[0].length; j++){
            arr[i][j] = arr[i-1][j] + arr[i][j-1]
        }
    }
    return arr[m-1][n-1]
};

console.log(uniquePaths2(2,9))