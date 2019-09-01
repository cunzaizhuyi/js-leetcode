// 693 easy 交替位二进制数

// 给定一个正整数，检查他是否为交替位二进制数：换句话说，就是他的二进制数相邻的两个位数永不相等。
//
// 示例 1:
// 输入: 5
// 输出: True
// 解释:
// 5的二进制数是: 101

// 示例 2:
// 输入: 7
// 输出: False
// 解释:
// 7的二进制数是: 111

// 示例 3:
// 输入: 11
// 输出: False
// 解释:
// 11的二进制数是: 1011

// 示例 4:
// 输入: 10
// 输出: True

// 解释:
// 10的二进制数是: 1010


/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let bin = n.toString(2);
    if(bin.length === 1) return true;
    if (bin.length === 2) return bin[0] !== bin[1]
    for(let i = 1; i < bin.length - 1; i++){
        if(bin[i] === bin[i-1] || bin[i] === bin[i+1]){
            return false
        }
    }
    return true
};

console.log(hasAlternatingBits(5))
console.log(hasAlternatingBits(7))
console.log(hasAlternatingBits(11))
console.log(hasAlternatingBits(10))
console.log(hasAlternatingBits(3))