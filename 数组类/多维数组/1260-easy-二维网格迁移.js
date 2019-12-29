//1260. 二维网格迁移 easy


//给你一个 n 行 m 列的二维网格 grid 和一个整数 k。你需要将 grid 迁移 k 次。
//
// 每次「迁移」操作将会引发下述活动：
//
// 位于 grid[i][j] 的元素将会移动到 grid[i][j + 1]。
// 位于 grid[i][m - 1] 的元素将会移动到 grid[i + 1][0]。
// 位于 grid[n - 1][m - 1] 的元素将会移动到 grid[0][0]。
// 请你返回 k 次迁移操作后最终得到的 二维网格。

//提示：
// 1 <= grid.length <= 50
// 1 <= grid[i].length <= 50
// -1000 <= grid[i][j] <= 1000
// 0 <= k <= 100


/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    if (!grid.length) return [];
    // 根据K的大小，重新构造一个二维网格返回即可。
    // 不过首先对K取模
    let len = (grid.length * grid[0].length);
    let K = k % len;
    // 拉平数组
    let flatArr = []
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            flatArr.push(grid[i][j])
        }
    }
    // 后半段要放到前边
    let lastPart = flatArr.slice(len - K);
    let frontPart = flatArr.slice(0, len- K);
    let newArr = lastPart.concat(frontPart);
    // 把这个新的扁平数组再变成二维的；
    let result = []
    let start = 0
    while(result.length !== grid.length){
        let row = newArr.slice(start, start + grid[0].length)
        result.push(row)
        start += grid[0].length;
    }
    return result;
};

console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1))





