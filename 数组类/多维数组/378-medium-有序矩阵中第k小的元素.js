// 378. 有序矩阵中第K小的元素 medium

// 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素。
// 请注意，它是排序后的第k小元素，而不是第k个元素。
//
// 示例:
//
//     matrix = [
//         [ 1,  5,  9],
//         [10, 11, 13],
//         [12, 13, 15]
//     ],
//         k = 8,
//
//         返回 13。
// 说明:
// 你可以假设 k 的值永远是有效的, 1 ≤ k ≤ n2 。


/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
//    拉平数组
    let arr = []
    for(let i = 0; i < matrix.length; i++){
        arr.push(...matrix[i])
    }
    arr.sort((a, b) => {
        return a-b
    })
    return arr[k-1]
};