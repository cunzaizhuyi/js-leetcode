//1252. 奇数值单元格的数目 easy

//给你一个 n 行 m 列的矩阵，最开始的时候，每个单元格中的值都是 0。
// 另有一个索引数组 indices，indices[i] = [ri, ci] 中的 ri 和 ci 分别表示指定的行和列（从 0 开始编号）。
// 你需要将每对 [ri, ci] 指定的行和列上的所有单元格的值加 1。
// 请你在执行完所有 indices 指定的增量操作后，返回矩阵中 「奇数值单元格」 的数目。
//
// 例子：请看LeetCode：https://leetcode-cn.com/problems/cells-with-odd-values-in-a-matrix/

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    // 构造一个都是0的初始矩阵，统计每个单元格需要进行几次变化

    // 构造初始矩阵，默认都是0
    let newArr = []
    for(let i = 0; i < n; i++){
        if (!newArr[i]) newArr[i] = [];
        for(let j = 0; j < m; j++){
            newArr[i][j] = 0
        }
    }
    // 统计变化
    for(let i = 0; i < indices.length; i++){
        // 行
        let rowIndex = indices[i][0];
        for(let colIndex = 0; colIndex < m; colIndex++){
            newArr[rowIndex][colIndex] += 1;
        }
        // 列
        let colIndex = indices[i][1];
        for(let rowIndex = 0; rowIndex < n; rowIndex++){
            newArr[rowIndex][colIndex] += 1;
        }
    }
    // 遍历原数组
    let result = 0;
    for(let i = 0; i < newArr.length; i++){
        for(let j = 0; j < newArr[0].length; j++){
            // 有多少奇数 单元格，  结果就是多少
            if (newArr[i][j] % 2 !== 0){
                result++;
            }
        }
    }
    return result;
};