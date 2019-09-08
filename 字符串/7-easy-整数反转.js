// easy 7 整数反转

// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
//
// 示例 1:
// 输入: 123
// 输出: 321

// 示例 2:
// 输入: -123
// 输出: -321

// 示例 3:
// 输入: 120
// 输出: 21
// 注意:
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr = (x + '').split('');
    let res
    if(arr[0] === '-'){
        res = +('-' + arr.slice(1).reverse().join(''))
    } else {
        res = arr.reverse().join('') / 1
    }
    if (res > Math.pow(2,31) -1 || res < - Math.pow(2, 31)){
        return 0
    }else {
        return res;
    }
};