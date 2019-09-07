// 119 easy 杨辉三角2
// 跟118的区别是只返回第N行，不用返回全部行

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1]
    if (rowIndex === 1) return [1,1]
    let result = [[1], [1,1]]
    for (let i = 2; i <= rowIndex; i++) {
        let preArr = result[i - 1]
        let iRow = [1]
        for (let j = 0; j <= preArr.length - 2; j++) {
            iRow.push(preArr[j] + preArr[j + 1])
        }
        iRow.push(1)
        result.push(iRow)
    }
    return result[rowIndex]
};

console.log(getRow(1))