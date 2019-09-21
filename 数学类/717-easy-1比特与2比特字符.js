// 717 easy 1比特与2比特字符

// 有两种特殊字符。第一种字符可以用一比特0来表示。第二种字符可以用两比特(10 或 11)来表示。
// 现给一个由若干比特组成的字符串。问最后一个字符是否必定为一个一比特字符。给定的字符串总是由0结束。
//
// 示例 1:
// 输入:
// bits = [1, 0, 0]
// 输出: True
// 解释:
// 唯一的编码方式是一个两比特字符和一个一比特字符。所以最后一个字符是一比特字符。

// 示例 2:
// 输入:
//     bits = [1, 1, 1, 0]
// 输出: False
// 解释:
//     唯一的编码方式是两比特字符和两比特字符。所以最后一个字符不是一比特字符。
// 注意:
//     1 <= len(bits) <= 1000.
// bits[i] 总是0 或 1.


/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    if(bits.length === 1) return true;
    if(bits.length === 2 && bits[0] === 0)return true;
    if(bits.length === 2 && bits[0] === 1)return false;

    if(bits[bits.length - 2] === 0) return true;

    let index = 0
    while(index < bits.length){
        if(index === bits.length - 3) {
            if(bits[index] === 0 && bits[index+1] === 1)return false;
            if(bits[index] === 0 && bits[index+1] === 0)return false;
            if(bits[index] === 1)return true;
        }
        if(index === bits.length - 2){
            if(bits[index] === 0)return true;
            else return false;
        }
        if(bits[index] === 1){
            index += 2;
        }
        if(bits[index] === 0){
            index++;
        }
    }

};