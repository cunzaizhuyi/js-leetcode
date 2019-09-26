// 598 -easy 范围求和2

//给定一个初始元素全部为 0，大小为 m*n 的矩阵 M 以及在 M 上的一系列更新操作。
// 操作用二维数组表示，其中的每个操作用一个含有两个正整数 a 和 b 的数组表示，
// 含义是将所有符合 0 <= i < a 以及 0 <= j < b 的元素 M[i][j] 的值都增加 1。
// 在执行给定的一系列操作后，你需要返回矩阵中含有最大整数的元素个数。
//
// 示例 1:
// 输入:
// m = 3, n = 3
// operations = [[2,2],[3,3]]
// 输出: 4
// 解释:
// 初始状态, M =
// [[0, 0, 0],
//  [0, 0, 0],
//  [0, 0, 0]]
//
// 执行完操作 [2,2] 后, M =
// [[1, 1, 0],
//  [1, 1, 0],
//  [0, 0, 0]]
//
// 执行完操作 [3,3] 后, M =
// [[2, 2, 1],
//  [2, 2, 1],
//  [1, 1, 1]]
//
// M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。
//

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    // 好恶心的测试case
    if(!ops.length) return m*n;
    if(m===0 || n===0)return 0;

// 取行向上最小的
    let rowMin = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < ops.length; i++){
        if(ops[i][0] < rowMin){
            rowMin = ops[i][0]
        }
    }
//    取列上最小的值
    let colMin = Number.MAX_SAFE_INTEGER
    for(let j = 0; j < ops.length; j++){
        if(ops[j][1] < colMin){
            colMin = ops[j][1]
        }
    }
//    返回两个最小组成的网格的大小
    return rowMin * colMin;
};

console.log(maxCount(3,3,[[2,2],[3,3]]))