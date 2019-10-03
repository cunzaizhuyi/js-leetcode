// 59 medium 螺旋矩阵2

// 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
//
// 示例:
// 输入: 3
// 输出:
//     [
//         [ 1, 2, 3 ],
//         [ 8, 9, 4 ],
//         [ 7, 6, 5 ]
//     ]


/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if(n===0)return [];
    if(n ===1) return [[1]];
    if(n===2) return [[1,2], [4,3]];

    // 生成数组
    let arr = []
    for(let i = 0; i < n; i++){
        arr[i] = []
    }


    let colNumber = n;
    let rowNumber = n;
    let rowIndex = 0;
    let colIndex = 0;
    let moveDirection = 'right'; // 初始方向
    arr[0][0] = 1;
    let hash = {'0_0': true}; // 记住遍历过的索引
    let total = 1; // 名字起的有点不对，这个是总数索引
    while(total < n * n){
        if (moveDirection === 'right') {
            if (colIndex === colNumber - 1) {
                moveDirection = 'down'
                continue;
            } else if (hash[rowIndex + '_' + (colIndex + 1)]) {
                moveDirection = 'down'
                continue;
            }
            colIndex++;

        } else if (moveDirection === 'down') {
            if (rowIndex === rowNumber - 1) {
                moveDirection = 'left'
                continue;
            } else if (hash[rowIndex + 1 + '_' + colIndex]) {
                moveDirection = 'left'
                continue;
            }
            rowIndex++;

        } else if (moveDirection === 'left') {
            if (colIndex === 0) {
                moveDirection = 'up'
                continue;
            } else if (hash[rowIndex + '_' + (colIndex - 1)]) {
                moveDirection = 'up'
                continue;
            }
            colIndex--;

        } else if (moveDirection === 'up') {
            if (rowIndex === 0) {
                moveDirection = 'right'
                continue;
            } else if (hash[rowIndex - 1 + '_' + colIndex]) {
                moveDirection = 'right'
                continue;
            }
            rowIndex--;
        }

        hash[rowIndex + '_' + colIndex] = true;
        total++;
        arr[rowIndex][colIndex] = total;
    }
    return arr;
};

console.log(generateMatrix(12))