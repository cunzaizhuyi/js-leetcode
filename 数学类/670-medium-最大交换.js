// 670. 最大交换 medium

// 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。
//
// 示例 1 :
// 输入: 2736
// 输出: 7236
// 解释: 交换数字2和数字7。
// 示例 2 :
// 输入: 9973
// 输出: 9973
// 解释: 不需要交换。
// 注意:
// 给定数字的范围是 [0, 108]

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let arr = (num + '').split('');
    let sortedArr = [...arr]
    sortedArr.sort((a, b) => {
        return b - a;
    });
    for(let i = 0; i < arr.length; i++){
        if (arr[i] !== sortedArr[i]){
            let index = arr.lastIndexOf(sortedArr[i]);
            [arr[i], arr[index]] = [arr[index], arr[i]]
            break;
        }
    }
    return arr.join('') / 1;
};

console.log(maximumSwap(1993))