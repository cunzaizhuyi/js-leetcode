// 1020 medium 飞地的数量

// 给出一个二维数组 A，每个单元格为 0（代表海）或 1（代表陆地）。
// 移动是指在陆地上从一个地方走到另一个地方（朝四个方向之一）或离开网格的边界。
// 返回网格中无法在任意次数的移动中离开网格边界的陆地单元格的数量。
//
// 示例 1：
// 输入：[[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
// 输出：3
// 解释：
// 有三个 1 被 0 包围。一个 1 没有被包围，因为它在边界上。
// 示例 2：
// 输入：[[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
// 输出：0
// 解释：
// 所有 1 都在边界上或可以到达边界。
//  
// 提示：
// 1 <= A.length <= 500
// 1 <= A[i].length <= 500
// 0 <= A[i][j] <= 1
// 所有行的大小都相同
//



let numEnclaves = (arr) => {
    if (!arr.length) return 0;
    let hash1 = {}; // 已经遍历过的1
    let total = 0; // 结果
    let curCount = 0; // 当前遍历地块的面积
    let isFlyLand  = true; // 默认当前遍历的土地是飞地
    let dfs = (row, col, arr) => {
        if (row < 0 || row > arr.length - 1 || col < 0 || col > arr[0].length - 1) return;
        if (arr[row][col] === 0) return;

        if (hash1[row + '_' + col]) return;
        if (!hash1[row + '_' + col]){
            hash1[row + '_' + col] = true;
            // 如果当前的地块1，处在边界上，那么这块地不是飞地
            if (row === 0 || col === 0 || row === arr.length - 1 || col === arr[0].length - 1){
                isFlyLand = false;
            }
            ++curCount;
            dfs(row + 1, col, arr);
            dfs(row - 1, col, arr);
            dfs(row, col + 1, arr);
            dfs(row, col - 1, arr);
        }
    }

    // 注意搜索范围，无需包含四条边界
    for (let i = 1; i < arr.length - 1; i++){
        for (let j = 1; j < arr[0].length - 1; j++){
            if (arr[i][j] === 0) continue;
            if (hash1[i + '_' +j]) continue;

            dfs(i, j, arr);
            if (isFlyLand){
                total += curCount;
            }
            // 重置状态
            curCount = 0;
            isFlyLand = true;
        }
    }
    return total;
}
//
// console.log(numEnclaves([
//     [1, 1, 0, 1],
//     [0, 0, 1, 0],
//     [0, 1, 0, 1],
//     [1, 0, 1, 0]
// ]))