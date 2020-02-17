
// 17 easy 打印从1到最大的n位数

/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let result = [];
    let max = Math.pow(10, n) - 1;
    for(let i = 1; i <= max; i++){
        result.push(i)
    }
    return result;
};