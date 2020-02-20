//面试题 05.07. 配对交换 easy

// 配对交换。编写程序，交换某个整数的奇数位和偶数位，尽量使用较少的指令（也就是说，位0与位1交换，位2与位3交换，以此类推）。
//
// 示例1:
//  输入：num = 2（或者0b10）
//  输出 1 (或者 0b01)

// 示例2:
//  输入：num = 3
//  输出：3

// 提示:
// num的范围在[0, 2^30 - 1]之间，不会发生整数溢出。


var exchangeBits = function(num) {
    let binStr = num.toString(2);
    let arr = [];
    for (let i = binStr.length - 1; i >= 0; i = i - 2) {
        if (i - 1 >= 0){
            arr.push(binStr[i-1])
            arr.push(binStr[i])
        } else {
            arr.push(0) // 题目没说，但是要补0
            arr.push(binStr[i])
        }
    }
    return parseInt(arr.reverse().join(''),2);
};