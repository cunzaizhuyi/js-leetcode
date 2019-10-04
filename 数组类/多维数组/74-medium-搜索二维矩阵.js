//74. 搜索二维矩阵 medium

//编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
// 每行中的整数从左到右按升序排列。
// 每行的第一个整数大于前一行的最后一个整数。
// 示例 1:
//
// 输入:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// 输出: true
// 示例 2:
//
// 输入:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// 输出: false

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || !matrix.length) return false;
    if(matrix.length === 1) return matrix[0].indexOf(target) > -1;

    // 多行情况下 按行二分
    let colN = matrix[0].length;
    let l = 0;
    let r = matrix.length-1;
    while(l <= r){
        let mid = ~~((l + r) / 2);
        if (target >= matrix[mid][0] && target <= matrix[mid][colN - 1]){
            // 锁定该行
            return matrix[mid].indexOf(target) > -1;
        } else if(target < matrix[mid][0]){
            r = mid -1;
        } else if(target > matrix[mid][colN - 1]){
            l = mid + 1;
        }
    }
    return false;
};