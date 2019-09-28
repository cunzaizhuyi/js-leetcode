//861 medium 翻转矩阵后的得分

// 有一个二维矩阵 A 其中每个元素的值为 0 或 1 。
// 移动是指选择任一行或列，并转换该行或列中的每一个值：将所有 0 都更改为 1，将所有 1 都更改为 0。
// 在做出任意次数的移动后，将该矩阵的每一行都按照二进制数来解释，矩阵的得分就是这些数字的总和。
// 返回尽可能高的分数。
//
//
// 示例：
// 输入：[[0,0,1,1],[1,0,1,0],[1,1,0,0]]
// 输出：39
// 解释：
// 转换为 [[1,1,1,1],[1,0,0,1],[1,1,1,1]]
// 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
//
// 提示：
// 1 <= A.length <= 20
// 1 <= A[0].length <= 20
// A[i][j] 是 0 或 1


/**
 * 对数组只进行过行反转
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    let rowN = A.length;
    let colN = A[0].length;
    // 通过遍历行，保证每行第一位是1，这样才能取到最大数
    let result = rowN * (1 << colN - 1);
    for(let i = 0; i < A.length; i++){
        if(A[i][0] === 0){
            for(let j = 1; j < colN; j++){
                A[i][j] = (A[i][j] ^ 1);
            }
        }
    }

    // 遍历列，从第二列开始。计算该列1的数量，对比0的数量。使得1的数量较多即可。
    for(let j = 1; j < A[0].length; j++){
        // 计算1的个数
        let count = 0
        for(let i = 0; i < A.length; i++){
            if(A[i][j] === 1){
                count++;
            }
        }

        // 比较0和1的个数
        count = Math.max(count, rowN - count)
        result += count * (1 << colN - j -1)
    }
    return result;
};

console.log(matrixScore([[0,0,1,1],[1,0,1,0],[1,1,0,0]]))