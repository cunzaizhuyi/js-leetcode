// 54 medium 螺旋指针

// 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
// 示例 1:
// 输入:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// 输出: [1,2,3,6,9,8,7,4,5]


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(!matrix || !matrix.length)return [];
    
    let rowNumber = matrix.length;
    let colNumber = matrix[0].length;


    let printArr = [matrix[0][0]];
    let rowIndex = 0;
    let colIndex = 0;
    let moveDirection = 'right';
    let hash = {'00': true}; // 记住遍历过的索引
    let total = rowNumber * colNumber - 1; // 名字起的有点不对，这个是总数索引
    while(total > 0){
        if (moveDirection === 'right') {
            if (colIndex === colNumber - 1) {
                moveDirection = 'down'
                continue;
            } else if (hash[rowIndex + '' + (colIndex + 1)]) {
                moveDirection = 'down'
                continue;
            }
            colIndex++;

        } else if (moveDirection === 'down') {
            if (rowIndex === rowNumber - 1) {
                moveDirection = 'left'
                continue;
            } else if (hash[rowIndex + 1 + '' + colIndex]) {
                moveDirection = 'left'
                continue;
            }
            rowIndex++;

        } else if (moveDirection === 'left') {
            if (colIndex === 0) {
                moveDirection = 'up'
                continue;
            } else if (hash[rowIndex + '' + (colIndex - 1)]) {
                moveDirection = 'up'
                continue;
            }
            colIndex--;
        } else if (moveDirection === 'up') {
            if (rowIndex === 0) {
                moveDirection = 'right'
                continue;
            } else if (hash[rowIndex - 1 + '' + colIndex]) {
                moveDirection = 'right'
                continue;
            }
            rowIndex--;

        }

        printArr.push(matrix[rowIndex][colIndex]);
        hash[rowIndex + '' + colIndex] = true;

        total--;
    }

    return printArr;
};

console.log(spiralOrder([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
]))